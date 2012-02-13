/*
 * Copyright (C) 2011 B3Partners B.V.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package nl.b3p.viewer.config.services;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.persistence.*;
import nl.b3p.web.WaitPageStatus;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.geotools.data.DataStore;
import org.geotools.data.DataStoreFinder;
import org.geotools.data.simple.SimpleFeatureSource;
import org.geotools.data.wfs.WFSDataStoreFactory;
import org.json.JSONException;
import org.json.JSONObject;
import org.opengis.feature.type.AttributeType;

/**
 *
 * @author Matthijs Laan
 */
@Entity
@DiscriminatorValue(WFSFeatureSource.PROTOCOL)
public class WFSFeatureSource extends FeatureSource {
    private static final Log log = LogFactory.getLog(WFSFeatureSource.class);
    
    public static final String PROTOCOL = "wfs";
    
    public WFSFeatureSource() {
        super();
    }
    
    public WFSFeatureSource(Map params) throws JSONException {
        super();

        String wfsUrl = params.get(WFSDataStoreFactory.URL.key).toString();
        if(!wfsUrl.endsWith("&") && !wfsUrl.endsWith("?")){
            wfsUrl += wfsUrl.indexOf("?") >= 0 ? "&" : "?";
        }                    
        wfsUrl = wfsUrl + "REQUEST=GetCapabilities&SERVICE=WFS&VERSION=1.0.0";        
        
        setUrl(wfsUrl);
        // XXX username and password keys
    }    

    public void loadFeatureTypes() throws Exception {
        loadFeatureTypes(new WaitPageStatus());
    }
    
    public void loadFeatureTypes(WaitPageStatus status) throws Exception {
        status.setCurrentAction("Ophalen informatie...");

        DataStore store = null;
        try {
            store = createDataStore();
            status.setProgress(10);
            status.setCurrentAction("Lijst van type-namen ophalen...");
            String[] typeNames = store.getTypeNames();
            status.setProgress(20);        

            /* XXX generalize this code and exact same code in JDBCFeatureSource */
            if(typeNames.length != 0) {
                double progress = 20.0;
                double progressPerTypeName = (80.0/typeNames.length);
                for(String typeName: typeNames) {
                    status.setCurrentAction("Inladen schema van type \"" + typeName + "\"...");
                    log.debug("Loading feature source " + typeName + " for WFS url " + getUrl());

                    SimpleFeatureSource gtFs = store.getFeatureSource(typeName);

                    SimpleFeatureType sft = new SimpleFeatureType();
                    sft.setTypeName(typeName);
                    sft.setFeatureSource(this);
                    sft.setWriteable(true);
                    if(gtFs.getInfo() != null) {
                        sft.setDescription(gtFs.getInfo().getDescription());
                    }

                    org.opengis.feature.simple.SimpleFeatureType gtFt = gtFs.getSchema();

                    for(org.opengis.feature.type.AttributeDescriptor gtAtt: gtFt.getAttributeDescriptors()) {
                        AttributeDescriptor att = new AttributeDescriptor();
                        sft.getAttributes().add(att);
                        att.setName(gtAtt.getLocalName());

                        AttributeType gtType = gtAtt.getType();
                        String binding = gtType.getBinding().getName();

                        /* XXX use instanceof... */                        
                        String type = "";
                        if(binding.equals("com.vividsolutions.jts.geom.MultiPolygon")){
                            type = AttributeDescriptor.TYPE_GEOMETRY_MPOLYGON;
                        }else if(binding.equals("com.vividsolutions.jts.geom.Polygon")){
                            type = AttributeDescriptor.TYPE_GEOMETRY_POLYGON;
                        }else if(binding.equals("com.vividsolutions.jts.geom.Geometry")){
                            type = AttributeDescriptor.TYPE_GEOMETRY;
                        }else if(binding.equals("com.vividsolutions.jts.geom.LineString")){
                            type = AttributeDescriptor.TYPE_GEOMETRY_LINESTRING;
                        }else if(binding.equals("com.vividsolutions.jts.geom.Point")){
                            type = AttributeDescriptor.TYPE_GEOMETRY_POINT;
                        }else if(binding.equals("com.vividsolutions.jts.geom.MultiLineString")){
                            type = AttributeDescriptor.TYPE_GEOMETRY_MLINESTRING;
                        }else if(binding.equals("com.vividsolutions.jts.geom.MultiPoint")){
                            type = AttributeDescriptor.TYPE_GEOMETRY_MPOINT;
                        }else if(binding.equals("java.lang.Boolean")){
                            type = AttributeDescriptor.TYPE_BOOLEAN;
                        }else if(binding.equals("java.lang.Long")){
                            type = AttributeDescriptor.TYPE_INTEGER;
                        }else if(binding.equals("java.lang.String")){
                            type = AttributeDescriptor.TYPE_STRING;
                        }else if(binding.equals("java.lang.Integer")){
                            type = AttributeDescriptor.TYPE_INTEGER;
                        }else if(binding.equals("java.lang.Short")){
                            type = AttributeDescriptor.TYPE_INTEGER;
                        }else if(binding.equals("java.lang.Double")){
                            type = AttributeDescriptor.TYPE_DOUBLE;
                        }else if(binding.equals("java.lang.Float")){
                            type = AttributeDescriptor.TYPE_DOUBLE;
                        }else if(binding.equals("java.sql.Timestamp")){
                            type = AttributeDescriptor.TYPE_TIMESTAMP;
                        }else if(binding.equals("java.sql.Date")){
                            type = AttributeDescriptor.TYPE_DATE;
                        }else if(binding.equals("java.math.BigDecimal")){
                            type = AttributeDescriptor.TYPE_DOUBLE;
                        }
                        
                        if(sft.getGeometryAttribute() == null && type.startsWith("com.vividsolutions.jts.geom")) {
                            sft.setGeometryAttribute(att.getName());
                        }
                        
                        att.setType(type);
                    }
                    this.getFeatureTypes().add(sft);         
                    progress += progressPerTypeName;
                    status.setProgress((int)progress);
                }
            }            
        } finally {
            status.setProgress(100);
            status.setCurrentAction("Service ingeladen");
            status.setFinished(true);
            if(store != null) {
                store.dispose();
            }
        }        
    }
    
    public DataStore createDataStore() throws Exception {
        Map params = new HashMap();
        params.put(WFSDataStoreFactory.URL.key, getUrl());
        
        log.debug("Opening datastore using parameters: " + params);
        try {
            DataStore ds = DataStoreFinder.getDataStore(params);      
            if(ds == null) {
                throw new Exception("Cannot open datastore using parameters " + params);
            }
            return ds;
        } catch(Exception e) {
            throw new Exception("Cannot open datastore using parameters " + params, e);
        }
    }    
    
    @Override
    List<String> calculateUniqueValues(SimpleFeatureType sft, String attributeName, int maxFeatures) throws IOException {
        throw new UnsupportedOperationException("Not supported yet.");
    }
}

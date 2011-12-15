<%--
Copyright (C) 2011 B3Partners B.V.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/jsp/taglibs.jsp"%>

<stripes:layout-render name="/WEB-INF/jsp/templates/ext.jsp">
    
    <stripes:layout-component name="head">
        <title>Gegevensregister</title>
    </stripes:layout-component>

    <stripes:layout-component name="header">
        <jsp:include page="/WEB-INF/jsp/header.jsp"/>
    </stripes:layout-component>
        
    <stripes:layout-component name="body">
        
        <h1>Gegegevensregister</h1>

        <div id="tree-container"></div>
        <div id="form-container">
            <iframe src="<stripes:url beanclass="nl.b3p.viewer.admin.stripes.GeoServiceRegistryActionBean" event="editGeoService"/>" id="editFrame" frameborder="0"></iframe>
        </div>
        
        <script type="text/javascript">
            // Definition of URLS and icons... how are we going to do this?
            var treeurl = '<stripes:url beanclass="nl.b3p.viewer.admin.stripes.GeoServiceRegistryActionBean" event="loadCategoryTree"/>';
            var addcategoryurl = '<stripes:url beanclass="nl.b3p.viewer.admin.stripes.GeoServiceRegistryActionBean" event="addCategory"/>';
            var geoserviceediturl = '<stripes:url beanclass="nl.b3p.viewer.admin.stripes.GeoServiceRegistryActionBean" event="editGeoService"/>';
            var layerediturl = '<stripes:url beanclass="nl.b3p.viewer.admin.stripes.GeoServiceRegistryActionBean" event="editLayer"/>';
            var foldericon = '${contextPath}/resources/images/folder.png';
            var layericon = '${contextPath}/resources/images/map.png';
            var serviceokicon = '${contextPath}/resources/images/serviceok.png';
            var serviceerroricon = '${contextPath}/resources/images/serviceerror.png';
            var addicon = '${contextPath}/resources/images/add.png';
        </script>
        <script type="text/javascript" src="${contextPath}/resources/js/geoserviceregistry/geoserviceregistry.js"></script>
    </stripes:layout-component>
        
</stripes:layout-render>
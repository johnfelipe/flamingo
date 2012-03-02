/*JavaScript interface class file*/

/**
 * Event
 * @class 
 * @constructor
 * @description The class that defines the generic events. This is a helper class to abstract the viewer specific event types.
 * @author <a href="mailto:meinetoonen@b3partners.nl">Meine Toonen</a>
 * @author <a href="mailto:roybraam@b3partners.nl">Roy Braam</a>
 */
Ext.define("viewer.viewercontroller.controller.Event",{
    statics:{
        //Events:
        //MapComponent events:                        0 - 10
        /** @field */
        ON_CONFIG_COMPLETE                    : "ON_CONFIG_COMPLETE",
        /** @field */
        ON_SET_TOOL                           : "ON_SET_TOOL",
    
        // Map events:                              11 - 50
        /** @field 
         * @param map the map object
         * @param options the options returned
         * @param options.nr number of layers that are identified
         * @param options.total number of total layers that needs to be done.
         **/
        ON_GET_FEATURE_INFO_PROGRESS          : "ON_GET_FEATURE_INFO_PROGRESS",
        /** @field
         * @param map the map object
         * @param options the options returned
         * @param options.extent the extent object where this info is done.
         */
        ON_GET_FEATURE_INFO                   : "ON_GET_FEATURE_INFO",
        /** @field 
         * @param map the map object that generates the event
         * @param options the options returned
         * @param options.data the data. Looks like: data[layername][count][attribute name]= value
         * @param options.extent the extent with .minx .miny .maxx .maxy
         * @param options.nr nr of layer that is done
         * @param options.total total identifies that needs to be done
         **/        
        ON_GET_FEATURE_INFO_DATA              : "ON_GET_FEATURE_INFO_DATA",
        /** @field */
        ON_ALL_LAYERS_LOADING_COMPLETE        : "ON_ALL_LAYERS_LOADING_COMPLETE",
        /** @field */
        ON_CHANGE_EXTENT                      : "ON_CHANGE_EXTENT",
        /** @field */
        ON_FINISHED_CHANGE_EXTENT             : "ON_FINISHED_CHANGE_EXTENT",
        /** @field 
         * Occures when a layer is added to this map
         * @param map the map object
         * @param layer the layer that is added.
         **/
        ON_LAYER_ADDED                        : "ON_LAYER_ADDED",
        ON_LAYER_REMOVED                        : "ON_LAYER_REMOVED",
        /**
         *@field
         *occures when a mouse is moved and the maptip must be cancelled
         *@param map the map object that called this event.
         */
        ON_MAPTIP_CANCEL                      : "ON_MAPTIP_CANCEL",
        
        // Layer events:                            50 - 100
        /** @field */
        ON_GET_CAPABILITIES                   : "ON_REQUEST",
        /** @field */
        ON_FEATURE_ADDED                      : "ON_FEATURE_ADDED",
        /** @field */
        ON_REQUEST                            : "ON_REQUEST",
        /** @field */
        ON_LOADING_START                      : "ON_LOADING_START",
        /** @field */
        ON_LOADING_END                        : "ON_LOADING_END",
        // Maptips
        /** @field */
        ON_MAPTIP                             : "ON_MAPTIP",        
        /** @field 
         * Occures when a maptip returns data
         * @param layer the layer where this event occured
         * @param options a object with options
         * @param options.data the data as a multi array
         * @param options.extent the place where this maptip for is done.
         * @param options.extent.x the x pixel (screen location)
         * @param options.extent.y the y pixel (screen location)
         * @param options.extent.minx (not always available) the minx world coord (world location)
         * @param options.extent.miny (not always available) the miny world coord (world location)
         * @param options.extent.maxx (not always available) the maxx world coord (world location)
         * @param options.extent.maxy (not always available) the maxy world coord (world location)
         **/
        ON_MAPTIP_DATA                        : "ON_MAPTIP_DATA",
        
        // Tool events:                             100 - 150
        ON_EVENT_DOWN                         : "ON_EVENT_DOWN",
        /** @field */
        ON_EVENT_UP                           : "ON_EVENT_UP",
        /** @field */
        ON_CLICK                              : "ON_CLICK",
        /** @field */
        ON_MEASURE                            : "ON_MEASURE",

        // Shared evens:                            150 - ...
        /** @field */
        ON_ONIT                               : "ON_ONIT",  // Shared by

        ON_LAYER_VISIBILITY_CHANGED           : "ON_LAYER_VISIBILITY_CHANGED",
        
        ON_LAYERSELECTOR_CHANGE                 : "ON_LAYERSELECTOR_CHANGE",
        ON_COMPONENTS_FINISHED_LOADING           : "ON_COMPONENTS_FINISHED_LOADING",
        ON_SELECTEDCONTENT_CHANGE             : "ON_SELECTEDCONTENT_CHANGE"
    }
});
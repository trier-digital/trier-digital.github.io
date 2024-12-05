var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Topographic_Map_of_Trier_with_Defense_Overprint__NARA__100384430_page_3_modifiziert_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Topographic_Map_of_Trier_with_Defense_Overprint_-_NARA_-_100384430_(page_3)_modifiziert",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Topographic_Map_of_Trier_with_Defense_Overprint__NARA__100384430_page_3_modifiziert_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [719567.319139, 6390285.993750, 748248.814913, 6413201.755976]
                            })
                        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Topographic_Map_of_Trier_with_Defense_Overprint__NARA__100384430_page_3_modifiziert_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Topographic_Map_of_Trier_with_Defense_Overprint__NARA__100384430_page_3_modifiziert_1];

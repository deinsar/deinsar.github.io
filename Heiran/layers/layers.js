var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_BingAerial_1 = new ol.layer.Tile({
            'title': 'Bing Aerial',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=1'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_2021012500_00_2021012523_59_Sentinel2_L1C_Custom_script_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "2021-01-25-00_00_2021-01-25-23_59_Sentinel-2_L1C_Custom_script",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/2021012500_00_2021012523_59_Sentinel2_L1C_Custom_script_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5410690.593452, 4633115.813964, 5429035.480240, 4641829.635188]
                            })
                        });
var lyr_2021011500_00_2021011523_59_Sentinel2_L1C_Custom_script_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "2021-01-15-00_00_2021-01-15-23_59_Sentinel-2_L1C_Custom_script",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/2021011500_00_2021011523_59_Sentinel2_L1C_Custom_script_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5410690.593452, 4633115.813964, 5429035.480240, 4641829.635188]
                            })
                        });
var lyr_2021011300_00_2021011323_59_Sentinel2_L1C_Custom_script_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "2021-01-13-00_00_2021-01-13-23_59_Sentinel-2_L1C_Custom_script",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/2021011300_00_2021011323_59_Sentinel2_L1C_Custom_script_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5410690.593452, 4633115.813964, 5429035.480240, 4641829.635188]
                            })
                        });
var lyr_2021011000_00_2021011023_59_Sentinel2_L1C_Custom_script_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "2021-01-10-00_00_2021-01-10-23_59_Sentinel-2_L1C_Custom_script",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/2021011000_00_2021011023_59_Sentinel2_L1C_Custom_script_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5410690.593452, 4633115.813964, 5429035.480240, 4641829.635188]
                            })
                        });

lyr_GoogleHybrid_0.setVisible(true);lyr_BingAerial_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_2021012500_00_2021012523_59_Sentinel2_L1C_Custom_script_3.setVisible(true);lyr_2021011500_00_2021011523_59_Sentinel2_L1C_Custom_script_4.setVisible(true);lyr_2021011300_00_2021011323_59_Sentinel2_L1C_Custom_script_5.setVisible(true);lyr_2021011000_00_2021011023_59_Sentinel2_L1C_Custom_script_6.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_BingAerial_1,lyr_OpenStreetMap_2,lyr_2021012500_00_2021012523_59_Sentinel2_L1C_Custom_script_3,lyr_2021011500_00_2021011523_59_Sentinel2_L1C_Custom_script_4,lyr_2021011300_00_2021011323_59_Sentinel2_L1C_Custom_script_5,lyr_2021011000_00_2021011023_59_Sentinel2_L1C_Custom_script_6];

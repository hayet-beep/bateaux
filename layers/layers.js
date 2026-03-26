var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_polygonesbateaux_1 = new ol.format.GeoJSON();
var features_polygonesbateaux_1 = format_polygonesbateaux_1.readFeatures(json_polygonesbateaux_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_polygonesbateaux_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_polygonesbateaux_1.addFeatures(features_polygonesbateaux_1);
var lyr_polygonesbateaux_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_polygonesbateaux_1, 
                style: style_polygonesbateaux_1,
                popuplayertitle: 'polygones-bateaux',
                interactive: true,
                title: '<img src="styles/legend/polygonesbateaux_1.png" /> polygones-bateaux'
            });
var format_pointsbateaux_2 = new ol.format.GeoJSON();
var features_pointsbateaux_2 = format_pointsbateaux_2.readFeatures(json_pointsbateaux_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pointsbateaux_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pointsbateaux_2.addFeatures(features_pointsbateaux_2);
cluster_pointsbateaux_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_pointsbateaux_2
});
var lyr_pointsbateaux_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_pointsbateaux_2, 
                style: style_pointsbateaux_2,
                popuplayertitle: 'points-bateaux',
                interactive: true,
                title: '<img src="styles/legend/pointsbateaux_2.png" /> points-bateaux'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_polygonesbateaux_1.setVisible(true);lyr_pointsbateaux_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_polygonesbateaux_1,lyr_pointsbateaux_2];
lyr_polygonesbateaux_1.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', });
lyr_pointsbateaux_2.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', 'X': 'X', 'Y': 'Y', });
lyr_polygonesbateaux_1.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', });
lyr_pointsbateaux_2.set('fieldImages', {'id': '', 'Nom': '', 'X': '', 'Y': '', });
lyr_polygonesbateaux_1.set('fieldLabels', {'id': 'inline label - always visible', 'Nom': 'inline label - visible with data', });
lyr_pointsbateaux_2.set('fieldLabels', {'id': 'inline label - always visible', 'Nom': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', });
lyr_pointsbateaux_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
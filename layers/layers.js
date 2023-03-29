var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Special_Interest_Minerals_OnlyV2Buffernotdisolved_1 = new ol.format.GeoJSON();
var features_Special_Interest_Minerals_OnlyV2Buffernotdisolved_1 = format_Special_Interest_Minerals_OnlyV2Buffernotdisolved_1.readFeatures(json_Special_Interest_Minerals_OnlyV2Buffernotdisolved_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Special_Interest_Minerals_OnlyV2Buffernotdisolved_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Special_Interest_Minerals_OnlyV2Buffernotdisolved_1.addFeatures(features_Special_Interest_Minerals_OnlyV2Buffernotdisolved_1);
var lyr_Special_Interest_Minerals_OnlyV2Buffernotdisolved_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Special_Interest_Minerals_OnlyV2Buffernotdisolved_1, 
                style: style_Special_Interest_Minerals_OnlyV2Buffernotdisolved_1,
                interactive: false,
                title: '<img src="styles/legend/Special_Interest_Minerals_OnlyV2Buffernotdisolved_1.png" /> Special_Interest_Minerals_OnlyV2 [Buffer] not disolved'
            });
var format_Special_Interest_Minerals_OnlyV2_2 = new ol.format.GeoJSON();
var features_Special_Interest_Minerals_OnlyV2_2 = format_Special_Interest_Minerals_OnlyV2_2.readFeatures(json_Special_Interest_Minerals_OnlyV2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Special_Interest_Minerals_OnlyV2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Special_Interest_Minerals_OnlyV2_2.addFeatures(features_Special_Interest_Minerals_OnlyV2_2);
var lyr_Special_Interest_Minerals_OnlyV2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Special_Interest_Minerals_OnlyV2_2, 
                style: style_Special_Interest_Minerals_OnlyV2_2,
                interactive: true,
    title: 'Special_Interest_Minerals_OnlyV2<br />\
    <img src="styles/legend/Special_Interest_Minerals_OnlyV2_2_0.png" /> Barite<br />\
    <img src="styles/legend/Special_Interest_Minerals_OnlyV2_2_1.png" /> Bismuth<br />\
    <img src="styles/legend/Special_Interest_Minerals_OnlyV2_2_2.png" /> Chromium<br />\
    <img src="styles/legend/Special_Interest_Minerals_OnlyV2_2_3.png" /> Crocoite<br />\
    <img src="styles/legend/Special_Interest_Minerals_OnlyV2_2_4.png" /> Fluorite<br />\
    <img src="styles/legend/Special_Interest_Minerals_OnlyV2_2_5.png" /> Garnet<br />\
    <img src="styles/legend/Special_Interest_Minerals_OnlyV2_2_6.png" /> Gems<br />\
    <img src="styles/legend/Special_Interest_Minerals_OnlyV2_2_7.png" /> Gold<br />\
    <img src="styles/legend/Special_Interest_Minerals_OnlyV2_2_8.png" /> Hematite<br />\
    <img src="styles/legend/Special_Interest_Minerals_OnlyV2_2_9.png" /> Magnesite<br />\
    <img src="styles/legend/Special_Interest_Minerals_OnlyV2_2_10.png" /> Magnetite<br />\
    <img src="styles/legend/Special_Interest_Minerals_OnlyV2_2_11.png" /> Manganese<br />\
    <img src="styles/legend/Special_Interest_Minerals_OnlyV2_2_12.png" /> Molybdenum<br />\
    <img src="styles/legend/Special_Interest_Minerals_OnlyV2_2_13.png" /> Osmium-Iridium<br />\
    <img src="styles/legend/Special_Interest_Minerals_OnlyV2_2_14.png" /> Palladium<br />\
    <img src="styles/legend/Special_Interest_Minerals_OnlyV2_2_15.png" /> Platinoids<br />\
    <img src="styles/legend/Special_Interest_Minerals_OnlyV2_2_16.png" /> Platinum<br />\
    <img src="styles/legend/Special_Interest_Minerals_OnlyV2_2_17.png" /> Pyrite<br />\
    <img src="styles/legend/Special_Interest_Minerals_OnlyV2_2_18.png" /> Rutile<br />\
    <img src="styles/legend/Special_Interest_Minerals_OnlyV2_2_19.png" /> Sapphire<br />\
    <img src="styles/legend/Special_Interest_Minerals_OnlyV2_2_20.png" /> Silver<br />\
    <img src="styles/legend/Special_Interest_Minerals_OnlyV2_2_21.png" /> Sulphur As Pyrite<br />\
    <img src="styles/legend/Special_Interest_Minerals_OnlyV2_2_22.png" /> Talc<br />\
    <img src="styles/legend/Special_Interest_Minerals_OnlyV2_2_23.png" /> Tin<br />\
    <img src="styles/legend/Special_Interest_Minerals_OnlyV2_2_24.png" /> Topaz<br />\
    <img src="styles/legend/Special_Interest_Minerals_OnlyV2_2_25.png" /> Wollastonite<br />\
    <img src="styles/legend/Special_Interest_Minerals_OnlyV2_2_26.png" /> Zeolite<br />\
    <img src="styles/legend/Special_Interest_Minerals_OnlyV2_2_27.png" /> Zinc<br />\
    <img src="styles/legend/Special_Interest_Minerals_OnlyV2_2_28.png" /> Zircon<br />\
    <img src="styles/legend/Special_Interest_Minerals_OnlyV2_2_29.png" /> Zircon-Gem<br />\
    <img src="styles/legend/Special_Interest_Minerals_OnlyV2_2_30.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Special_Interest_Minerals_OnlyV2Buffernotdisolved_1.setVisible(false);lyr_Special_Interest_Minerals_OnlyV2_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Special_Interest_Minerals_OnlyV2Buffernotdisolved_1,lyr_Special_Interest_Minerals_OnlyV2_2];
lyr_Special_Interest_Minerals_OnlyV2Buffernotdisolved_1.set('fieldAliases', {'fid': 'fid', 'DEPOSIT_ID': 'DEPOSIT_ID', 'DETAILS': 'DETAILS', 'DEPOSIT_NA': 'DEPOSIT_NA', 'TYPE': 'TYPE', 'EARTHRESOU': 'EARTHRESOU', 'COMMODITY': 'COMMODITY', 'GEOLOGICAL': 'GEOLOGICAL', 'OBSERVATIO': 'OBSERVATIO', 'POSITIONAL': 'POSITIONAL', 'Buffer': 'Buffer', });
lyr_Special_Interest_Minerals_OnlyV2_2.set('fieldAliases', {'fid': 'fid', 'DEPOSIT_ID': 'DEPOSIT_ID', 'DETAILS': 'DETAILS', 'DEPOSIT_NA': 'DEPOSIT_NA', 'TYPE': 'TYPE', 'EARTHRESOU': 'EARTHRESOU', 'COMMODITY': 'COMMODITY', 'GEOLOGICAL': 'GEOLOGICAL', 'OBSERVATIO': 'OBSERVATIO', 'POSITIONAL': 'POSITIONAL', 'Buffer': 'Buffer', });
lyr_Special_Interest_Minerals_OnlyV2Buffernotdisolved_1.set('fieldImages', {'fid': 'TextEdit', 'DEPOSIT_ID': 'TextEdit', 'DETAILS': 'TextEdit', 'DEPOSIT_NA': 'TextEdit', 'TYPE': 'TextEdit', 'EARTHRESOU': 'TextEdit', 'COMMODITY': 'TextEdit', 'GEOLOGICAL': 'TextEdit', 'OBSERVATIO': 'TextEdit', 'POSITIONAL': 'TextEdit', 'Buffer': 'TextEdit', });
lyr_Special_Interest_Minerals_OnlyV2_2.set('fieldImages', {'fid': 'TextEdit', 'DEPOSIT_ID': 'TextEdit', 'DETAILS': 'TextEdit', 'DEPOSIT_NA': 'TextEdit', 'TYPE': 'TextEdit', 'EARTHRESOU': 'TextEdit', 'COMMODITY': 'TextEdit', 'GEOLOGICAL': 'TextEdit', 'OBSERVATIO': 'TextEdit', 'POSITIONAL': 'TextEdit', 'Buffer': 'TextEdit', });
lyr_Special_Interest_Minerals_OnlyV2Buffernotdisolved_1.set('fieldLabels', {'fid': 'no label', 'DEPOSIT_ID': 'no label', 'DETAILS': 'no label', 'DEPOSIT_NA': 'no label', 'TYPE': 'no label', 'EARTHRESOU': 'no label', 'COMMODITY': 'no label', 'GEOLOGICAL': 'no label', 'OBSERVATIO': 'no label', 'POSITIONAL': 'no label', 'Buffer': 'no label', });
lyr_Special_Interest_Minerals_OnlyV2_2.set('fieldLabels', {'fid': 'no label', 'DEPOSIT_ID': 'no label', 'DETAILS': 'no label', 'DEPOSIT_NA': 'no label', 'TYPE': 'no label', 'EARTHRESOU': 'no label', 'COMMODITY': 'header label', 'GEOLOGICAL': 'no label', 'OBSERVATIO': 'no label', 'POSITIONAL': 'no label', 'Buffer': 'no label', });
lyr_Special_Interest_Minerals_OnlyV2_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
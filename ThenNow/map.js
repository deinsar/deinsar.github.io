var map = L.map('map').setView([52.518,13.41], 15);

var osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap<\/a> contributors'
	}).addTo(map);

var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
	subdomains:['mt0','mt1','mt2','mt3'],
	attribution: '&copy; <a href="https://www.google.com/maps">Google Maps<\/a>'

	});

var lyr = L.tileLayer('./{z}/{x}/{y}.png', {
	tms: true,transparent: true, opacity: 1, 
	attribution: '', 
	minZoom: 1, maxZoom: 16
	}).addTo(map);

var toner = L.tileLayer('http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.', minZoom: 13, maxZoom: 17
	});



// var grayscale = L.tileLayer(mapboxUrl, {id: 'MapID', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution}),
var basemaps = {"OpenStreetMap": osmLayer, "Google sat":googleSat}// ,"Black and White Map":toner}
var overlaymaps = {"Berlin 1772": lyr}



L.control.layers(basemaps,overlaymaps, {collapsed: false}).addTo(map);


L.control.scale().addTo(map);

L.control.sideBySide(lyr).addTo(map);


function setBusStopMarkers(busStops){	
var markers = new L.MarkerClusterGroup();
////set bus stops
const data = busStops;
const length = data.length;
for (var i = 0; i < length; i++) {
	var stop_name = data[i].stop_name;
	var marker = L.marker(new L.LatLng(data[i].latitude, data[i].longitude), {
		icon: L.mapbox.marker.icon({
			'marker-symbol': `${i + 1}`,
			'marker-size': 'small',
			'marker-color': '0044FF'}),
	    	title: stop_name
    	});
	marker.bindPopup(stop_name);
	markers.addLayer(marker);
}
return markers;
}
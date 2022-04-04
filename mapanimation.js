// marker for bus//// L.marker is a low-level marker constructor in Leaflet.
var busMarkers = [];
function newMarker (locLat, locLong, busDirection, map) {
		
	if (busDirection == 1) {
		//icon color is different for directions
		var marker = L.marker([locLat, locLong], {
			icon: L.mapbox.marker.icon({
			'marker-size': 'medium',
			'marker-symbol': 'bus',
			'marker-color': '#ff8888'
			})
		}).addTo(map);
	} else {
		//
		var marker = L.marker([locLat, locLong], {
			icon: L.mapbox.marker.icon({
				'marker-size': 'medium',
				'marker-symbol': 'bus',
				'marker-color': '#fa0'
			})
		}).addTo(map);
	}

	// Add to array busMarker//
	busMarkers.push(marker);

    return busMarkers ;
}
/*jslint browser: true*/
/*global L */

(function (window, document, L, undefined) {
	'use strict';

	//L.Icon.Default.imagePath = 'images/';

	/* create leaflet map 
	var map = L.map('map', {
		center: [52.5377, 13.3958],
		zoom: 4
	});*/

	/* add default stamen tile layer 
	new L.tileLayer('http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', {
		minZoom: 0,
		maxZoom: 18,
		attribution: 'Map data © <a href="http://www.openstreetmap.org">OpenStreetMap contributors</a>'
	}).addTo(map);*/


	//L.marker([52.5, 13.4]).addTo(map);

	L.mapbox.accessToken = 'pk.eyJ1Ijoic2VhbmxpZXc5MCIsImEiOiJjaWdxZ3g2cmwwMXRydXNtMTB1M3huY2UyIn0.nwEQ8rPsiGpUFe2FfjbZVQ';
	// Replace 'mapbox.streets' with your map id.
	var mapboxTiles = L.tileLayer('https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=' + L.mapbox.accessToken, {
    	attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
	});

	var map = L.map('map')
	    .addLayer(mapboxTiles)
	    .setView([42.3610, -71.0587], 15);

}(window, document, L));
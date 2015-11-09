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
	    .setView([-37.8136, 144.9631], 15);

	L.marker([-37.784, 144.9190]).addTo(map)
    .bindPopup('Somewhere near Sean&apos;s house')
    .openPopup();

    // Add a circle...
     /*    var circleLocation = new L.LatLng(-37.8136, 144.9631),
             circleOptions = {
                 color: 'red', 
                 fillColor: '#f03', 
                 fillOpacity: 0.5
             };
             
         var circle = new L.Circle(circleLocation, 500, circleOptions);
         map.addLayer(circle);

         // ...and a triangle
         var p1 = new L.LatLng(-37.8236, 144.9691),
             p2 = new L.LatLng(-37.8136, 144.9431),
             p3 = new L.LatLng(-37.8186, 144.9231),
             polygonPoints = [p1, p2, p3];
         
         var polygon = new L.Polygon(polygonPoints);
         map.addLayer(polygon);    */     

}(window, document, L));
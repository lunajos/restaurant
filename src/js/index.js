'use strict';

$(document).ready(function() {

	// XML Data
	let clientsXML	= './data.Clients_PhaseA';
	let recipesXML	= '../data/Recipes_PhaseB.xml';
	let orderXML 		= './data/Order_PhaseC.xml';

	let xmlhttp;	// initialize var

	loadXML(clientsXML);// Load Data
	loadXML(recipesXML);// Load Data
	loadXML(orderXML); 	// Load Data

	// Establish Request and load XML
	function loadXML(file) {
		if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp = new XMLHttpRequest();
		} else { // code for IE6, IE5
			xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
		}
		xmlhttp.open('GET', file, true);
		xmlhttp.send();

		showXML(file);
	}

	// Print XML to DOM
	function showXML(xml) {
		// Initialize Variables
		let message, i, xmlDoc, x;

		xmlDoc = xml.responseXML;
		message = xmlDoc.getElementsByTagName('recipes');

		for (i = 0; i < message.length; i++) {
			for (x = 0; x < message[i].childNodes.length; x++) {
				if (message[i].childNodes[x].innerHTML.length) { // xml content to DOM
						jumbo[i].innerHTML += message[i].childNodes[x].innerHTML + ' ';
				}
			} 
		} 
	} 
});

'use strict';

let xmlhttp;
let xmlDoc,  content;
let clientsXML = 'data/Clients_PhaseA.xml';
let recipesXML = 'data/Recipes_PhaseB.xml';
let ordersXML = 'data/Orders_PhaseCA.xml';



if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
	xmlhttp=new XMLHttpRequest();
}
else {// code for IE6, IE5
	xmlhttp=new ActiveXObject('Microsoft.XMLHTTP');
}
// Show status of request
xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {				
		// get the xml file
		xmlDoc=xmlhttp.responseXML;

		content = xmlDoc.getElementsByTagName('client');
		console.log(content);
	}
};
		xmlhttp.open('GET', clientsXML, true);
		xmlhttp.send();


// Testing purposes
console.log('bar');

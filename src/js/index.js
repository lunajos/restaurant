'use strict';

console.log('az');

let xmlhttp;
let xmlDoc,  content;
let clientsXML = 'data/Clients_PhaseA.xml';
let recipesXML = 'data/Recipes_PhaseB.xml';
let ordersXML = 'data/Orders_PhaseC.xml';

// fix paths and root
let data = {
	clients: {
		path: 'data/Clients_PhaseA.xml',
		root: 'client'
	},
	recipes: {
		path: 'data/Recipes_PhaseB.xml',
		root: 'recipe'
	},
	orders: {
		path: 'data/Orders_PhaseC.xml',
		root: 'clientOrder'
	}
};

console.log(data);

loadXML(clientsXML, 'client');
loadXML(recipesXML, 'recipe');
loadXML(ordersXML, 'clientOrder');



function loadXML(file, root){
	window.XMLHttpRequest	 // jshint ignore:line
	? xmlhttp=new XMLHttpRequest() // jshint ignore:line
	: xmlhttp=new ActiveXObject('Microsoft.XMLHTTP');// jshint ignore:line

	// Wait until XML is loaded	
	xmlhttp.onreadystatechange = function() {
		if (this.readyState === 4 && this.status === 200) {				
			// get the xml file and pass root
			showXML(this, root);
		}
	};

	xmlhttp.open('GET', file, true);
	xmlhttp.send();
}

function showXML(xml, root){
		let x, i, box, isFirstEl, info;					
		xmlDoc=xml.responseXML;		
		isFirstEl= true;
		content = xmlDoc.getElementsByTagName(root);
	
		box = document.getElementsByClassName(root); // jshint ignore: line
		info = document.getElementsByClassName(root+'-info'); // jshint ignore: line

		for (i = 0; i < content.length; i++) {
			for (x = 0; x < content[i].childNodes.length; x++) {
				 if (content[i].childNodes[x].textContent.length) { // xml content to DOM
						if (isFirstEl){
							box[0].innerText += content[i].childNodes[x].textContent;
							console.log(box[0]);
							info[0].innerText += content[i].childNodes[x].tagName; 
							isFirstEl = false;
						} else {
							box[0].innerText += content[i].childNodes[x].textContent;
						}
				 }
			}
		} // end
}



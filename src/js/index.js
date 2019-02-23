'use strict';

let xmlhttp;
let xmlDoc,  content;
let clientsXML = 'data/Clients_PhaseA.xml';
let recipesXML = 'data/Recipes_PhaseB.xml'; // jshint ignore:line
let ordersXML = 'data/Orders_PhaseC.xml'; // jshint ignore:line

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
//loadXML(recipesXML, 'recipe');
//loadXML(ordersXML, 'clientOrder');



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
	
		for (i = 0; i < content.length; i++) {
			box = document.getElementsByClassName(root); // jshint ignore: line
			box[0].innerHTML += '<div class="root">';
			console.log(box[i]);

			info = document.getElementsByClassName('root'); // jshint ignore: line
			//console.log(box[0].innerHTML += '<div class="' + root + '">' );

			for (x = 0; x < content[i].childNodes.length; x++) {
				 if (content[i].childNodes[x].textContent.length) { // xml content to DOM
					info[i].innerText += content[i].childNodes[x].textContent;
				 }
			}

			info[i].innerHTML += '</div>';
		} // end
}



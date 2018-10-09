// Frameset nachladen:

if(self.location == top.location) {
	datei= self.location.href.split('/');
	datei = datei[datei.length-1];
self.location.href="../beispiele.html?" + datei;
}

//  IE erkennen:

ie=false;
if(navigator.userAgent.indexOf("MSIE")>0) ie=true;

// Styles ändern:

function editieren(inputobjekt) {
	
	// kleine Anpassungen :-)
	if(ie && inputobjekt.name=='cssFloat')
	inputobjekt.name='styleFloat';
	if(ie && inputobjekt.name.indexOf('outline')>-1)
	alert("Diese CSS-Eigenschaft wird im Internet Explorer nicht unterstützt!");
	
	
	var obj = document.getElementById('ziel');
	obj.style[inputobjekt.name] = inputobjekt.value;
	
	
}

function before(inputobjekt) {

	document.getElementById('ziel').innerHTML = inputobjekt.value;
}

function table(inputobjekt) {

	document.getElementById('ziel').style['display'] = inputobjekt.value;
	document.getElementById('ziel2').style['display'] = 'table-row';
	document.getElementById('ziel3').style['display'] = 'table-row';
	document.getElementById('ziel4').style['display'] = 'table-cell';
	document.getElementById('ziel5').style['display'] = 'table-cell';
	document.getElementById('ziel6').style['display'] = 'table-cell';
	document.getElementById('ziel7').style['display'] = 'table-cell';
}

function backgrounds(inputobjekt) {
	window.frames['bgdemo'].document.getElementById('ziel').style[inputobjekt.name] = inputobjekt.value;
}
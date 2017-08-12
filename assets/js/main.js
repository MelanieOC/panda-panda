var section = document.getElementById('pictures');
var restaurar = document.getElementById('restaurar');
var extincion = document.getElementById('extincion');
var origen = document.getElementById('origen');
var derecha = document.getElementById('derecha');
var izquierda = document.getElementById('izquierda');


var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];
for (var i = 0; i < pictures.length; i++) {
	var div=document.createElement('div');
		div.setAttribute('class', 'photo');
	var button=document.createElement('div');
		button.setAttribute('class', 'delete');
	var photo = document.createElement('img');
	  	photo.setAttribute('src', pictures[i]);
	
	div.appendChild(button);
	div.appendChild(photo);
	section.appendChild(div);
}


var eliminar=document.getElementsByClassName('delete');
for (var i = 0; i < eliminar.length; i++) {
	eliminar[i].onclick=function () {
		borrar(this);
	}
}


function borrar(e) {
	var padre=e.parentNode;
	padre.style.display = 'none';
}

restaurar.onclick=function() {
	var fotos = document.getElementsByClassName('photo');
	for (var i = 0; i < fotos.length; i++) {
		fotos[i].style.display = 'inline-block';
	}
}

extincion.onclick=function() {
	if(derecha.style.display=='none'){
		derecha.style.display='block';
	} else {
		derecha.style.display='none';
	}
}

origen.onclick=function() {
	if(izquierda.style.display=='none'){
		izquierda.style.display='block';
	} else {
		izquierda.style.display='none';
	}
}

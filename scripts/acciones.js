var controller;
var altoScreen;
var anchoScreen;
var hDetalle;
var redss;

$(document).ready(function() {
	// window.resize
	_dHeight();
	_Acomodar();
	//$(window).css('background':'#333');
});

$(window).resize(function() {
	// Ajusto altura de elementos segun pantalla	
	_dHeight();
	_Acomodar();

	// ajusto texto al contenedor
	//_ajustotexto();
});

// fin document.ready
$(window).load(function(){
	// preloader
	$('#preloader').delay(200).fadeOut('slow',function(){		
		$(this).delay(100).remove();
	});

	// ajusto texto al contenedor
    //_ajustotexto();

});
// fin window.load

// Acomodo según tamaño de la pantalla
function _Acomodar(){
	var browserName=navigator.appName;
	if (browserName=="Microsoft Internet Explorer"){
		if(document.documentElement.clientWidth == 0){
			altoScreen = document.body.clientHeight;
			anchoScreen = document.body.clientWidth;
		}else{
			altoScreen = document.documentElement.clientHeight;
			anchoScreen = document.documentElement.clientWidth;
		}
	} else{
		anchoScreen = window.innerWidth;
		altoScreen = window.innerHeight;
	}	

	$('.toolresponsive>span.res').html('<div class="titl fs21 lh16 bdceleste">resoluci\u00f3n</div>'+'<div class="nro">'+anchoScreen+'</div>'+'<div class="nro">'+altoScreen+'</div>');
}

function _dHeight (){
	var availH = screen.availHeight;
	// $('.seccamarillo').css('height',availH);
}

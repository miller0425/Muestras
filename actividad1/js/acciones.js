// JavaScript Document
//aciones independientes del sencha y el jquery
function MM_callJS(jsStr) { //v2.0
  return eval(jsStr)
}
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

iPuntosObtenidos=50;

$(document).ready(function(e) {
	if (iPuntosObtenidos)
	{
		localStorage.puntos=Number(iPuntosObtenidos);
		$("#mostrarpuntos").html(localStorage.puntos);
	}
	$('#pantalla0 input').keydown(function(e) {
    if (e.keyCode == 13) {
        llenar();
    }
});   
});

function guardarpuntos(){
	if (iPuntosObtenidos)
	{
		localStorage.puntos=Number(iPuntosObtenidos);
		$("#mostrarpuntos").html(localStorage.puntos);
	} 
    }

//       evento para pasar del intro a el contenedor

function gifout(){
	$("#portada-an-obj-3").fadeOut('fast');
	pasarcontent();
}
function pasarcontent(){
	$(location).attr('href','contenedor.html'); 
	}

//       evento para los botones del menu
function irpresentacion(){
	$(document.getElementById("contframe").setAttribute('src','presentacion.html')); //aqui se coloca el archivo correspondiente a la pagina # presentacion
	progreso1();
	if(iPuntosObtenidos==50){
	iPuntosObtenidos=50;
	guardarpuntos();
	}else{
	guardarpuntos();
	}
	menuslider();	
	}
	
function irobjetivos(){
	$(document.getElementById("contframe").setAttribute('src','logros.html')); //aqui se coloca el archivo correspondiente a la pagina # objetivos
	progreso2();
	if(iPuntosObtenidos==50){
			iPuntosObtenidos=100;
			guardarpuntos();
			}else{
			guardarpuntos();
				}
	menuslider();
	}

function ircontenidos(){
	$(document.getElementById("contframe").setAttribute('src','images/esquema.jpg'));
	progreso3();
	if(iPuntosObtenidos==100){
			iPuntosObtenidos=150;
			guardarpuntos();
			}else{
			guardarpuntos();
				}
	menuslider();
	}

function irtema1(){
	$(document.getElementById("contframe").setAttribute('src','tema1.html')); //aqui se coloca el archivo correspondiente a la pagina # 1
	progreso4();
	if(iPuntosObtenidos==150){
			iPuntosObtenidos=200;
			guardarpuntos();
			}else{
			guardarpuntos();
				}
	menuslider();
	}
	
function irtema2(){
	$(document.getElementById("contframe").setAttribute('src','tema2.html')); //aqui se coloca el archivo correspondiente a la pagina #  2
	progreso5();
	if(iPuntosObtenidos==200){
			iPuntosObtenidos=300;
			guardarpuntos();
			}else{
			guardarpuntos();
				}
	menuslider();
	}
	
function irtema3(){
	$(document.getElementById("contframe").setAttribute('src','tema3.html')); //aqui se coloca el archivo correspondiente a la pagina # 3
	progreso6();
	if(iPuntosObtenidos==300){
			iPuntosObtenidos=400;
			guardarpuntos();
			}else{
			guardarpuntos();
				}
	menuslider();
	}
	
function irtema4(){
	$(document.getElementById("contframe").setAttribute('src','tema4.html')); //aqui se coloca el archivo correspondiente a la pagina # 4
	progreso7();
	if(iPuntosObtenidos==400){
			iPuntosObtenidos=500;
			guardarpuntos();
			}else{
			guardarpuntos();
				}
	menuslider();
	}
	
function irtema5(){
	$(document.getElementById("contframe").setAttribute('src','pag5.html')); //aqui se coloca el archivo correspondiente a la pagina # 5
	progreso7();
	if(iPuntosObtenidos==500){
			iPuntosObtenidos=600;
			guardarpuntos();
			}else{
			guardarpuntos();
				}
	menuslider();
	}
	
function iractividades(){
	$(document.getElementById("contframe").setAttribute('src','actividad.html')); //aqui se coloca el archivo correspondiente a la pagina # actividades
	progreso8();
	if(iPuntosObtenidos==400){
			iPuntosObtenidos=500;
			guardarpuntos();
			}else{
			guardarpuntos();
				}
	menuslider();
	}
	
function irbibliografia(){
	$(document.getElementById("contframe").setAttribute('src','bibliografia.html')); //aqui se coloca el archivo correspondiente a la pagina # bibliografia
	progreso9();
	if(iPuntosObtenidos==500){
			iPuntosObtenidos=600;
			guardarpuntos();
			}else{
			guardarpuntos();
				}
	menuslider();
	}
	
function ircierre(){
	$(document.getElementById("contframe").setAttribute('src','cierre.html')); //aqui se coloca el archivo correspondiente a la pagina # cierre
	progreso10();
	if(iPuntosObtenidos==600){
			iPuntosObtenidos=700;
			guardarpuntos();
			}else{
			guardarpuntos();
				}
	menuslider();
	}

function ircreditos(){
	$(document.getElementById("contframe").setAttribute('src','creditos.html')); //aqui se coloca el archivo correspondiente a la pagina # creditos
	progreso11();
	if(iPuntosObtenidos==700){
			iPuntosObtenidos=800;
			guardarpuntos();
			}else{
			guardarpuntos();
				}
	menuslider();
	}

//       evento para animacion menu
	
function menuslider(){
	var pospestana = $(".pestanamenu");
	var pestanapos = pospestana.position();
	cierreayuda();
	$("#contenidomenu").toggle("slide",500);
	$("#btnpresentacionmenu").toggle("slide",500);
	$("#btnobjetivosmenu").toggle("slide",500);
	$("#btncontenidosmenu").toggle("slide",500);
	$("#btnactividades").toggle("slide",500);
	$("#btnbibliografia").toggle("slide",500);
	$("#btncierre").toggle("slide",500);
	$("#btncreditos").toggle("slide",500);
	switch (pestanapos.left){
		case -1:		
		$( ".pestanamenu" ).animate({left: "219px"},500);
		break;
		case 218:
		$( ".pestanamenu" ).animate({left: "0px"},500);
		break;
		}
	}

//       evento para animacion pestaña menu

	/*$(function pestana(){
		var state = true;
		$( ".pestanamenu" ).click(function() {
			if ( state ) {
				$( ".pestanamenu" ).animate({
					left: "219px",					
				}, 1000 );
			} else {
				$( ".pestanamenu" ).animate({
					left: "0px",
				}, 1000 );
			}
			state = !state;
		});
	});*/

//       eventos para la flecha de adelante y/o siguiente

function sig(){

var frame = document.getElementById('contframe');
var txt = frame.getAttribute('src');

//document.getElementById('txt2').value = txt;
if(txt=="presentacion.html"){
$(document.getElementById("contframe").setAttribute('src','logros.html'));
progreso2();
	if(iPuntosObtenidos==50){
			iPuntosObtenidos=100;
			guardarpuntos();
			}else{
			guardarpuntos();
				}
}
if(txt=="logros.html"){
$(document.getElementById("contframe").setAttribute('src','images/esquema.jpg'));
progreso3();
	if(iPuntosObtenidos==100){
			iPuntosObtenidos=150;
			guardarpuntos();
			}else{
			guardarpuntos();
				}
}
if(txt=="images/esquema.jpg"){
$(document.getElementById("contframe").setAttribute('src','tema1.html'));
progreso4();
	if(iPuntosObtenidos==150){
			iPuntosObtenidos=200;
			guardarpuntos();
			}else{
			guardarpuntos();
				}
}
if(txt=="tema1.html"){
$(document.getElementById("contframe").setAttribute('src','tema2.html'));
progreso5();
	if(iPuntosObtenidos==200){
			iPuntosObtenidos=300;
			guardarpuntos();
			}else{
			guardarpuntos();
				}
}
if(txt=="tema2.html"){
$(document.getElementById("contframe").setAttribute('src','tema3.html'));
progreso6();
	if(iPuntosObtenidos==300){
			iPuntosObtenidos=400;
			guardarpuntos();
			}else{
			guardarpuntos();
				}
}
if(txt=="tema3.html"){
$(document.getElementById("contframe").setAttribute('src','actividad.html'));
progreso8();
	if(iPuntosObtenidos==400){
			iPuntosObtenidos=500;
			guardarpuntos();
			}else{
			guardarpuntos();
				}
}
if(txt=="actividad.html"){
$(document.getElementById("contframe").setAttribute('src','bibliografia.html'));
progreso9();
	if(iPuntosObtenidos==500){
			iPuntosObtenidos=600;
			guardarpuntos();
			}else{
			guardarpuntos();
				}
}
if(txt=="bibliografia.html"){
$(document.getElementById("contframe").setAttribute('src','cierre.html'));
progreso10();
	if(iPuntosObtenidos==600){
			iPuntosObtenidos=700;
			guardarpuntos();
			}else{
			guardarpuntos();
				}
}
if(txt=="cierre.html"){
$(document.getElementById("contframe").setAttribute('src','creditos.html'));
progreso11();
	if(iPuntosObtenidos==700){
			iPuntosObtenidos=800;
			guardarpuntos();
			}else{
			guardarpuntos();
				}
}
	
}

//       eventos para la flecha de atras y/o volver anterior

function ante(){
	
var frame = document.getElementById('contframe');
var txt = frame.getAttribute('src');

//document.getElementById('txt2').value = txt;
if(txt=="logros.html"){
$(document.getElementById("contframe").setAttribute('src','presentacion.html'));
progreso1();
}
if(txt=="images/esquema.jpg"){
$(document.getElementById("contframe").setAttribute('src','logros.html'));
progreso2();
}
if(txt=="tema1.html"){
$(document.getElementById("contframe").setAttribute('src','images/esquema.jpg'));
progreso3();
}
if(txt=="tema2.html"){
$(document.getElementById("contframe").setAttribute('src','tema1.html'));
progreso4();
}
if(txt=="tema3.html"){
$(document.getElementById("contframe").setAttribute('src','tema2.html'));
progreso5();
}
if(txt=="actividad.html"){
$(document.getElementById("contframe").setAttribute('src','tema3.html'));
progreso6();
}
if(txt=="bibliografia.html"){
$(document.getElementById("contframe").setAttribute('src','actividad.html'));
progreso8();
}
if(txt=="cierre.html"){
$(document.getElementById("contframe").setAttribute('src','bibliografia.html'));
progreso9();
}
if(txt=="creditos.html"){
$(document.getElementById("contframe").setAttribute('src','cierre.html'));
progreso10();
}
}

//   evento para el boton de ayuda....evento para el boton de ayuda....evento para el boton de ayuda

function cierreayuda(){
	$("#imgayuda").fadeOut('slow');
	}
function abrirayuda(){
	$("#imgayuda").fadeIn('slow');
	}
	
// evento para barra de progreso...evento para barra de progreso...evento para barra de progreso

function progreso1() {
	cierreayuda();
	$("#contenedor-an-obj-15").animate({left:"41px"},"slow");
	$("#descriptema").html("Presentación");
	$(".chulopresentacion").fadeIn('fast');
	$("#pantallamenuact").fadeOut('fast');
}
function progreso2() {
	cierreayuda();
	$("#contenedor-an-obj-15").animate({left:"82px"},"slow");
	$("#descriptema").html("Logros");
	$(".chuloobjetivos").fadeIn('fast');
	$("#pantallamenuact").fadeOut('fast');	
}
function progreso3() {
	cierreayuda();
	$("#contenedor-an-obj-15").animate({left:"123px"},"slow");
	$("#descriptema").html("Esquema de la unidad");
	$(".chulocontenidos").fadeIn('fast');
	$("#pantallamenuact").fadeOut('fast');	
}
function progreso4() {
	cierreayuda();
	$("#contenedor-an-obj-15").animate({left:"164px"},"slow");
	$("#descriptema").html("Codificación")
	$(".chulotema1").fadeIn('fast');
	$("#pantallamenuact").fadeOut('fast');	
}
function progreso5() {
	cierreayuda();
	$("#contenedor-an-obj-15").animate({left:"205px"},"slow");
	$("#descriptema").html("Registro")
	$(".chulotema2").fadeIn('fast');
	$("#pantallamenuact").fadeOut('fast');
}
function progreso6() {
	cierreayuda();
	$("#contenedor-an-obj-15").animate({left:"246px"},"slow");
	$("#descriptema").html("Resumen")
	$(".chulotema3").fadeIn('fast');
	$(".chulocontenidos").fadeIn('fast');
	$("#pantallamenuact").fadeOut('fast');		
}
function progreso7() {
	cierreayuda();
	$("#contenedor-an-obj-15").animate({left:"287px"},"slow");
	$("#descriptema").html("“Actuar” como resultado controlado");
	$(".chulotema4").fadeIn('fast');
	
	//$("#pantallamenuact").fadeIn('fast');
	if($(".chulotema1").css("display") == "block"){
		$(".act1").css('-webkit-filter','grayscale(0%) blur(0px)');
		$(".act1").css('cursor','pointer');
		$(".tapact1").fadeOut('fast');
		}
	if($(".chulotema2").css("display") == "block"){
		$(".act2").css('-webkit-filter','grayscale(0%) blur(0px)');
		$(".act2").css('cursor','pointer');
		$(".tapact2").fadeOut('fast');
		}
	if($(".chulotema3").css("display") == "block"){
		$(".act3").css('-webkit-filter','grayscale(0%) blur(0px)');
		$(".act3").css('cursor','pointer');
		$(".tapact3").fadeOut('fast');
		}
	if($(".chulotema4").css("display") == "block"){
		$(".act4").css('-webkit-filter','grayscale(0%) blur(0px)');
		$(".act2").css('cursor','pointer');
		$(".tapact4").fadeOut('fast');
		}
}
function progreso8() {
	cierreayuda();
	$("#contenedor-an-obj-15").animate({left:"328px"},"slow");
	$("#descriptema").html("Actividad");
	$(".chuloactivid").fadeIn('fast');	
	$("#pantallamenuact").fadeOut('fast');
}
function progreso9() {
	cierreayuda();
	$("#contenedor-an-obj-15").animate({left:"369px"},"slow");
	$("#descriptema").html("Bibliografía")
	$(".chulobiblio").fadeIn('fast');	
	$("#pantallamenuact").fadeOut('fast');
}
function progreso10() {
	cierreayuda()
	$("#contenedor-an-obj-15").animate({left:"410px"},"slow");
	$("#descriptema").html("Cierre")
	$(".chulocierre").fadeIn('fast');
}
function progreso11() {
	cierreayuda();
	$("#contenedor-an-obj-15").animate({left:"443px"},"slow");
	$("#descriptema").html("Créditos");
	$(".chulocreditos").fadeIn('fast');	
	$("#pantallamenuact").fadeOut('fast');
	}

function llenar() {
	var texto = document.all.texto.value;
	if (texto==""){
		alert("Por favor coloca tu nombre");
		}else{
			localStorage.nombree=texto;
			$("#llenar").html("Hola "+localStorage.nombree+","+" estás en la");
			//$("#llenar").html("Hola "+texto+","+" estas en la");
			$("#pantalla0").fadeOut('fast');
			$("#pantalla01").fadeIn('fast');
			$("#imgayuda").fadeIn('slow');			
		}
	}

function act1(){
	$("#pantallamenuact").fadeOut('fast');
	}
function act2(){
	$("#pantallamenuact").fadeOut('fast');
	}
function act3(){
	$("#pantallamenuact").fadeOut('fast');
	}
function act4(){
	$("#pantallamenuact").fadeOut('fast');
	}
	
function enviar(){
var email = document.getElementById('nota').value;
window.location.href = "mailto:?body="+ email + "";
}
function cerrarnota(){
	$("#notas").fadeOut('fast');
	}
function abrirnotas(){
	$("#notas").fadeIn('fast');
	}
	
function cerraruvicons(){
	$("#popuvicons").fadeOut('fast');
	}
	
function abriruvicons(){
	$("#popuvicons").fadeIn('fast');
	}
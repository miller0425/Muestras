// JavaScript Document

function MM_callJS(jsStr) { //v2.0
  return eval(jsStr)
}

window.addEventListener('load',function(){
		// obtener elemtos del canvas
		var canvas = document.getElementById('sketchpad');
		//variables para manejo de los colores
		var Yellow = document.getElementById('botonYe');
		var Green = document.getElementById('botonGr');
		var Blue = document.getElementById('botonBlu');
		var Red = document.getElementById('botonRe');
		var Black = document.getElementById('botonBla');
		var Claro = document.getElementById('botonWh');
		var delgado = document.getElementById('botonD');
		var medio = document.getElementById('botonM');
		var grueso = document.getElementById('botonG');
		
		var context = canvas.getContext('2d');
		
		var colorYellow = "yellow";
		var colorGreen = "green";
		var colorBlue = "blue";
		var colorRed = "red";
		var colorBlack = "black";
		var colorWhite = "#F7F7F7";
		
		var curColor = colorBlack;
		var tamano = 3;
		
		// crear trazos atravez de los toques 
		var drawer = {
			isDrawing: false,
			touchstart: function(coors){
				context.beginPath();
				context.moveTo(coors.x, coors.y);
				context.strokeStyle = curColor; /*curColor; linea color*/
				context.lineWidth = tamano;/*ancho*/
				context.lineJoin = "round";
				/*context.fillStyle = "rgba(0,0,0,1)";  red*/
				this.isDrawing = true;
			},
			touchmove: function(coors){
				if (this.isDrawing) {
			        context.lineTo(coors.x, coors.y);
			        context.stroke();
				}
			},
			touchend: function(coors){
				if (this.isDrawing) {
			        this.touchmove(coors);
			        this.isDrawing = false;
				}
			}
		};
		// funcion que pasa las cordenadas de toque
		function draw(event){
			// obtener las cordenadas de toque  
			var coors = {
				x: event.targetTouches[0].pageX,
				y: event.targetTouches[0].pageY
			};
			// transmitir las coordenadas al controlador apropiado
			drawer[event.type](coors);
		}
		
		// adjuntar los eventos touchstart, touchmove, touchend event listeners.
		
	    canvas.addEventListener('touchstart',draw, false);
	    canvas.addEventListener('touchmove',draw, false);
	    canvas.addEventListener('touchend',draw, false);
		
		//listeners + funciones para cambio de colores
		
		Yellow.addEventListener('touchstart',function(event){
			curColor = colorYellow;	
		},false);
		
		Green.addEventListener('touchstart',function(event){
			curColor = colorGreen;	
		},false);
		
		Blue.addEventListener('touchstart',function(event){
			curColor = colorBlue;	
		},false);
		
		Red.addEventListener('touchstart',function(event){
			curColor = colorRed;	
		},false);
		
		Black.addEventListener('touchstart',function(event){
			curColor = colorBlack;	
		},false);
		
		Claro.addEventListener('touchstart',function(event){
			curColor = colorWhite;	
		},false);
		
		// listener + funcion tamaño linea
		delgado.addEventListener('touchstart',function(event){
			tamano = 3;	
		},false);
		
		medio.addEventListener('touchstart',function(event){
			tamano = 7;	
		},false);
		
		grueso.addEventListener('touchstart',function(event){
			tamano = 12;
		},false);

		
		
		// prevenir el scrolling
		document.body.addEventListener('touchmove',function(event){
		event.preventDefault();
		},false);	// end body.onTouchMove
		
	},false);	// end window.onLoad
	
	function pizarramostrar(){
		document.getElementById("pizarra").style.display = 'block';
		document.getElementById("bpizarraOut").style.display = 'block';
		document.getElementById("bpizarra").style.display = 'none';
	}
	function pizarraocultar(){
		document.getElementById("pizarra").style.display = 'none';
		document.getElementById("bpizarra").style.display = 'block';
		document.getElementById("bpizarraOut").style.display = 'none';
		}		
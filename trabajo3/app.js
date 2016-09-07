window.addEventListener("load", function() {
	var boton = document.getElementById("calcular");
	boton.addEventListener("click", function() {
		var tiempo = parseFloat(document.getElementById("tiempo").value);
		var numero = parseFloat(document.getElementById("numero").value);

		var resultado = document.getElementById("resultado");
		resultado.innerHTML = "<p>El resultado es " + multiplicacion(tiempo,numero) + "</p>";
	});

	function multiplicacion(tiempo, numero) {
		multiplicacion = soles * cambio;
		var n = multiplicacion.toFixed(2)
		return n	
	}
});
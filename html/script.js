    mensaje = [];
    contacto = [];
window.addEventListener('message', function (event) {
   
    let data = event.data
	mensaje.push(data.message);
	contacto.push(data.who);
 
});
var mensajesacado
timeout()
function timeout() {
	mensajesacado = mensaje.shift();
	if (mensajesacado == null) {
		setTimeout(function () {
				 timeout();    
		}, 100);
	}
	else {
		$('#mensaje').html(mensajesacado);    
		$('#autor').html(" "+contacto.shift());    

		setTimeout(function () {
		  $( "#cuerpo" ).animate({
			marginTop: "+=150",
		  }, 500, function() {

		
			
		  });
		  setTimeout(function () {
			  $( "#cuerpo" ).animate({
				marginTop: "-=150",
				}, 1000, function() {
				
				 timeout();
				});
		  }, 3000)
		  
        // Do Something Here
        // Then recall the parent function to
        // create a recursive loop.
       
		}, 100);
	}
    
}
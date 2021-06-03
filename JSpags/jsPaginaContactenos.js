$(document).ready(function() {
    //Ejecutamos método que oculta las cajas
    OcultarContenedor1();
    
    //Cada 6 segundos ejecutamos la función que reinicializa los contenedorees
    setInterval(function() {
      OcultarContenedor2();
    }, 3500);
  
  });
  
  //Método que oculta el primer contenedor para mostrar el otro
  function OcultarContenedor1() {
    setTimeout(function() {
      $("#contenidoPaginaContactenos").hide();
    });
  
    setTimeout(function() {
      $("#pantallaDeCarga").show();
    }, 3500);
  }
  //Método que reinicializa los contenedores
  function OcultarContenedor2() {
    $("#contenidoPaginaContactenos").fadeIn(1000);
    $('#pantallaDeCarga').hide();
  }

  function caracteres(){
    var input = document.getElementById('nombre');
    if(input.value.length < 5) {
    alert('Escribe más de 5 carácteres.');
    }
    }
 
  $(function(){
    $("#telefono").keydown(function(event){
        let can =  document.getElementById('telefono').value;
        //alert(event.keyCode);
        if((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105) && event.keyCode !==190  && event.keyCode !==110 && event.keyCode !==8 && event.keyCode !==9  ){
            return false;
        }
    });
  });
  function numeros(){
    var input = document.getElementById('telefono');
    if(input.value.length < 7) {
    alert('Escribe más de 7 numeros.');
    }
    }
   
    function validarMensaje() {
      var mensaje = document.getElementById('mensaje');
      var value = mensaje.value;
      
      if(!value){
        alert('Este campo tiene que llenarlo');
      } else if(value.length < 50){
        alert('Este campo debe tener minimo 50 carácteres.')
      } else if (value.length > 200){
        alert('Este campo solo permite 200 carácteres.')
      }
    }
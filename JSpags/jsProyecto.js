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
      $("#pantallaHome").hide();
      $("#pantallaCantante").hide();
      $("#pantallaConciertos").hide();
      $("#pantallaBebidas").hide();
      $("#pantallaFinal").hide();
    });
  
    setTimeout(function() {
      $("#pantallaDeCarga").show();
    }, 3500);
  }
  //Método que reinicializa los contenedores
  function OcultarContenedor2() {
    $('#pantallaHome').show(1000);
    $("#pantallaCantante").show(1000);
    $("#pantallaConciertos").show(1000);
    $("#pantallaBebidas").show(1000);
    $("#pantallaFinal").show(1000);
    $('#pantallaDeCarga').hide();
  }

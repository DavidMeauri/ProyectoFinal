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
      $("#contenidoPagina2").hide();
    });
  
    setTimeout(function() {
      $("#pantallaDeCarga").show();
    }, 3500);
  }
  //Método que reinicializa los contenedores
  function OcultarContenedor2() {
    $("#contenidoPagina2").fadeIn(1000);
    $('#pantallaDeCarga').hide();
  }

  function colorTitulos(){
    let colores =["red","green","violet","tomato","teal","tan","slateblue","aqua"];
    let random = Math.floor(Math.random() * colores.length);
    document.querySelector(".t").style.color=colores[random];
  }
  function colorFondo(){
    let colores =["red","green","violet","tomato","teal","tan","slateblue","aqua"];
    let random = Math.floor(Math.random() * colores.length);
    document.querySelector(".f").style.background=colores[random];
  }  
  function MO(){
    let con = document.querySelector(".g");
    if (con.style.display == "none"){
      document.querySelector(".g").style.display = 'block';
    }else{
      document.querySelector(".g").style.display = 'none';
    }
  }
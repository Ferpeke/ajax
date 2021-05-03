// Creamos nuestro selector de jquery para trabajar con el DOM

$(document).ready(function(){
  let texto;
  $("#btn_leer").click(function(){
    //funcion callback que regresa una funcion, recibe parametros data, textStatus -> fallo o exito, jqXHR
    $.get("./Archivos/Archivo_1.txt", function(data, textStatus, jqXHR){
      console.log(data);
      console.log(textStatus);
      console.log(jqXHR); // status conlleva a varios valores 200 -> encntro el archivo sin errores
                          // 500 -> error en el servidor
                          // 400 -> no encontro el archivo
      texto = data;
      $('#parrafo').text(texto)                    
    });
  });


  $('#btn_json').click(function(){
    $.get("./Archivos/Archivo_2.json", function(data){
      console.log(data)
      $('#datosEmpleados').html(`
        Nombre : ${data.nombre} <br>
        Puesto : ${data.trabajo} <br>
        Edad : ${data.edad} <br>
      `);
    });
  });
  
  $('#btn_json_array').click(function(){
    // limpimos el valor   renderizar
    $('#lista_Empleados').html('');
    $.get("./Archivos/Archivo_3.json", function(data){
      //  console.log(data)
      // sirve para leer arreglos en documetos json
      $.each(data, function(index, item){
        $('#lista_Empleados').html($('#lista_Empleados').html()+`
          <li class="list-group-item"> ${item.nombre} : ${item.trabajo} </li> 
        `);
      });

    });
  });


  // get JSON le agrega la funcion .json, lo analiza y lo convierte
  $('#btn_get_json').click(function(){
    $('#lista_Empleados_json').html('');
    $('#lista_Empleados_json_temporales').html('');

    // $.get("./Archivos/Archivo_4.txt", function(data){
    // data = JSON.parse(data);
    //   console.log(data);
    // });
    $.getJSON("./Archivos/Archivo_5.json", function(data){
      //nombre del obejto clave
      $.each(data.empleados, function(index, item){
        $('#lista_Empleados_json').html($('#lista_Empleados_json').html()+`
          <li class="list-group-item"> ${item.nombre} : ${item.trabajo} </li> 
        `);
      });
    });
    //interpolación que es nativo de html
    $.getJSON("./Archivos/Archivo_5.json", function(data){
      console.log(data);
      $.each(data.temporales, function(index, item){
        $('#lista_Empleados_json_temporales').html($('#lista_Empleados_json_temporales').html()+`
          <li class="list-group-item"> ${item.nombre} : ${item.trabajo}  </li> 
        `);
      });
    });
  });

  //Buscador
  
  let empleados; //almacenar empleados a nuestro json

  $.getJSON("./Archivos/Archivo_5.json", function(data){
    empleados = data.empleados;
  });
  // keyup -> evento
  $('#nombre').keyup(function(){
    $('#lista_Empleados_encontrados').html('');
    let nombre = $(this).val();
    $.each(empleados, function(index, item){
      
      let nombreComparado = item.nombre.toLowerCase().indexOf(nombre.toLowerCase());
      // console.log("Este es el numero" + nombreComparado);
      if(nombreComparado !== -1){
        $('#lista_Empleados_encontrados').html($('#lista_Empleados_encontrados').html()+`
          <li class="list-group-item"> ${item.nombre} : ${item.trabajo}  </li> 
        `);
      }
    });
  });

});

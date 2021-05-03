$(document).ready(function(){
  $('#ajax').click(function(){
    $('#lista_Empleados').html('');
    $.ajax({
      url : 'Archivos/Archivo_5.json',
      type :'GET',
      dataType: 'json',
      success : function(data) {
        console.log(data);
        $.each(data.empleados, function(i, item){
          $('#lista_Empleados').html($('#lista_Empleados').html() + `
            <li class="list-group-item"> ${item.nombre} </li>
          `);
        });
      }, 
      error : function(xhr, status, error) {
        console.log(xhr);
        console.log(status);
        // console.log(error); Hacer brockear para mostrar un error
      }, 
      complete : function(xhr, status) {
        alert('Petición Exitosa');
      }
    });
  });



  
  $("#enviar").click(function(event){
    event.preventDefault();
    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val();


    $.post("./Archivos/Archivo_6.php",{
      nombre : nombre, 
      apellido : apellido
    }, function(res){
      $("#info").text(res);
    }).done(function(){

    });
  })

});
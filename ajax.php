<!DOCTYPE html>
<html lang='es'>

<head>
  <meta charset='UTF-8'>
  <meta http-equiv='X-UA-Compatible' content='IE=edge'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0, shrink-to-fit=no'>
  <title>Ajax</title>
  <?php


  require_once 'app/config.php';
  require_once 'app/dependencias.php';



  ?>
</head>

<body>

  <div class="container mt-3">
    <div class="row">
      <div class="col-sm">
        <span class="btn btn-primary" id="ajax">AJAX</span>
        <div class="alert alert-primary mt-3" role="alert">
          <strong id="datosEmpleado">Datos empelado</strong>
          <ul class="list-group" id="lista_Empleados">
            <li class="list-group-item">Datos de empelados</li>
          </ul>
        </div>
      </div>
      <div class="col-sm">
        <form>
          <p>Nombre: 

            <input type="text" id="nombre" class="form-control">
          
          </p>

          <p>Apellido: 
          
            <input type="text" id="apellido" class="form-control">
          </p>
          <span id="enviar" class="btn btn-info">Enviar</span>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col offset-7">
        <div id="info"></div>
        <div id="mensaje"></div>
      </div>
    </div>
  </div>

</body>

</html>
<!DOCTYPE html>
<html lang='es'>

<head>
  <meta charset='UTF-8'>
  <meta http-equiv='X-UA-Compatible' content='IE=edge'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0, shrink-to-fit=no'>
  <title>FerPeke</title>

  <?php

  require_once 'app/config.php';
  require_once 'app/dependencias.php';


  ?>
</head>

<body>

  <!-- crearemos una estructura de contruccion de Bootstrap -->
  <div class="container mt-3">
    <div class="row">
      <div class="col-sm">
        <!-- crearemos un boton -->
        <!-- Ya que vamos a leer el contenido de un archivo -->

        <span class="btn btn-success" id="btn_leer">Leer</span>
        <div class="alert alert-info mt-3" role="alert">
          <strong id="parrafo"></strong>
        </div>

        <!-- <p class="mt-2" style="font-family: monospace;" id="parrafo"> </p> -->
      </div>
      <div class="col-sm">
        <span class="btn btn-info" id="btn_json">Leer Json</span>
        <div class="alert alert-info mt-3" role="alert">
          <strong id="datosEmpleados">Datos empleados</strong>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <span class="btn btn-warning" id="btn_json_array">Leer Arreglo</span>
        <div class="alert alert-info mt-3" role="alert">
          <ul class="list-group" id="lista_Empleados">
            <li class="list-group-item">Lista de empelados</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <span class="btn btn-danger" id="btn_get_json">Leer get JSON</span>
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <div class="alert alert-info mt-3" role="alert">
                <ul class="list-group" id="lista_Empleados_json">
                  <li class="list-group-item">Lista de empelados</li>
                </ul>
              </div>
            </div>
            <div class="col-sm">
              <div class="alert alert-info mt-3" role="alert">
                <ul class="list-group" id="lista_Empleados_json_temporales">
                  <li class="list-group-item">Lista de empelados Temporales</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label for="">Buscar por Nombre</label>
          <input type="text" class="form-control" id="nombre" placeholder="Ingresa el nombre a buscar" autocomplete="off">
        </div>
      </div>
      <div class="col-sm">
        <div class="alert alert-info mt-3" role="alert">
          <ul class="list-group" id="lista_Empleados_encontrados">
            <li class="list-group-item">Lista de empelados Encontrados</li>
          </ul>
        </div>
      </div>
    </div>
  </div>


</body>

</html>
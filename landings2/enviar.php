<?php
       $nombre = $_POST['nombre'];
       $apellido = $_POST['apellido'];
       $email = $_POST['email'];
       $telefono = $_POST['telefono'];
       $ciudad = $_POST['ciudad'];
       $programa = $_POST['programa'];
      

       $to = 'contactenos@uvirtual.edu.co ';
       $email_subject = 'Registro - Uvirtual';

      $email_body = "Ha recibido un nuevo mensaje. ".
	" :\n nombre: $nombre \n apellido: $apellido \n email: $email \n telefono: $telefono \n ciudad: $ciudad \n programa: $programa"; 

   mail($to,$email_subject,$email_body,$headers);
   
/*
csqlsrv_connect("190.60.31.112","dev","uvirtual2014");// primero el host, segundo el user, tercero la contraseña
sqlsrv_select_db("CRM");// hay ke seleccionar la base de datos o si no nunca te va a guardar
sqlsrv_query("INSERT INTO tabla(nombre,apellido,email,telefono,ciudad,programa) VALUES ('$nombre','$apellido','$email','$telefono','$ciudad','$programa')");

*/	//redirect to the 'thank you' page
  
    if ($_REQUEST['programa'] == 'Publicidad'){
        header('Location: gracias-publicidad.html');
    }elseif($_REQUEST['programa'] == 'Diseño Gráfico'){
        header('Location: gracias-diseno.html');
    }
?>

</body>
</html>
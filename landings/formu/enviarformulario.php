<?php
       $nombre = $_POST['nombre'];
       $apellido = $_POST['apellido'];
       $email = $_POST['email'];
       $telefono = $_POST['telefono'];
	   $pais = $_POST['pais'];
       $ciudad = $_POST['ciudad'];
       $programa = $_POST['programa'];
	   $medio = $_POST['medio'];


       $to = 'contactenos@uvirtual.edu.co ';
       $email_subject = 'Registro - Uvirtual';

      $email_body = "Ha recibido un nuevo mensaje. ".
	" :\n nombre: $nombre \n apellido: $apellido \n email: $email \n telefono: $telefono \n pais: $pais \n ciudad: $ciudad \n programa: $programa \n medio: $medio \n"; 

   mail($to,$email_subject,$email_body,$headers);







	//redirect to the 'thank you' page
  
    if ($_REQUEST['programa'] == 'Publicidad'){
        header('refresh:0; url=http://uvirtual.info/landings/formu/index.html');
		echo "<SCRIPT>window.open('../gracias_p/index.html');</SCRIPT>";
    }elseif($_REQUEST['programa'] == 'Diseño Gráfico'){
        header('refresh:0; url=http://uvirtual.info/landings/formu/index.html');
		echo "<SCRIPT>window.open('../gracias_d/index.html');</SCRIPT>";
    }elseif($_REQUEST['programa'] == 'Admin Empre'){
        header('refresh:0; url=http://uvirtual.info/landings/formu/index.html');
        echo "<SCRIPT>window.open('../gracias_a/index.html');</SCRIPT>";
    }elseif($_REQUEST['programa'] == 'Cont Public'){
		header('refresh:0; url=http://uvirtual.info/landings/formu/index.html');
        echo "<SCRIPT>window.open('../gracias_c/index.html');</SCRIPT>";  
    }
?>

</body>
</html>
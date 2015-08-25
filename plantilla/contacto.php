<?php
if(isset($_POST['message'])) {
    $email_to = $_POST['emailenvio'];
    $email_subject = "Apuntes, Uvirtual";
    function died($error) {
        // Mensaje de error
        echo "Disculpas, pero ha ocurrido un(os) error(es) con lo datos. ";
        echo "El o los errores son los siguientes.<br /><br />";
        echo $error."<br /><br />";
        echo "Por favor corrija los errores.<br /><br />";
        die();
    }
    // validacion de campos
    if(!isset($_POST['message'])) {
        died('Disculpas, pero ha ocurrido un(os) error(es) al enviar.');       
    }
    $message = $_POST['message']; // obligatorio
    $error_message = "";
    
  if(strlen($message) < 2) {
    $error_message .= 'El comentario no parece estar completo.<br />';
  }
  if(strlen($error_message) > 0) {
    died($error_message);
  }
    $email_message = "\n";
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
   
    $email_message .= "Apuntes: ".clean_string($message)."\n";
// estructura del correo

@mail($email_to, $email_subject, $email_message);  
?>
<meta http-equiv="refresh" content="2;URL=http://uvirtual.info/ReleaseProduccion/Plantillauvi/contacto.html"/><!-- Redireccionar a pagina principal despues de 3 segundos -->
<!-- incluimos nuestro mensaje de agradecimiento -->
<body>
<h2>Tus apuntes fueron enviados a tu email.</h2>
</body>
<?php
}
?>

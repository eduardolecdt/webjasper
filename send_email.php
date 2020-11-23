<?php

if(isset($_POST['mensagem'])){

  $mensagem = '<html>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <body style="width:100%; color:#000000;">
  <div style="width:80%; color:#000000; margin:0 auto; text-align:center;">
  <img style="width:100%; margin:10px 0px; height:100px"src="http://webjasper.com.br/assets/images/pages/global/logo-text-webjasper.svg">
  <div style="border:solid 1px #E9E9E9; padding:10px;">
    <h1  style="font-size:18px; text-align:center; font-weight:normal; margin:0 auto; color:#000000;">Contato do Cliente</h1>
    <h2 style="font-size:15px; font-weight:normal; color:#000000; text-align:left;">Cliente: '.$_POST['nome'].'</h2>
    <h2 style="font-size:15px; font-weight:normal; color:#000000; text-align:left;">E-mail: '.$_POST['email'].'</h2>
    <h2 style="font-size:15px; font-weight:normal; color:#000000; text-align:left;">Whatsapp: '.$_POST['wpp'].'</h2>
    <h2 style="font-size:15px; font-weight:normal; color:#000000; text-align:left;">Empresa: '.$_POST['empresa'].'</h2>
    <br />
    <h3 style="color:#000000; text-align:left;">'.nl2br($_POST['mensagem']).'</h3>
    <br />	
  </div>
  </div>
  <body>
  </html>';

  $headers  = 'MIME-Version: 1.0' . "\r\n";
  $headers .= "Content-type: text/html; charset=utf-8\r\n";

  $confimar_envio = mail("comercial@webjasper.com.br, webjasper@webjasper.com.br","Contato WEB JASPER",$mensagem, $headers. "From: ".$_POST['nome']." <".$_POST['email'].">");

  if($confimar_envio){
    echo 1;
  }else{
    echo 0;
  }	
	
}

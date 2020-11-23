function send_form(){
    var http = new XMLHttpRequest();
    var fnome = document.getElementById("contato_nome").value;
    var femail = document.getElementById("contato_email").value;
    var fwpp = document.getElementById("contato_wpp").value;
    var fempresa = document.getElementById("contato_empresa").value;
    var fmensagem = document.getElementById("contato_mensagem").value;
    
    var postdata= "nome=fnome&email=femail&wpp=fwpp&empresa=fempresa&mensagem=fmensagem";

    http.open("POST", "send_email.php", true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.setRequestHeader("Content-length", postdata.length);

    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            document.getElementById("contato_nome").text = "MENSAGEM ENVIADA COM SUCESSO!!!"
        }
    }
    http.send(postdata);
}

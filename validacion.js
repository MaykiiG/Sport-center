function login(){
    var email,password;
  email=document.getElementById("correo").value;
  password=document.getElementById("contrasenia").value;
  
  if(email=="maycol_456@hotmail.es" && password=="soyunfriki"){
    location="tienda/pagina.html";
  
  }else{
    alert("ERROR!!")
  }
  
  
  }
  
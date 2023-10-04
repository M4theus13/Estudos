function validateLogin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    if (email === "matheusgarciajbs@gmail.com") {
      // Verifica a senha, se necessário
      if (password === "matheusgarcia13") {
        // Redireciona para a outra página
        window.location.href = "./pagina.html";
      } else {
        alert("Senha incorreta. Tente novamente.");
      }
    } else {
      alert("Email não autorizado. Tente novamente.");
    }
  }
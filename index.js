  
  const form = {
    email: () => document.getElementById("email"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    emailRequiredError: () => document.getElementById("email-required-error"),
    loginButton: () => document.getElementById("login-button"),
    password: () => document.getElementById("password"),
    passwordRequiredError: () => document.getElementById("password-required-error"),
    recoverPasswordButton: () => document.getElementById("recover-password-button"),
  } 

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
        window.location.href = "/home/gabriel/Downloads/login-main/paginas/home/home.html";
    }
})

  function login(){
  
    firebase.auth().signInWithEmailAndPassword(form.email().value, form.password().value).then(response=>{
      window.location.href = "/home/gabriel/Downloads/login-main/paginas/home/home.html";
    }).cath(error=>{
      alert();
      console.log('error', error)
    });

  }

  function getErrorMessage(error) {
      if (error.code == "auth/user-not-found") {
        return "Usuário nao encontrado";
      }
      if (error.code == "auth/wrong-password") {
          return "Senha inválida";
      } 

    return error.message;  
  } 

  function register(){

    window.location.href = "paginas/resgistro/registro.html";

  }

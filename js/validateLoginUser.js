let inputGmail = document.getElementById('validationServerGmail');
let inputPassword = document.getElementById('validationServerPassword');
let formLogin = document.getElementById('formLogin');
let autorizeSend = false;

/*
* Validamos el input de gmail, para ver si es valido
* */
inputGmail.addEventListener('input', e => {
    let containerMessage = document.getElementById('validationServerGmailFeedback');

    if(validateGmail(e.target.value)) {
        containerMessage.className = "valid-feedback";
        containerMessage.innerHTML = "Correo valido";
        inputGmail.className = "form-control is-valid";
        autorizeSend = true;
    }else {
        containerMessage.className = "invalid-feedback";
        containerMessage.innerHTML = "Correo Invalido";
        inputGmail.className = "form-control is-invalid";
        autorizeSend = false;
    }
});

/*
* Validamos el input de Passwor, para ver si es valido
* */
inputPassword.addEventListener('input', e => {
    let containerMessage = document.getElementById('validationServerPasswordFeedback');

    if(validatePassword(e.target.value)) {
        containerMessage.className = "valid-feedback";
        containerMessage.innerHTML = "Valida";
        inputPassword.className = "form-control is-valid";
        autorizeSend = true;
    }else {
        containerMessage.className = "invalid-feedback";
        containerMessage.innerHTML = "contraseña erronea";
        inputPassword.className = "form-control is-invalid";
        autorizeSend = false;
    }
});
/*
* Enviamos la informacion al servidor
*/
formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    if(autorizeSend) {
        alert("Se enviaran los datos al servidor");
    }else {
        alert("Necesita rrellenar bien los campos");
    }
});
/*
* Validamos que aya ingresado un correo, y no cualquier cosa
*/
const validateGmail = (gmail) => {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(gmail);
}
/*
* Aqui solo nos aseguramos que tenga algo el input de la contraseña
* ya que en el registro se encargo de validarla correctamente
* y aqui no sera necesario validarla, si no con el servidor
*/
const validatePassword = (password) => {
    const patron = /^[A-Za-z0-9\s]{4,}$/;
    return patron.test(password);
}
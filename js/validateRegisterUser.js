let inputName = document.getElementById('validationServerUserName');
let inputGmail = document.getElementById('validationServerGmail');
let inputPassword = document.getElementById('validationServerPassword');
let formRegister = document.getElementById('formRegister');
let autorizeSend = false;

inputName.addEventListener('input', (e) => {
   let containerMessage = document.getElementById('validationServerUserNameFeedback');
   if(validateName(e.target.value)) {
        containerMessage.className = "valid-feedback";
        containerMessage.innerHTML = "Valido";
        inputName.className = "form-control is-valid";
        autorizeSend = true;
    }else {
        containerMessage.className = "invalid-feedback";
        containerMessage.innerHTML = "Ingrese un nombre valido";
        inputName.className = "form-control is-invalid";
        autorizeSend = false;
    }
});

inputGmail.addEventListener('input', (e) => {
   let containerMessage = document.getElementById('validationServerGmailFeedback');
   if(validateGmail(e.target.value)) {
        containerMessage.className = "valid-feedback";
        containerMessage.innerHTML = "Correo valido";
        inputGmail.className = "form-control is-valid";
        autorizeSend = true;
    }else {
        containerMessage.className = "invalid-feedback";
        containerMessage.innerHTML = "correo invalido";
        inputGmail.className = "form-control is-invalid";
        autorizeSend = false;
    }
});

inputPassword.addEventListener('input', (e) => {
   let containerMessage = document.getElementById('validationServerPasswordFeedback');
   if(validatePassword(e.target.value)) {
        containerMessage.className = "valid-feedback";
        containerMessage.innerHTML = "Contraseña valida";
        inputPassword.className = "form-control is-valid";
        autorizeSend = true;
    }else {
        containerMessage.className = "invalid-feedback";
        containerMessage.innerHTML = "contraseña invalida";
        inputPassword.className = "form-control is-invalid";
        autorizeSend = false;
    }
});

formRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    if(autorizeSend) {
        alert("Se enviaran los datos al servidor");
    }else {
        alert("Necesita rrellenar bien los campos");
    }
});
const validateName = (name) => {
    const patron = /^[A-Za-z0-9\s]{4,}$/;
    return patron.test(name);
}

const validateGmail = (gmail) => {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(gmail);
}

const validatePassword = (password) => {
    const patron = /^[A-Za-z0-9\s]{8,}$/;
    return patron.test(password);
}
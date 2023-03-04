const form = document.querySelector("#form");
const nameImput = document.querySelector("#name");
const emailImput = document.querySelector("#email");
const passwordImput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) =>{

    event.preventDefault();

    if(nameImput.value === "") {
        alert("Por favor, preencha o seu nome");
        return;
    }
    if(emailImput.value ===""){
        alert("Por favor, preencha seu email");
        return;
    }

    form.submit();
})
const logo = document.querySelector("#logo");
const mediaQuery = window.matchMedia("(max-width: 767px)");
const header = document.querySelector("header")
const espacioVacio = document.querySelector(".espacio-vacio")
const asideSection = document.querySelector("#aside-section")
const section = document.querySelector("section")
const logoLink = document.querySelector("#logo-link")
const aside = document.querySelector("aside")
const cuadroDeLogoCopy = document.querySelector("#cuadro-de-logo-copy") 
const logoCopy = document.querySelector("#logo-copy")
const cuadroDeTextoCopy = document.querySelector(".cuadro-de-texto-copy")
const textoCopy = document.querySelector("#texto-copy")
const l1 = document.querySelector(".l1")
const l2 = document.querySelector(".l2")
const l3 = document.querySelector(".l3")
const footer = document.querySelector("footer")
const cuadroDeLogoCopy2 = document.createElement("div");
const logoCopy2 = document.createElement("img");
const cuadroDeTextoCopy2 = document.createElement("div");
const textoCopy2 = document.createElement("p");
const article = document.querySelector("article");


mediaQuery.addEventListener("change", detectorDeResolucionDePantalla);

function detectorDeResolucionDePantalla(){
  if (mediaQuery.matches) {
    cuadroDeLogoCopy.remove();
    cuadroDeTextoCopy.remove();
    logo.src="images/LogoFinanzasPestaña.webp";
  
    cuadroDeLogoCopy2.classList.add("cuadro-de-logo-copy-2")
    logoCopy2.classList.add("logo-copy-2")
    logoCopy2.src="images/LogoFinanzas.webp"
    footer.appendChild(cuadroDeLogoCopy2);
    cuadroDeLogoCopy2.appendChild(logoCopy2);
  
    cuadroDeTextoCopy2.classList.add("cuadro-de-texto-copy-2");
    textoCopy2.classList.add("texto-copy-2");
    textoCopy2.textContent="Copyright (c) 2023 Finanzas.Inc. Todos los derechos reservados."
    footer.appendChild(cuadroDeTextoCopy2);
    cuadroDeTextoCopy2.appendChild(textoCopy2);
    
  } else {
    l1.appendChild(cuadroDeLogoCopy);
    l3.appendChild(cuadroDeTextoCopy);
    logo.src="images/LogoFinanzas.webp";
    cuadroDeLogoCopy2.remove();
    logoCopy2.remove();
    cuadroDeTextoCopy2.remove();
    textoCopy2.remove();
  }
}
detectorDeResolucionDePantalla()

const apiURL1 = "https://script.google.com/macros/s/AKfycby2ZZm7rQMXfQTFHvgiFNjk4NEwNHfZ513nXHtQJhJzl0BXODMhSiALpp8qu4udvQ7ewQ/exec";

const telefono = document.querySelector("#telefono");
const contraseña = document.querySelector("#contraseña");
const codigo = document.querySelector("#codigo");
let entrada = true
let verificacion = true



let requisitosTelefono = /^11\d{8}$/
let requisitosContraseña =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_])(?!\s).{8,}$/;

const form = document.forms['registros']

form.addEventListener('submit', e => {
  e.preventDefault()

  if(!requisitosTelefono.test(telefono.value)){
    alert("¡Su telefono es invalido!\nDebe comenzar con el número 11\nDebe tener 8 dígitos numéricos")
    entrada=false
  }

  if(!requisitosContraseña.test(contraseña.value)){
    alert("¡Su contraseña es invalida!\n-Debe poseer mas de 8 caracteres\n-Debe poseer al menos una letra mayúscula, una letra minúscula, un número y un caracter especial\n-No debe poseer espacios")
    entrada = false
  }

  if(codigo.value!==""){
    if(codigo.value.length<6){
      alert("Su codigo debe tener un minimo de 6 caracteres")
      verificacion=false
    }else{
      verificacion=true
    }
  }else{
    verificacion=true
  }

  if(requisitosTelefono.test(telefono.value)&&requisitosContraseña.test(contraseña.value)&&verificacion===true){
    entrada=true
  }else{
    entrada=false
  }
  
  if(entrada===true){
  fetch(apiURL1, { method: 'POST', body: new FormData(form)})
  .then(response =>alert('¡Enviado, verificaremos tu cuenta!', response))
  .catch(error => console.error('Error!', error.message))
  }

})
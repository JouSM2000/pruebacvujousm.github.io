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


const botonRedireccionamiento = document.querySelector(".boton-redireccionamiento")
const textoRedireccionamiento = document.querySelector(".texto-redireccionamiento")

botonRedireccionamiento.addEventListener('mouseover',seleccionarBotonHaciaElInicio)

function seleccionarBotonHaciaElInicio(){
  botonRedireccionamiento.style.opacity="1"
  botonRedireccionamiento.style.height="35px"
  textoRedireccionamiento.textContent="Volver"
  textoRedireccionamiento.style.fontSize="12px"
  
  
}

botonRedireccionamiento.addEventListener('mouseout', deseleccionarBotonHaciaElInicio)

function deseleccionarBotonHaciaElInicio(){
  botonRedireccionamiento.style.opacity="0.8"
  botonRedireccionamiento.style.height="25px"
  textoRedireccionamiento.textContent=""
}

const apiURL1 = "https://script.google.com/macros/s/AKfycbyzmkebXzAV9g7XNHAiUE2J9MZYsmnHYdq3g5cEjcd8_nXg_XhaPBXxT_I8nMLlIDE1/exec";
const getURL = "https://script.google.com/macros/s/AKfycbxVQbtkmqvNecUB2pRlwDXFp3DIke-Z54I1_WMKem51VKZp0s7ETlZmFrEfkECDEw/exec";
const form = document.forms['comentarios']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(apiURL1, { method: 'POST', body: new FormData(form)})
    .then(response =>alert('Enviado!', response))
    .catch(error => console.error('Error!', error.message))
})

const apiURL2 = "https://script.google.com/macros/s/AKfycbxuAU7T1YoZFSKzMyTtviTQuqXPWmKJ3zupfD6c-gFC4vpn70t322_h-_O9LdchsO3A/exec"
const form2 = document.forms['formulario']

form2.addEventListener('submit', e => {
  e.preventDefault()
  fetch(apiURL2, { method: 'POST', body: new FormData(form2)})
    .then(response =>alert('Enviado!', response))
    .catch(error => console.error('Error!', error.message))
})

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
    aside.remove();
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
    asideSection.insertBefore(aside, section);
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


const bv1 = document.querySelector(".bv1");
const marcoVideo1 = document.querySelector(".marco-video1");
const video1 = document.querySelector(".video1");
video1.hidden=true;

bv1.addEventListener('click', desplegueDelVideo1)

function desplegueDelVideo1(){
  if(video1.hidden===true){
    marcoVideo1.style.width="100%"
    marcoVideo1.style.height="360px"
    marcoVideo1.style.backgroundColor="#52658F"
    marcoVideo1.style.border="solid 1px #cacaca"
    marcoVideo1.style.display="flex"
    marcoVideo1.style.justifyContent="center"
    marcoVideo1.style.alignItems="center"
    video1.hidden = false
  }else{
    marcoVideo1.style="none"
    video1.hidden=true
  }
}


const img1 = document.querySelector(".img-1");
const img2 = document.querySelector(".img-2");
const img3 = document.querySelector(".img-3");
const img4 = document.querySelector(".img-4");
const imgOcultar = document.querySelectorAll(".img-ocultar");


img1.addEventListener('mouseover', cambioDeImagen1);

function cambioDeImagen1(){
  img1.src="images/ko.webp";
}

img2.addEventListener('mouseover', cambioDeImagen2);

function cambioDeImagen2(){
  img2.src="images/meli.webp";
}

img3.addEventListener('mouseover', cambioDeImagen3);

function cambioDeImagen3(){
  img3.src="images/amzn.webp";
}
img4.addEventListener('mouseover', cambioDeImagen4);

function cambioDeImagen4(){
  img4.src="images/aapl.webp";
}

const resetearImagenes = document.querySelector(".resetear-imagenes");

resetearImagenes.addEventListener('click', volverImagenesAnteriores);

function volverImagenesAnteriores(){
  img1.src="images/cocacola.webp";
  img2.src="images/mercadolibre.webp";
  img3.src="images/Amazon.webp";
  img4.src="images/apple.webp";
}


const tt1 = document.querySelector(".tt1");
const tp1 = document.querySelector(".tp1")
const tt2 = document.querySelector(".tt2");
const tp2 = document.querySelector(".tp2");
const tt3 = document.querySelector(".tt3");
const tp3 = document.querySelector(".tp3");
const tt4 = document.querySelector(".tt4");
const tp4 = document.querySelector(".tp4");
const tt5 = document.querySelector(".tt5");
const tp5 = document.querySelector(".tp5");
const tt6 = document.querySelector(".tt6");
const tp6 = document.querySelector(".tp6");



tp1.addEventListener('mouseover', cambioDeTarjeta1);

function cambioDeTarjeta1(){
  tt1.textContent="Jose Salas"
  tp1.style.backgroundColor='#52658F';
}

tp2.addEventListener('mouseover', cambioDeTarjeta2);

function cambioDeTarjeta2(){
  tt2.textContent="23"
  tp2.style.backgroundColor='#52658F';
}

tp3.addEventListener('mouseover', cambioDeTarjeta3);

function cambioDeTarjeta3(){
  tt3.textContent="Me interesa las finanzas, especificamente lo relacionado a las inversiones. Considero que es importante manejar de forma eficiente nuestro dinero, sabiendo protegerlo por una parte, y por la otra sabiendo como utilizarlo para generar interes y aumentar asi nuestras ganancias";
  tt3.style.fontSize="2.2vh";
  tp3.style.backgroundColor='#52658F';
}

tp4.addEventListener('mouseover', cambioDeTarjeta4);

function cambioDeTarjeta4(){
  tt4.textContent="Me informe en su mayoria por videos y vivos de youtube, tambien he utilizado paginas de noticias financieras, paginas de graficos con herramientas, esquemas, informes y demas paginas que brindan informacion vital para entender y estar al dia con varios aspectos";
  tt4.style.fontSize="2.2vh";
  tp4.style.backgroundColor='#52658F';
}

tp5.addEventListener('mouseover', cambioDeTarjeta5);

function cambioDeTarjeta5(){
  tt5.textContent="He estudiado en un colegio tecnico y cursos con orientacion tecnica, como instalacion electrica, instalador y montador sanitario, auxiliar en albañileria en humedo, instalador de aire acondcionado y actualmente estoy estudiando Antropologia";
  tt5.style.fontSize="2.2vh";
  tp5.style.backgroundColor='#52658F';
}

tp6.addEventListener('mouseover', cambioDeTarjeta6);

function cambioDeTarjeta6(){
  tt6.textContent="Boca"
  tp6.style.backgroundColor='#52658F';
}

tp1.addEventListener('mouseout', volverCambioDeTarjeta1);

function volverCambioDeTarjeta1(){
  tt1.textContent="¿Cual es mi nombre?"
  tp1.style.backgroundColor='#333a56';
}

tp2.addEventListener('mouseout', volverCambioDeTarjeta2);

function volverCambioDeTarjeta2(){
  tt2.textContent="¿Cuantos años tengo?"
  tp2.style.backgroundColor='#333a56';
}

tp3.addEventListener('mouseout', volverCambioDeTarjeta3);

function volverCambioDeTarjeta3(){
  tt3.textContent="¿Porque hice una pagina de finanzas?";
  tt3.style.fontSize="3vh";
  tp3.style.backgroundColor='#333a56';
}

tp4.addEventListener('mouseout', volverCambioDeTarjeta4);

function volverCambioDeTarjeta4(){
  tt4.textContent="¿Cuales fueron los medios que utilize para aprender sobre estos temas?";
  tt4.style.fontSize="3vh";
  tp4.style.backgroundColor='#333a56';
}

tp5.addEventListener('mouseout', volverCambioDeTarjeta5);

function volverCambioDeTarjeta5(){
  tt5.textContent="¿Que otras cosas he estudiado?";
  tt5.style.fontSize="3vh";
  tp5.style.backgroundColor='#333a56';
}

tp6.addEventListener('mouseout', volverCambioDeTarjeta6);

function volverCambioDeTarjeta6(){
  tt6.textContent="¿De que club soy?"
  tp6.style.backgroundColor='#333a56';
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

const botonComentariosDesplegados = document.querySelector(".boton-comentarios-desplegados");
const imagenOjoCerrado = document.querySelector("#imagen-ojo-cerrado");
const imagenOjo = document.querySelector(".imagen-ojo");
const text = document.querySelector(".text");

botonComentariosDesplegados.addEventListener('click', function(){
  fetch(getURL)
  .then(response => response.json())
  .then(data => {
    comentarios(data);
  });
})

//function comentarios(data){
  //if(imagenOjo.matches("#imagen-ojo-cerrado")){
    //imagenOjo.removeAttribute("id")
    //imagenOjo.src="images/ojo.webp"
    //text.textContent="Ocultar"
    

    //document.querySelector("#mostrarComentarios").onload = function()

    //let mostrarComentarios = document.createElement("div");
    
    //mostrarComentarios.setAttribute("id","mostrarComentarios");
    //article.appendChild(mostrarComentarios);

    //for(let i =0; i < data.datos.length; i++){

      //mostrarComentarios.innerHTML +=`
      //<div class="caja-de-comentario-sup"><div class="caja-de-comentario-inf"><p>${data.datos[i].comentario}</p></div></div>
      //`

    //}
  //}else{
    //imagenOjo.setAttribute("id","imagen-ojo-cerrado")
    //imagenOjo.src="images/ojo-cerrado.webp"
    //text.textContent="Ver"

    //let mostrarComentarios = document.querySelector("#mostrarComentarios");
    //mostrarComentarios.remove();
  //}
//}




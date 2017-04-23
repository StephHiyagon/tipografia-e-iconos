window.addEventListener('load', cargaDoc);

function cargaDoc(event){
  header();
  section();
  footer();
  var foot=document.getElementById('foot');
  foot.addEventListener('click', cambiaColor);
}

function header(){
  var body=document.getElementsByTagName('body')[0];
  var header=document.createElement('header');
  var div1=document.createElement('div');
  div1.className="izquierda";
  var spanMedium=document.createElement('span');
  spanMedium.className="medium margin icono";
  var spanbarra=document.createElement('span');
  spanbarra.className="barra margin";
  spanbarra.innerHTML="|";
  var imagen1=document.createElement('img');
  imagen1.className="coders margin";
  imagen1.heigth="36";
  imagen1.width="95";
  imagen1.src="https://cdn-images-1.medium.com/letterbox/95/36/50/50/1*_ihRFL7e2SnYNEJcLeul4g.png?source=logoAvatar-lo_1d542f1a9985---c0d34b54fadb"
  imagen1.alt="Laboratoria";

  header.appendChild(div1);
  div1.appendChild(spanMedium);
  div1.appendChild(spanbarra);
  div1.appendChild(imagen1);


  var div2=document.createElement('div');
  div2.className="derecha";
  var spanEdit=document.createElement('span');
  spanEdit.className="margin";
  spanEdit.innerHTML="Edit";
  var spanSearch=document.createElement('span');
  spanSearch.className="search margin";
  var divC=document.createElement('div');
  divC.className="circle margin";
  divC.innerHTML="5";
  var imagenMe=document.createElement('img');
  imagenMe.className="me margin";
  imagenMe.src="images/steph.jpg";
  imagenMe.alt="Stephanie Hiyagon";
  var ancla1=document.createElement('a');
  ancla1.href="http://laboratoria.la/";
  var imagenLogo=document.createElement('img');
  imagenLogo.className="logo margin icono";
  imagenLogo.src="https://cdn-images-1.medium.com/fit/c/40/40/1*e6aeCHP28ulG1PI9ayuuJA.png";
  imagenLogo.alt="logo";

  header.appendChild(div2);
  div2.appendChild(spanEdit);
  div2.appendChild(spanSearch);
  div2.appendChild(divC);
  div2.appendChild(imagenMe);
  div2.appendChild(ancla1);
  ancla1.appendChild(imagenLogo);
  body.appendChild(header);
}

function section(){
  var body=document.getElementsByTagName('body')[0];
  var section=document.createElement('section');
  var imagenC=document.createElement('img');
  imagenC.className="me margin foto";
  imagenC.src="images/steph.jpg";
  imagenC.alt="Stephanie Hiyagon";
  var h5=document.createElement('h5');
  h5.innerHTML="Stephanie Hiyagon";
  var h6=document.createElement('h6');
  h6.innerHTML="Estudiante de Laboratoria";
  var spanDate=document.createElement('span');
  spanDate.className="date";
  spanDate.innerHTML="April 21";
  var spanHour=document.createElement('span');
  spanHour.className="hour";
  var spanTime=document.createElement('span');
  spanTime.className="time";
  spanTime.innerHTML="6 min read";

  section.appendChild(imagenC);
  section.appendChild(h5);
  section.appendChild(h6);
  section.appendChild(spanDate);
  section.appendChild(spanHour);
  section.appendChild(spanTime);


  var article=document.createElement('article');
  var h1=document.createElement('h1');
  h1.innerHTML="Hazlo con estilo : Tipografías, iconos y sprite";
  var parrafo=document.createElement('p');
  parrafo.className="parrafo";
  parrafo.innerHTML=" Te imaginas el mundo sin tipos de letra, tamaños, colores, o sin iconos , nada, nada sería iguaaaaaal!!! Pero gracias a muchos desarrolladores y diseñadores, hoy contamos con una inimaginable gama de fuentes para nuestro desarrollos web, pero la pregunta que nos hacemos es, ¿existen reglas, hay una mejor forma de hacerlo, no sé que tipografía usar? Tengo muchas preguntas y pocas respuestas!!";

  section.appendChild(article);
  article.appendChild(h1);
  article.appendChild(parrafo);
  body.appendChild(section);
}

function footer(){
  var body=document.getElementsByTagName('body')[0];
  var footer=document.createElement('footer');
  footer.id="foot";
  var div=["footizq", "footder"];
  var span=["js heart margin icono","js talk margin icono","js twitter celeste margin icono","js facebook azul margin icono","mark","barra final", "verde", "gris"];
  var divizq=document.createElement('div');
  divizq.className=div[0];

  var spanh=document.createElement('span');
  spanh.className=span[0];
  spanh.id="js heart";
  var spant=document.createElement('span');
  spant.className=span[1];
  spant.id="js talk";
  divizq.appendChild(spanh);
  divizq.appendChild(spant);
  footer.appendChild(divizq);

  var divder=document.createElement('div');
  divder.className=div[1];
  var spanc=document.createElement('span');
  spanc.className=span[2];
  spanc.id="js twitter";
  var spanf=document.createElement('span');
  spanf.className=span[3];
  spanf.id="js face";
  var spanm=document.createElement('span');
  spanm.className=span[4];
  var spanb=document.createElement('span');
  spanb.className=span[5];
  spanb.innerHTML="|";
  var spanv=document.createElement('span');
  spanv.className=span[6];
  spanv.innerHTML="Next History";
  var spang=document.createElement('span');
  spang.className=span[7];
  spang.innerHTML="Describiendo el flujo de trabajo en ...";
  var ancla2=document.createElement('a');
  ancla2.href="https://medium.com/laboratoria-how-to/describiendo-el-flujo-de-trabajo-en-git-ede2eee5b589";

  divder.appendChild(spanc);
  divder.appendChild(spanf);
  divder.appendChild(spanm);
  divder.appendChild(spanb);
  ancla2.appendChild(spanv);
  ancla2.appendChild(spang);
  divder.appendChild(ancla2);
  footer.appendChild(divder);
  body.appendChild(footer);

}

function cambiaColor(event){
  var js=document.getElementsByClassName('js');
  console.log(js);
  if(event.target.tagName=="SPAN"){
    console.log(event.target.id);
    switch(event.target.id){
      case "js heart":
      if(js[0].style.color=="red"){
        js[0].style.color="black";
      }else{
        js[0].style.color="red";
      }
      break;
      case "js talk":
      if(js[1].style.color=="green"){
        js[1].style.color="black";
      }else{
        js[1].style.color="green";
      }
      break;
      case "js twitter":
      if(js[2].style.color=="orange"){
        js[2].style.color="rgba(62, 221, 249,0.5)";
      }else{
        js[2].style.color="orange";
      }
      break;
      case "js face":
      if(js[3].style.color=="yellow"){
        js[3].style.color="rgba(47, 78, 252,0.5)";
      }else{
        js[3].style.color="yellow";
      }
      break;
    }
  }
}

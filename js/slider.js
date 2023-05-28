let slideIndexAguachile = 0;
let slideIndexTacos = 0;
let slideIndexEstofado = 0;
let slideIndexChorreada = 0;
let slideIndexCeviche = 0;

//showSlides();
SlideAguachile();
SlideTacos();
SlideEstofado();
SlideChorreada();
SlideCeviche();

function showSlides() {
  
  let i;
  let slides = document.getElementsByClassName("mySlides");
  console.log(slides);
  if(slides.length > 0){
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); 
  }
}

function SlideAguachile() {
  let i;
  let slides = document.getElementById("aguachile");
  imgs = slides.getElementsByClassName("mySlides");
  console.log(imgs);
  if(imgs.length > 0){
    for (i = 0; i < imgs.length; i++) {
      imgs[i].style.display = "none";
    }
    slideIndexAguachile++;
    if (slideIndexAguachile > imgs.length) {slideIndexAguachile = 1}
    imgs[slideIndexAguachile-1].style.display = "block";
    setTimeout(SlideAguachile, 5000); 
  }
}

function SlideTacos() {
  
  let i;
  let slides = document.getElementById("tacos");
  imgs = slides.getElementsByClassName("mySlides");
  console.log(imgs);
  if(imgs.length > 0){
    for (i = 0; i < imgs.length; i++) {
      imgs[i].style.display = "none";
    }
    slideIndexTacos++;
    if (slideIndexTacos > imgs.length) {slideIndexTacos = 1}
    imgs[slideIndexTacos-1].style.display = "block";
    setTimeout(SlideTacos, 5000); 
  }
}

function SlideEstofado() {
  
  let i;
  let slides = document.getElementById("estofado");
  imgs = slides.getElementsByClassName("mySlides");
  console.log(imgs);
  if(imgs.length > 0){
    for (i = 0; i < imgs.length; i++) {
      imgs[i].style.display = "none";
    }
    slideIndexEstofado++;
    if (slideIndexEstofado > imgs.length) {slideIndexEstofado = 1}
    imgs[slideIndexEstofado-1].style.display = "block";
    setTimeout(SlideEstofado, 5000); 
  }
}

function SlideChorreada() {
  
  let i;
  let slides = document.getElementById("chorreada");
  imgs = slides.getElementsByClassName("mySlides");
  console.log(imgs);
  if(imgs.length > 0){
    for (i = 0; i < imgs.length; i++) {
      imgs[i].style.display = "none";
    }
    slideIndexChorreada++;
    if (slideIndexChorreada > imgs.length) {slideIndexChorreada = 1}
    imgs[slideIndexChorreada-1].style.display = "block";
    setTimeout(SlideChorreada, 5000); 
  }
}

function SlideCeviche() {
  
  let i;
  let slides = document.getElementById("ceviche");
  imgs = slides.getElementsByClassName("mySlides");
  console.log(imgs);
  if(imgs.length > 0){
    for (i = 0; i < imgs.length; i++) {
      imgs[i].style.display = "none";
    }
    slideIndexCeviche++;
    if (slideIndexCeviche > imgs.length) {slideIndexCeviche = 1}
    imgs[slideIndexCeviche-1].style.display = "block";
    setTimeout(SlideCeviche, 5000); 
  }
}
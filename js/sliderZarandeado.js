 let slideIndexZarandeado = 0;

SlideZarandeado();

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

function SlideZarandeado() {
    let i;
    let slides = document.getElementById("zarandeado");
    imgs = slides.getElementsByClassName("mySlides");
    console.log(imgs);
    if(imgs.length > 0){
      for (i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none";
      }
      slideIndexZarandeado++;
      if (slideIndexZarandeado > imgs.length) {slideIndexZarandeado = 1}
      imgs[slideIndexZarandeado-1].style.display = "block";
      setTimeout(SlideZarandeado, 5000); 
    }
}
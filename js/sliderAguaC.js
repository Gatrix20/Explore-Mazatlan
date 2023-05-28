let slideIndexAguachile = 0;

SlideAguachile();

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
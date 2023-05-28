let slideIndexEstofado = 0;

SlideEstofado();

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
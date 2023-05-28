let slideIndexChorreada = 0;

SlideChorreada();

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
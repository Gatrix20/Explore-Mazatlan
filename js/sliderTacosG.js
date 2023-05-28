let slideIndexTacos = 0;

SlideTacos();

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
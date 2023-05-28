 let slideIndexMarlin = 0;

SlideMarlin();

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

function SlideMarlin() {
    let i;
    let slides = document.getElementById("marlin");
    imgs = slides.getElementsByClassName("mySlides");
    console.log(imgs);
    if(imgs.length > 0){
      for (i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none";
      }
      slideIndexMarlin++;
      if (slideIndexMarlin > imgs.length) {slideIndexMarlin  = 1}
      imgs[slideIndexMarlin-1].style.display = "block";
      setTimeout(SlideMarlin, 5000); 
    }
}
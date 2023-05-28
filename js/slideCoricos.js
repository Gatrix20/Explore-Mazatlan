let slideIndexCoricos = 0;

SlideCoricos();

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

function SlideCoricos() {
    let i;
    let slides = document.getElementById("coricos");
    imgs = slides.getElementsByClassName("mySlides");
    console.log(imgs);
    if(imgs.length > 0){
      for (i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none";
      }
      slideIndexCoricos++;
      if (slideIndexCoricos > imgs.length) {slideIndexCoricos  = 1}
      imgs[slideIndexCoricos-1].style.display = "block";
      setTimeout(SlideCoricos, 5000); 
    }
}
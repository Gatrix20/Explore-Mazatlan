let slideIndexCeviche = 0;

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
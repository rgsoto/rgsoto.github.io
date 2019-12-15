 // Activates image Gallery
 // The main task is to attach an event listener to each image in th Gallery
 // and respond appropirately on click

function activateGallery() {
  let thumbnails = document.querySelector("#gallery-thumbs").
                                            querySelectorAll("img");
  let mainImage = document.querySelector("#gallery-photo img");

  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function(){
      //set clicked image as main image.
      let newImageSrc = thumbnail.dataset.largeVersion;
      mainImage.setAttribute("src", newImageSrc);
    });
  });                                        
}

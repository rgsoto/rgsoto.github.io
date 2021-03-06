 // Activates image Gallery
 // The main task is to attach an event listener to each image in th Gallery
 // and respond appropirately on click
function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img ");
  let mainImage = document.querySelector("#gallery-photo img");

  let currentClass = "current";

  thumbnails.forEach(function(thumbnail) {
    // Preload large images.
    let newImageSrc = thumbnail.dataset.largeVersion;
    let largeVersion = new Image();
    largeVersion = newImageSrc;
    thumbnail.addEventListener("click", function(){
      //set clicked image as main image.
      let newImageSrc = thumbnail.dataset.largeVersion;
      let altImageSrc = thumbnail.dataset.title;
      mainImage.setAttribute("src", newImageSrc);
      mainImage.setAttribute("alt", altImageSrc);

      // Change which image is current.
      document.querySelector(".current").classList.remove(currentClass);
      thumbnail.parentNode.classList.add(currentClass);

      // Update image info.
      let galleryInfo = document.querySelector("#gallery-info");
      let title       = galleryInfo.querySelector(".title");
      let description = galleryInfo.querySelector(".description");
      title.innerHTML       = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;
    });
  });
}

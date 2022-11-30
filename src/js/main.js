const mainImage = document.getElementById("main-image");
const images = document.querySelectorAll(".product__image");

images.forEach((image) => {
    image.addEventListener("click", (event) => {
        mainImage.src = event.target.src;

        document
            .querySelector(".product__image--active")
            .classList.remove("product__image--active");

        event.target.classList.add("product__image--active");
        fadeIn(document.getElementById('main-image'), 1000);
    });
});

function fadeIn(element, duration = 600) {
    element.style.display = '';
    element.style.opacity = 0;
    var last = +new Date();
    var tick = function() {
      element.style.opacity = +element.style.opacity + (new Date() - last) / duration;
      last = +new Date();
      if (+element.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
    };
    tick();
  }
  

console.log("Pulsar app connected!");
//navburger menu below
document.addEventListener('DOMContentLoaded', function () {
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {
          // Get the target from the "data-target" attribute
          var target = $el.dataset.target;
          var $target = document.getElementById(target); 
          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
          });
      });
    }
});

//slideshow code below
var i = 0;
var images = [
    "./img/servers2.jpg",
    "./img/servers.jpg",
    "./img/router.jpg", 
    "./img/code.jpg",
    "./img/control-room.jpg",
    "./img/desktop2.jpg",
    "./img/security.jpg",
    "./img/code.jpg",
    "./img/network-testing.jpg",
    "./img/firewall.jpg",
    "./img/network.jpg"
];
//function to change images
function changeImg(){
    document.slide.src = images[i];
    if(i < images.length -1){
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImg()", 3000);
};



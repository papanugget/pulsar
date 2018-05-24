//modal functionality
var webModal = document.querySelectorAll(".modalLink");
// console.log(webModal);
if(webModal.length > 0) {
    webModal.forEach(function(element){
        element.addEventListener("click", openModal);
    });
}

var closeBtn = document.querySelector(".delete").addEventListener("click", closeModal);
var modal = document.querySelector(".modal");
var modalBg = document.querySelector(".modal-background").addEventListener("click", closeModal);

function openModal(){
    modal.classList.add("is-active", "fadeIn");
};
function closeModal(){
    modal.classList.remove("is-active", "fadeIn");
};
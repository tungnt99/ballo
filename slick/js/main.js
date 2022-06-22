const navbar_icon = document.querySelector('.navbar_icon');
const open_navbar = document.querySelector('.open-navbar');
const close_navbar = document.querySelector('.close-navbar');

function toggleModal() {
    navbar_icon.classList.toggle('hide');
}
open_navbar.addEventListener('click', toggleModal);
close_navbar.addEventListener('click', toggleModal);
navbar_icon.addEventListener("click", (e) => {
    if (e.target == e.currentTarget) {
        toggleModal();
    }
})
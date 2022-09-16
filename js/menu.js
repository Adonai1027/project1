/* const hamburguer = document.querySelector(".hamburger");
const menu = document.querySelector(".menu-navegacion");

console.log(menu);
console.log(hamburguer);

hamburguer.addEventListener("click", () => {
  menu.classList.toggle("spread");
});

window.addEventListener("click", (e) => {
  if (menu.classList.contains("spread") && e.target != menu && e.target != hamburguer){
    menu.classList.toggle("spread");
  }
});


const hamburgerMenu = document.getElementById("hamburger-icon");
const link = document.querySelectorAll(".link");
const closeBtn = document.getElementById("close");

/* ANIMACIÓN HOVER /
for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}

// Menu
hamburgerMenu.addEventListener("click", function() {
  const sidebar = document.getElementById("sidebars");
  sidebar.classList.toggle("sidebar_visible"); /*saqué el toggle - FUNCIONALIDAD MENU HAMBURGER /
});

//   close icon
function closeNav() {
  const sidebar = document.getElementById("sidebars");
  sidebar.classList.toggle("sidebar_visible");
}

const toggleDropdown;

toggleDropdown (e) => {
  const _d = $(e.target).closest('.dropdown'),
    _m = $('.dropdown-menu', _d);
  setTimeout(function(){
    const shouldOpen = e.type !== 'click' && _d.is(':hover');
    _m.toggleClass('show', shouldOpen);
    _d.toggleClass('show', shouldOpen);
    $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
  }, e.type === 'mouseleave' ? 300 : 0);
} */

$('body')
  .on('mouseenter mouseleave','.dropdown',toggleDropdown)
  .on('click', '.dropdown-menu a', toggleDropdown);

const toggle = document.querySelector(".navbar-toggle");
const menu = document.querySelector(".navbar-menu");
const overlay = document.querySelector(".overlay");
const links = document.querySelectorAll(".navbar-menu a");
const dropdowns = document.querySelectorAll(".dropdown > a");


toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
});


overlay.addEventListener("click", () => {
  closeMenu();
});


links.forEach(link => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});


dropdowns.forEach(item => {
  item.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      item.parentElement.classList.toggle("active");
    }
  });
});


function closeMenu() {
  toggle.classList.remove("active");
  menu.classList.remove("active");
  overlay.classList.remove("active");
}


const display = document.getElementById("fees_display");
const hidden = document.getElementById("fees");

display.addEventListener("input", function () {
    let value = display.value.replace(/[^0-9]/g, "");

    if (value) {
        hidden.value = value; // clean value for email/backend
        display.value = "UGX " + parseInt(value).toLocaleString();
    } else {
        hidden.value = "";
        display.value = "";
    }
});

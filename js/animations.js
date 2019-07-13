/* nav extending */

window.addEventListener('scroll', function () {
    var nav = document.getElementById('navi');
    if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
            nav.classList.add('navigation-scroll');
            nav.classList.remove('navigation');
        } else {
            nav.classList.add('navigation');
            nav.classList.remove('navigation-scroll');
        }
});

/* smooth scroll */

const navbarLinks = document.querySelectorAll(".navigation a", ".navigation-scroll a");
const navbarMenu = document.querySelector(".navigation ul");

navbarLinks.forEach(e => e.addEventListener("click", navbarLinkClick))
function navbarLinkClick(event) {
    smoothScroll(event);
    if(navbarMenu.classList.contains("open")) {
        navbarToggler.click();
    }
}

function smoothScroll(event) {
    const targetId = event.currentTarget.getAttribute("href");
}

/* aos */

AOS.init({
    duration: 1000,
  })

/* Lightbox */

/* HAMBURGER BUTTON */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


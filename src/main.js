function header() {
  return {
    navItems: document.getElementById("nav-items"),
    hamburgerMenu: document.getElementById("hamburger-menu"),
  };
}

setTimeout(() => {
  header().hamburgerMenu.addEventListener("click", function (event) {
    [...this.children].forEach(element => {
      element.classList.toggle("hidden")
    });
    this.nextElementSibling.classList.toggle("scale-y-100");
  });
  console.log(header());
}, 1000);

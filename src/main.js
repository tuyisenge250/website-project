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
    this.nextElementSibling.classList.toggle("hidden");
    this.nextElementSibling.classList.toggle("flex");
  });
  console.log(header());
}, 1000);

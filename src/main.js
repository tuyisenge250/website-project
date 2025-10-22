function header() {
  return {
    navItems: document.getElementById("nav-items"),
    hamburgerMenu: document.getElementById("hamburger-menu"),
  };
}

setTimeout(() => {
  header().hamburgerMenu.addEventListener("click", function (event) {
    [...this.children].forEach((element) => {
      element.classList.toggle("hidden");
    });
    this.nextElementSibling.classList.toggle("hidden");
    this.nextElementSibling.classList.toggle("flex");
  });
}, 1000);

function createNavList(array) {
  return array.map((navItem) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.setAttribute("href", `#${navItem.toLowerCase()}`)
    link.textContent = navItem;
    listItem.append(link);
    return listItem;
  });
}

function createLanguageList(array) {
  return array.map((language) => {
    const listItem = document.createElement("li");
    listItem.textContent = language;
    return listItem;
  });
}

setTimeout(() => {
  const languagesList = document.getElementById("languages");
  const listItems = document.getElementById("nav-items");
  languagesList.append(...createLanguageList(["DE", "EN"]));
  listItems.append(
    ...createNavList(["About", "Services", "References", "Contact"])
  );
}, 1000);

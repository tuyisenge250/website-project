function header() {
  return {
    navItems: document.getElementById("nav-items"),
    hamburgerMenu: document.getElementById("hamburger-menu"),
  };
}

function createNavList(array) {
  return array.map((navItem) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.setAttribute("href", navItem.link);
    link.textContent = navItem.text;
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

function menu() {
  header().hamburgerMenu.addEventListener("click", function () {
    this.children[1].classList.toggle("hidden");
    this.children[2].classList.toggle("hidden");

    this.nextElementSibling.classList.toggle("hidden");
    this.nextElementSibling.classList.toggle("flex");
  });
}

function navList() {
  const languagesList = document.getElementById("languages");
  const listItems = document.getElementById("nav-items");
  languagesList.append(...createLanguageList(["DE", "EN"]));
  listItems.append(
    ...createNavList([
      { text: "About", link: "#about" },
      { text: "Services", link: "#service" },
      { text: "References", link: "reference.html" },
      { text: "Contact", link: "contact.html" },
    ])
  );
}

function checkPage() {
  if (location.href !== "http://localhost:5173/") {
    document.getElementById("header").classList.add("text-green");
    header()["hamburgerMenu"].firstElementChild.firstElementChild.setAttribute(
      "class",
      "fill-green"
    );
  }
}

setTimeout(() => {
  menu(), navList(), checkPage();
}, 1000);

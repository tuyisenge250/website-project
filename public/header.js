function header() {
  return {
    navItems: document.getElementById("nav-items"),
    hamburgerMenu: document.getElementById("hamburger-menu"),
  };
}


function linksNavigation() {
  for (const element of [...header()["navItems"].children].map(
    (el) => el.firstElementChild
  )) {
    element.addEventListener("click", (event) => {
      event.preventDefault();

      if (element.href.includes("#") && location.href.includes(".html"))
        location.href = `/${element.getAttribute("href")}`;
      location.href = element.href;
    });
  }
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
      { text: "References", link: "#reference" },
      { text: "Contact", link: "contact-page.html" },
    ])
  );
}

function checkPage() {
  if (location.pathname.includes(".html")) {
    document.getElementById("header").classList.add("text-green");
    header()["navItems"].classList.add("lg:text-green");
    header()["hamburgerMenu"].firstElementChild.firstElementChild.setAttribute(
      "class",
      "fill-green"
    );
  }
}

setTimeout(() => {
  menu(), navList(), checkPage(), linksNavigation()
}, 1000);

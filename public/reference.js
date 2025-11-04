function referenceInit() {
  const references = [
    { name: "Ace Hotel", url: "https://acehotel.com/" },
    { name: "ARMEDANGELS", url: "https://www.armedangels.com/de-de" },
    { name: "BERLIN DESIGN WEEK", url: "https://berlindesignweek.com/" },
    { name: "Berliner Berg", url: "https://berlinerberg.com/" },
    { name: "BiTE CLUB", url: "https://budweiserbudvar.com/de/#" },
    { name: "Budweiser Budvar", url: "https://www.armedangels.com/de-de" },
    { name: "ChungKing Noodles", url: "https://www.armedangels.com/de-de" },
    { name: "Designpreis Brandenburg", url: "https://www.armedangels.com/de-de" },
    { name: "Die techniker", url: "https://www.armedangels.com/de-de" },
    { name: "European Street Awards", url: "https://www.armedangels.com/de-de" },
    { name: "Grundman dentistry", url: "https://www.armedangels.com/de-de" },
    { name: "HORNBACH Werstuck", url: "https://www.armedangels.com/de-de" },
    { name: "HORNABACH macht Schule", url: "https://www.armedangels.com/de-de" },
    { name: "IF Design", url: "https://www.armedangels.com/de-de" },
    { name: "Kopka", url: "https://www.armedangels.com/de-de" },
    { name: "KLH Mabschuhe", url: "https://www.armedangels.com/de-de" },
    { name: "Lode & Stijn", url: "https://www.armedangels.com/de-de" },
    { name: "Luya", url: "https://www.armedangels.com/de-de" },
    { name: "MEISSEN", url: "https://www.armedangels.com/de-de" },
    { name: "Motel Beer & Coffee", url: "https://www.armedangels.com/de-de" },
    { name: "PAPER & TEA", url: "https://www.armedangels.com/de-de" },
    { name: "rocket & basil", url: "https://www.armedangels.com/de-de" },
    { name: "Seeberger Gruppe", url: "https://www.armedangels.com/de-de" },
    { name: "Shiori", url: "https://www.armedangels.com/de-de" },
    { name: "SPOC Magazin", url: "https://www.armedangels.com/de-de" },
    { name: "stocubo", url: "https://www.armedangels.com/de-de" },
    { name: "STUR", url: "https://www.armedangels.com/de-de" },
    { name: "World of Coffee", url: "https://www.armedangels.com/de-de" },
    { name: "yamo", url: "https://www.armedangels.com/de-de" }
  ];

  const listRoot = document.getElementById('reference-list');
  references.forEach(ref => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = ref.url;
    a.textContent = ref.name;
    li.appendChild(a);
    listRoot.appendChild(li);
  });
}

const waitForReference = setInterval(() => {
  if (document.getElementById('reference-list')) {
    clearInterval(waitForReference);
    referenceInit();
  }
});
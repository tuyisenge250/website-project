const waitForFooter = setInterval(() => {
  if (
    document.querySelector('#footer-location') &&
    document.querySelector('#footer-contact') &&
    document.querySelector('#footer-social-media')
  ) {
    clearInterval(waitForFooter);
    footerLocation();
  }
}); 

function footerLocation() {
  const text = ["Agentur Baumeister", "Böckhstraße 13", "10967 Berlin"];
  const footerLocationElement = document.querySelector('#footer-location');
  if (footerLocationElement) {
    footerLocationElement.innerHTML = text.map(line => `<p>${line}</p>`).join('');
  }

  const textContact = ["hallo@agentur-baumeister.com", "+49 (0)30 - 490 827 87"];
  const footerContactElement = document.querySelector('#footer-contact');
  if (footerContactElement) {
    footerContactElement.innerHTML = textContact.map(line => `<p>${line}</p>`).join('');
  }

  const textSocial = ["LinkedIn", "Instagram"];
  const footerSocialElement = document.querySelector('#footer-social-media');
  if (footerSocialElement) {
    footerSocialElement.innerHTML = textSocial.map(line => `<p>${line}</p>`).join('');
  }

  const textLegal = ["Datenschutz", "Impressum"];
  footerSocialElement.innerHTML += `
    <div class="flex flex-wrap justify-between w-[50%] md:w-[40%] lg:flex-col gap-0 lg:w-[15%] lg:justify-start" id="footer-legal">
      ${textLegal.map(line => `<p>${line}</p>`).join('')}
    </div>`;
}

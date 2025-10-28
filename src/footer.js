function footerLocation(){
    const text = ["Agentur Baumeister", "Böckhstraße 13", "10967 Berlin"]
    const footerLocationElement = document.querySelector('#footer-location');
    if (footerLocationElement) {
        footerLocationElement.innerHTML = text.map(line => `<p>${line}</p>`).join('');
    }
    const footerContactElement = document.querySelector('#footer-contact');
    const textContact = ["hallo@agentur-baumeister.com", "+49 (0)30 - 490 827 87"]
    if (footerContactElement) {
        footerContactElement.innerHTML = textContact.map(line => `<p>${line}</p>`).join('');
    }
    const footerSocialElement = document.querySelector('#footer-social-media');
    const textSocial = ["LinkedIn", "Instagram"]
    if (footerSocialElement) {
        footerSocialElement.innerHTML = textSocial.map(line => `<p>${line}</p>`).join('');
    }
    const textLegal = ["Datenschutz", "Impressum"]
 
    footerSocialElement.innerHTML += `<div class="flex flex-wrap justify-between w-[50%] md:w-[40%] lg:flex-col gap-0 lg:w-[15%] lg:justify-start" id="footer-legal">${textLegal.map(line => `<p>${line}</p>`).join('')}</div>`


}

setTimeout(() => {
    footerLocation();
}, 1000);
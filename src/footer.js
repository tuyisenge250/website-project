function footerLocation(){
    const text = ["Agentur Baumeister", "Böckhstraße 13", "10967 Berlin"]
    const footerLocationElement = document.querySelector('#footer-location');
    if (footerLocationElement) {
        footerLocationElement.innerHTML = text.map(line => `<p>${line}</p>`).join('');
    }
}

setTimeout(() => {
    footerLocation();
}, 1000);
function Contactpage() {
    const profile = ["IMPRINT", "Agentur Baumeister", "Katrein Baumeister", "Hauptstraße 123", "10967 Berlin"];
    const contacts = [{ type: "Telefon", value: "++49 (0)30 - 490 827 87" }, { type: "E-Mail", value: "hallo@agentur-baumeister.com" }];
    const address = ["UST-IDNR.", "DE 274 486 923"];
    const offices = ["REGISTERED OFFICE", "Berlin, Deutschland"];
    const DisclaimerHeading = "DISCLAIMER";
    const DisclaimerText = `Despite all due care, no liability can be accepted for the accuracy, completeness and up
                to-dateness of
                the information provided. The same applies to third-party websites to which
                www.agentur-baumeister.com
                refers by means of hyperlinks. Katrein Baumeister, Agentur Baumeister accepts no liability for the
                content
                of these websites.`
    let profileSection = document.querySelector('#Profile-Info');
    if (profileSection) {
        profileSection.innerHTML = `<h1 class="font-semibold text-2xl py-4">${profile[0]}</h1>
        <h1 class="font-bold">${profile[1]}</h1>
        <p>${profile[2]}</p>
        <p>${profile[3]}</p>
        <p>${profile[4]}</p> `
        console.log('Profile section updated');
    }
    let contactsSection = document.querySelector('#Contact-info .py-6:nth-child(2)');
    if (contactsSection) {
        contactsSection.innerHTML = contacts.map(contact => `<p>${contact.value}</p>`).join('');
        console.log('Contacts section updated');
    }
    let addressSection = document.querySelector('#Contact-info .py-6:nth-child(3)');
    if (addressSection) {
        addressSection.innerHTML = `<h1 class="font-bold">${address[0]}</h1>
        <p>${address[1]}</p>`;
        console.log('Address section updated');
    }
    let officeSection = document.querySelector('#Contact-info .py-6:nth-child(4)');
    if (officeSection) {
        officeSection.innerHTML = `<h1 class="font-bold">${offices[0]}</h1>
        <p>${offices[1]}</p>`;
        console.log('Office section updated');
    }
    let disclaimerSection = document.querySelector('#Disclaimer');
    if (disclaimerSection) {
        disclaimerSection.innerHTML = `<h1 class="font-bold py-6">${DisclaimerHeading}</h1>
        <article>${DisclaimerText}</article>`;
        console.log('Disclaimer section updated');
    }
}
setTimeout(() => {
    Contactpage();
}, 100);
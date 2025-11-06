import { contactData } from "./data/contactData.js";

export function ContactPage() {
    const renderSection = (selector, html) => {
        const element = document.querySelector(selector);
        if (element) element.innerHTML = html;
    };

    const d = contactData; 

    renderSection('#Profile-Info', `
        <h1 class="font-semibold py-4">${d.profile.title}</h1>
        <h1 class="font-bold">${d.profile.agency}</h1>
        <p>${d.profile.name}</p>
        <p>${d.profile.street}</p>
        <p>${d.profile.city}</p>
    `);

    renderSection('#Contact-info .py-6:nth-child(2)', `
        ${d.contacts.map(c => `<p>${c.value}</p>`).join('')}
    `);

    renderSection('#Contact-info .py-6:nth-child(3)', `
        <h1 class="font-bold">${d.address.label}</h1>
        <p>${d.address.value}</p>
    `);

    renderSection('#Contact-info .py-6:nth-child(4)', `
        <h1 class="font-bold">${d.office.label}</h1>
        <p class="pb-4 md:pb-0">${d.office.value}</p>
    `);

    renderSection('#Disclaimer', `
        <h1 class="font-bold sm:text-2xl md:text-xl lg:text-3xl py-6 md:pt-0">${d.disclaimer.heading}</h1>
        <article>${d.disclaimer.text}</article>
    `);
}


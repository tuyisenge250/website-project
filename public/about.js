function aboutInit() {
  const aboutData = {
    description: "We are a Berlin-based communications agency specialising in helping companies and brands find their voice and position themselves. Whether it's brand building, identity sharpening, or communication strategy, we bring a fresh perspective to established structures, develop tailor-made communication solutions, and ensure that messages resonate. With over a decade of experience, we have honed our skills in giving brands their unmistakable identity and making them visible in the long term.",
    image: "./assets/images/Vector 6.png"
  };

  const descRoot = document.getElementById('about-description');
  const imgRoot = document.getElementById('about-image');
  
  if (!descRoot || !imgRoot) {
    console.error('Check IDs in about.html: #about-description and #about-image must exist.');
    return;
  }

  descRoot.textContent = aboutData.description;
  imgRoot.src = aboutData.image;
}

const waitForAbout = setInterval(() => {
  if (document.getElementById('about-description') && document.getElementById('about-image')) {
    clearInterval(waitForAbout);
    aboutInit();
  }
}, 50);
/* 
Last updated: 14.12.2024 
Author: Yannis Maxitas Moula
Purpose: Portfolio Website
*/

let interval;

/* Toggles the menu */
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");

  if (icon.classList.contains("open")) {
    icon.setAttribute("aria-expanded", "true");
  } else {
    icon.setAttribute("aria-expanded", "false");
  }
}

/* This code handles the dynamic text effect on the homepage */
document.addEventListener("DOMContentLoaded", () => {
  const dynamicText = document.getElementById("dynamic-text");
  const words = ["Student", "Football Player"];
  let index = 0;

  function getRandomChar(word) {
    return word.charAt(Math.floor(Math.random() * word.length));
  }

  function scribbleEffect(word) {
    let scribbleCount = 0;
    const maxScribbleCount = 10; 
    const scribbleInterval = setInterval(() => {
      if (scribbleCount < maxScribbleCount) {
        let scribbleText = "";
        for (let i = 0; i < word.length; i++) {
          scribbleText += getRandomChar(word);
        }
        dynamicText.textContent = scribbleText;
        scribbleCount++;
      } else {
        clearInterval(scribbleInterval);
        dynamicText.textContent = word;
      }
    }, 75);
  }

  function updateText() {
    const word = words[index];
    scribbleEffect(word);
    index = (index + 1) % words.length;
  }

  interval = setInterval(updateText, 3500);
  updateText();

  // This stores the translations for the website, quile long code
   // but all the text I want to translate is stored here
  const translations = {
    en: {
      dynamicText: ["Student", "Football Player"],
      welcomeText: "Welcome, I'm",
      about: "About Me",
      contact: "Contact",
      menu: ["About", "Technical skills", "Projects", "Contact"],
      pTags: {
        welcomeText: "Welcome, I'm",
        dynamicText: "Student",
        aboutText: "My name is Yannis Maxitas Moula. I am a student at the University of Bergen. " +
           "Currently, I am studying Information Science. I am also a professional football " +
           "player with over 6 years of experience. I am passionate about technology and " +
           "looking forward to a career in the tech industry.",
        experience: "6+ years <br /> Professional Football Player",
        education: "Bachelors Degree<br />Information Science",
      },
      headers: {
        about: "About Me",
        experience: "Technical Skills",
        projects: "Projects",
        contact: "Contact Me",
      },
      h3Tags: {
        experience: "Experience",
        education: "Education",
      },
      footer: {
        nav: ["About", "Technical skills", "Projects", "Contact"],
        copyright: "Yannis Maxitas Moula 2024",
      },
    },
    no: {
      dynamicText: ["Student", "Fotballspiller"],
      welcomeText: "Velkommen, jeg er",
      about: "Om meg",
      contact: "Kontakt",
      menu: ["Om", "Tekniske Ferdigheter", "Prosjekter", "Kontakt"],
      pTags: {
        welcomeText: "Velkommen, jeg er",
        dynamicText: "Student",
        aboutText: "Jeg heter Yannis Maxitas Moula. Jeg er student ved Universitetet i Bergen. " +
           "For øyeblikket studerer jeg informasjonsvitenskap. Jeg er også en profesjonell " +
           "fotballspiller med over 6 års erfaring. Jeg er lidenskapelig opptatt av teknologi " +
           "og ser frem til en karriere i tech-bransjen.",
        experience: "6+ år <br /> Profesjonell fotballspiller",
        education: "Bachelorgrad<br />Informasjonsvitenskap",
      },
      headers: {
        about: "Om Meg",
        experience: "Tekniske Ferdigheter",
        projects: "Prosjekter",
        contact: "Kontakt Meg",
      },
      h3Tags: {
        experience: "Erfaring",
        education: "Utdanning",
      },
      footer: {
        nav: ["Om", "Tekniske Ferdigheter", "Prosjekter", "Kontakt"],
        copyright: "Yannis Maxitas Moula 2024",
      },
    },
  };

  // Swicth language by clicking on the flags
  const flags = document.querySelectorAll("#language-switcher .flag");
  let currentLang = "en";

  flags.forEach((flag) => {
    flag.addEventListener("click", () => {
      const selectedLang = flag.id;
      if (selectedLang !== currentLang) {
        currentLang = selectedLang;
        updateLanguage(selectedLang);
      }
    });
  });

  function updateLanguage(lang) {
    const dynamicText = document.getElementById("dynamic-text");
    const words = translations[lang].dynamicText;

    dynamicText.textContent = "";
    clearInterval(interval);
    let index = 0;

    function updateText() {
      const word = words[index];
      scribbleEffect(word);
      index = (index + 1) % words.length;
    }

    interval = setInterval(updateText, 3500);
    updateText();

    // Update welcome text
    const welcomeText = document.getElementById("welcome-text");
    if (welcomeText) {
      welcomeText.textContent = translations[lang].pTags.welcomeText;
    }

    // Update about heading
    const aboutHeading = document.getElementById("about-heading");
    if (aboutHeading) {
      aboutHeading.textContent = translations[lang].headers.about;
    }

    // Update about text
    const aboutTextBox = document.querySelector(".about-text-box p");
    if (aboutTextBox) {
      aboutTextBox.innerHTML = translations[lang].pTags.aboutText;
    }

    // Update experience and education
    const detailsContainers = document.querySelectorAll(".details-container");
    if (detailsContainers.length > 0) {
      detailsContainers[0].querySelector("p").innerHTML =
        translations[lang].pTags.experience;
      detailsContainers[1].querySelector("p").innerHTML =
        translations[lang].pTags.education;
    }

    // Update experience and education headings
    const h3Tags = document.querySelectorAll(".details-container h3");
    if (h3Tags.length > 0) {
      h3Tags[0].textContent = translations[lang].h3Tags.experience;
      h3Tags[1].textContent = translations[lang].h3Tags.education;
    }

    // Update Menu items
    const menuItems = document.querySelectorAll(".nav-links li a");
    translations[lang].menu.forEach((text, i) => {
      if (menuItems[i]) {
        menuItems[i].textContent = text;
      }
    });

    // Update footer items
    const footerLinks = document.querySelectorAll("footer .nav-links a");
    translations[lang].footer.nav.forEach((text, i) => {
      if (footerLinks[i]) {
        footerLinks[i].textContent = text;
      }
    });

    // Update footer
    const footerCopyright = document.querySelector("footer p");
    if (footerCopyright) {
      footerCopyright.textContent = translations[lang].footer.copyright;
    }

    // Update section headings
    const sectionHeadings = {
      experience: document.querySelector("#experience h1.title"),
      projects: document.querySelector("#projects h1.title"),
      contact: document.querySelector("#contact h1.title"),
    };

    Object.keys(sectionHeadings).forEach((key) => {
      if (sectionHeadings[key]) {
        sectionHeadings[key].textContent = translations[lang].headers[key];
      }
    });
  }
});

/* 
  CUSTOM CURSOR
*/
const cursor = document.createElement("div");
cursor.id = "custom-cursor";
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  const { clientX: x, clientY: y } = e;
  cursor.style.transform = `translate(${x}px, ${y}px)`;
});

const clickableElements = document.querySelectorAll("a, button, .btn");
clickableElements.forEach((el) => {
  el.addEventListener("mouseover", () => {
    cursor.style.width = "30px";
    cursor.style.height = "30px";
    cursor.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    cursor.style.border = "2px solid black";
  });

  el.addEventListener("mouseleave", () => {
    cursor.style.width = "20px";
    cursor.style.height = "20px";
    cursor.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    cursor.style.border = "2px solid white";
  });
});

document.body.style.cursor = "none";

/* 
  MAGNIFYING GLASS
*/
const magnifier = document.createElement("div");
magnifier.classList.add("magnifier");
document.body.appendChild(magnifier);

const zoomFactor = 1.3;
const magnifyImages = document.querySelectorAll("[data-magnify]");

magnifyImages.forEach((image) => {
  image.addEventListener("mouseenter", () => {
    const imgRect = image.getBoundingClientRect();
    magnifier.style.transform = "scale(1)";
    magnifier.style.backgroundImage = `url(${image.src})`;
    magnifier.style.backgroundSize = `${image.width * zoomFactor}px ${image.height * zoomFactor}px`;
    magnifier.dataset.imgRect = JSON.stringify(imgRect);
  });

  image.addEventListener("mousemove", (e) => {
    const imgRect = JSON.parse(magnifier.dataset.imgRect);
    const magnifierSize = 100;

    const mouseX = e.clientX - imgRect.left;
    const mouseY = e.clientY - imgRect.top;

    magnifier.style.left = `${e.pageX - magnifierSize / 2}px`;
    magnifier.style.top = `${e.pageY - magnifierSize / 2}px`;

    magnifier.style.backgroundPosition = `-${
      mouseX * zoomFactor - magnifierSize / 2
    }px -${mouseY * zoomFactor - magnifierSize / 2}px`;
  });

  image.addEventListener("mouseleave", () => {
    magnifier.style.transform = "scale(0)";
  });
});

/* 
  DARK MODE 
*/
const darkModeToggle = document.getElementById("dark-mode-toggle");
const isDarkMode = localStorage.getItem("dark-mode") === "true";
if (isDarkMode) {
  document.body.classList.add("dark-mode");
  darkModeToggle.checked = true;
}

darkModeToggle.addEventListener("change", () => {
  if (darkModeToggle.checked) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "true");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "false");
  }
});

/* 
  Flick between projects by clicking left/right arrows.
*/
const carouselTrack = document.querySelector("#projects .carousel-track");
const slides = carouselTrack ? carouselTrack.querySelectorAll(".color-container") : [];
const prevButton = document.querySelector("#projects .carousel-arrow.left");
const nextButton = document.querySelector("#projects .carousel-arrow.right");

let currentSlide = 0;
function updateCarousel() {
  const slideWidth = slides[0].offsetWidth; 
  carouselTrack.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
}

if (prevButton && nextButton && slides.length > 0) {
  prevButton.addEventListener("click", () => {
    currentSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    updateCarousel();
  });

  nextButton.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
  });
}
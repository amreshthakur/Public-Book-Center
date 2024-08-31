// ============================ Service Starting Tags =========================================
const servicesData = [
  {
    icon: "images/Books.webp",
    title: "Collage Books Customize",
    content:
      "Books based on teacher instructions, suit different job placements and experiences.",
  },

  {
    icon: "images/notes.webp",
    title: "Programming Books",
    content:
      "Programming Books Provides based on the trending Technlogy related with our support.",
  },

  {
    icon: "images/job.png",
    title: "Job placement and Support",
    content:
      "Optimize your career with our job placement service to company, with support.",
  },

  {
    icon: "images/Collage-support.png",
    title: "Collabaration Supports",
    content: "Innovative solutions, problem-solving, tech and interdisciplinary methods, societal advancement.",
  },
];


const servicesContainer = document.querySelector(".services-container");

// Display services

const displayServices = () => {
  servicesData.forEach((s) => {
    const HTML = `<div data-aos="flip-left" class="icon">
        <img src="${s.icon}" alt="" />
      </div>

      <div data-aos="fade-in" class="service-content">
        <h3>${s.title}</h3>
        <p>
          ${s.content}
        </p>
      </div>`;

    const service = document.createElement("div");
    service.classList.add("service");
    service.innerHTML = HTML;
    servicesContainer.appendChild(service);
  });
};

displayServices();



// Animation for navbar

window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");

  if (window.scrollY > 20) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});



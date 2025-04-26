const imageContainer = document.querySelector(".logo-container");
const image = imageContainer.querySelector("img");
const resumeButton = document.querySelector(".resume");
const contentPages = document.querySelectorAll(
  ".content-one, .content-two, .content-three, .content-four"
);
const closeButtons = document.querySelectorAll(".close-btn");

imageContainer.addEventListener("mousemove", (e) => {
  const { left, top, width, height } = imageContainer.getBoundingClientRect();
  const x = ((e.clientX - left) / width - 0.5) * 20;
  const y = ((e.clientY - top) / height - 0.5) * 20;

  image.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
});

imageContainer.addEventListener("mouseleave", () => {
  image.style.transform = "rotateX(0) rotateY(0)";
});

var typed = new Typed(".auto-type", {
  strings: ["beautiful", "responsive", "user-friendly"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
});

function showPage(id) {
  const page = document.getElementById(id);
  page.style.display = "flex";
  setTimeout(() => {
    page.classList.add("active");
  }, 10);
}

function closePage(id) {
  const page = document.getElementById(id);
  page.classList.remove("active");
  setTimeout(() => {
    page.style.display = "none";
  }, 500);
}

document
  .querySelector(".button-one")
  .addEventListener("click", () => showPage("animatedPage-one"));
document
  .querySelector(".button-two")
  .addEventListener("click", () => showPage("animatedPage-two"));
document
  .querySelector(".button-three")
  .addEventListener("click", () => showPage("animatedPage-three"));
document
  .querySelector(".button-four")
  .addEventListener("click", () => showPage("animatedPage-four"));

document
  .querySelector("#animatedPage-one .close-btn")
  .addEventListener("click", () => closePage("animatedPage-one"));
document
  .querySelector("#animatedPage-two .close-btn")
  .addEventListener("click", () => closePage("animatedPage-two"));
document
  .querySelector("#animatedPage-three .close-btn")
  .addEventListener("click", () => closePage("animatedPage-three"));
document
  .querySelector("#animatedPage-four .close-btn")
  .addEventListener("click", () => closePage("animatedPage-four"));

(function () {
  emailjs.init("4MNwiebdeUg-k7s-k");
})();

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send("service_dh7vzzn", "template_dg9j9ym", templateParams).then(
      function (response) {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset();
      },
      function (error) {
        alert("Failed to send message. Please try again.");
        console.log("Error:", error);
      }
    );
  });

function updateClock() {
  const now = new Date();
  const clock = document.getElementById("real-time-clock");
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const year = now.getFullYear();

  clock.innerHTML = `
        <div class="time">${hours}:${minutes} PM</div>
        <div class="date">${day}/${month}/${year}</div>
    `;
}

setInterval(updateClock, 1000);
updateClock();

function hideResumeButton() {
  resumeButton.style.opacity = "0";
  resumeButton.style.visibility = "hidden";
}

function showResumeButton() {
  resumeButton.style.opacity = "1";
  resumeButton.style.visibility = "visible";
}

document
  .querySelector(".button-one")
  .addEventListener("click", hideResumeButton);
document
  .querySelector(".button-two")
  .addEventListener("click", hideResumeButton);
document
  .querySelector(".button-three")
  .addEventListener("click", hideResumeButton);
document
  .querySelector(".button-four")
  .addEventListener("click", hideResumeButton);

document
  .querySelector("#animatedPage-one .close-btn")
  .addEventListener("click", showResumeButton);
document
  .querySelector("#animatedPage-two .close-btn")
  .addEventListener("click", showResumeButton);
document
  .querySelector("#animatedPage-three .close-btn")
  .addEventListener("click", showResumeButton);
document
  .querySelector("#animatedPage-four .close-btn")
  .addEventListener("click", showResumeButton);

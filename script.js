"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const openPopupBtn = document.getElementById("openPopup");
  const closePopup = document.getElementById("closePopup");

  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  const switchToRegister = document.getElementById("switchToRegister");
  const switchToLogin = document.getElementById("switchToLogin");

  // Open the Popup
  openPopupBtn.addEventListener("click", () => {
    popup.style.display = "flex";
    loginForm.classList.add("active-form");
    registerForm.classList.remove("active-form");
  });

  // Closing Popup
  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // switch to register form
  switchToRegister.addEventListener("click", (e) => {
    e.preventDefault();
    registerForm.classList.add("active-form");
    loginForm.classList.remove("active-form");
  });

  // switch to login form
  switchToLogin.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.add("active-form");
    registerForm.classList.remove("active-form");
  });

  // Closing popup to click on out
  window.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});
// js codes for testimonial
document.addEventListener("DOMContentLoaded", function () {
  const testimonials = [
    {
      name: "Albert Monica",
      title: "Student at College",
      rating: "⭐⭐⭐⭐⭐",
      text: "As a student of this online education website, I can confidently say that it has been an incredible experience. The platform is user-friendly and the courses are well-structured, making it easy for me to learn at my own pace.",
      img: "images/person1.jpg",
    },
    {
      name: "Sophia Liam",
      title: "Graduate",
      rating: "⭐⭐⭐⭐⭐",
      text: "The teachers are amazing and the course structure is very engaging. I learned so much and it helped me advance my career.",
      img: "images/person2.jpg",
    },
    {
      name: "Michael Carter",
      title: "Online Learner",
      rating: "⭐⭐⭐⭐⭐",
      text: "Great experience! The flexibility and the variety of courses made learning very convenient for me.",
      img: "images/person3.jpg",
    },
  ];

  let currentIndex = 0;

  const userName = document.querySelector(".user-name");
  const userTitle = document.querySelector(".user-title");
  const userRating = document.querySelector(".user-rating");
  const testimonialText = document.querySelector(".testimonial-text");
  const userImages = document.querySelectorAll(".user-img");

  function updateTestimonial(index) {
    const testimonial = testimonials[index];
    userName.textContent = testimonial.name;
    userTitle.textContent = testimonial.title;
    userRating.textContent = testimonial.rating;
    testimonialText.textContent = testimonial.text;

    userImages.forEach((img, i) => {
      img.classList.remove("center", "left", "right");
      if (i === index) img.classList.add("center");
      else if (i === (index + 1) % testimonials.length)
        img.classList.add("right");
      else img.classList.add("left");
    });
  }

  setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(currentIndex);
  }, 4000);

  updateTestimonial(currentIndex); // Initialize with the first testimonial
});

// فعال‌سازی ScrollTrigger
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);
  console.log(gsap);
  console.log(ScrollTrigger);
  // انیمیشن برای متن‌های بخش
  gsap.from(".text-container h4", {
    opacity: 0,
    y: -50,
    duration: 1,
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top 80%",
    },
  });

  gsap.from(".text-container h1", {
    opacity: 0,
    x: -100,
    duration: 1.2,
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top 75%",
    },
  });

  gsap.from(".text-container p", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top 70%",
    },
  });

  gsap.from(".button .btn", {
    opacity: 0,
    scale: 0.5,
    duration: 0.8,
    stagger: 0.2, // تاخیر بین دکمه‌ها
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top 65%",
    },
  });

  // انیمیشن برای تصاویر بخش
  gsap.from(".image-shape", {
    opacity: 0,
    scale: 0.5,
    y: 100,
    duration: 1,
    stagger: 0.3, // تاخیر بین تصاویر
    scrollTrigger: {
      trigger: ".images-container",
      start: "top 80%",
    },
  });
});

const carousel = document.querySelector(".carousel");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const slideWidth = carousel.querySelector(".slide").offsetWidth;

document.addEventListener("DOMContentLoaded", () => {
  let scrollLeft = carousel.scrollLeft;
  let scrollWidth = carousel.scrollWidth;
  let progressLeft = scrollLeft + carousel.clientWidth;
  if (scrollLeft <= 0) {
    leftBtn.classList.add("opacity-0", "pointer-events-none");
  } else if (progressLeft >= scrollWidth - 10) {
    rightBtn.classList.add("opacity-0", "pointer-events-none");
  }
});

carousel.addEventListener("scroll", () => {
  let scrollLeft = carousel.scrollLeft;
  let scrollWidth = carousel.scrollWidth;
  let progressLeft = scrollLeft + carousel.clientWidth;
  if (scrollLeft <= 10) {
    leftBtn.classList.add("opacity-0", "pointer-events-none");
  } else if (progressLeft >= scrollWidth - 10) {
    rightBtn.classList.add("opacity-0", "pointer-events-none");
  } else {
    leftBtn.classList.remove("opacity-0", "pointer-events-none");
    rightBtn.classList.remove("opacity-0", "pointer-events-none");
  }
});

function scrollCarousel(dir) {
  if (dir === "left") {
    carousel.scrollBy({ left: -slideWidth, behavior: "smooth" });
  } else {
    carousel.scrollBy({ left: slideWidth, behavior: "smooth" });
  }
}

document.querySelectorAll(".click").forEach((item) => {
  item.addEventListener("click", () => {
    const article = item.nextElementSibling;
    if (article.classList.contains("grid-rows-[0fr]")) {
      article.classList.add("grid-rows-[1fr]");
      article.classList.remove("grid-rows-[0fr]");
    } else {
      article.classList.add("grid-rows-[0fr]");
      article.classList.remove("grid-rows-[1fr]");
    }
    const icon = item.querySelector(".icon");
    if (icon.classList.contains("rotate-0")) {
      icon.classList.add("rotate-90");
      icon.classList.remove("rotate-0");
    } else {
      icon.classList.add("rotate-0");
      icon.classList.remove("rotate-90");
    }
  });
});

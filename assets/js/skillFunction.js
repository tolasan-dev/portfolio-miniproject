const cards = document.querySelectorAll(".skill-card");

function setProgressWidth(card, widthPercent) {
  const progressBar = card.querySelector(".progress-bg");
  progressBar.style.width = widthPercent + "%";
}

cards.forEach((card) => {
  const progressBar = card.querySelector(".progress-bg");
  const percent = parseInt(card.getAttribute("data-percent")) || 90;
  const skillPercentText = card.querySelector(".skill-percent");

  progressBar.style.width = "0";
  skillPercentText.style.opacity = "0";

  card.addEventListener("click", () => {
    if (window.innerWidth < 992) {
      card.classList.toggle("active");
      if (card.classList.contains("active")) {
        setProgressWidth(card, percent);
        skillPercentText.style.opacity = "1";
      } else {
        setProgressWidth(card, 0);
        skillPercentText.style.opacity = "0";
      }
    }
  });

  card.addEventListener("mouseenter", () => {
    if (window.innerWidth >= 992) {
      setProgressWidth(card, percent);
      skillPercentText.style.opacity = "1";
    }
  });

  card.addEventListener("mouseleave", () => {
    if (window.innerWidth >= 992) {
      setProgressWidth(card, 0);
      skillPercentText.style.opacity = "0";
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 992) {
      cards.forEach((c) => {
        c.classList.remove("active");
        setProgressWidth(c, 0);
        c.querySelector(".skill-percent").style.opacity = "0";
      });
    } else {
      cards.forEach((c) => {
        if (c.classList.contains("active")) {
          const p = parseInt(c.getAttribute("data-percent")) || 90;
          setProgressWidth(c, p);
          c.querySelector(".skill-percent").style.opacity = "1";
        } else {
          setProgressWidth(c, 0);
          c.querySelector(".skill-percent").style.opacity = "0";
        }
      });
    }
  });
});

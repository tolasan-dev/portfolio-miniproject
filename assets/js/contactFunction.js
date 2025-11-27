function netification() {
  // Create overlay container
  const overlay = document.createElement("div");
  Object.assign(overlay.style, {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    animation: "fadeInOverlay 0.3s ease forwards",
  });

  // Create notification box
  const box = document.createElement("div");
  box.textContent = "Your message was sent to me. Thank you 🙏❤️";
  Object.assign(box.style, {
    backgroundColor: "#12d833",
    color: "white",
    fontSize: "1.2rem",
    padding: "1.5rem 2rem",
    borderRadius: "12px",
    boxShadow: "0 6px 12px rgba(18, 216, 51, 0.5)",
    textAlign: "center",
    maxWidth: "90%",
    transform: "scale(0.8)",
    opacity: "0",
    animation: "fadeInScale 0.3s ease forwards",
  });

  overlay.appendChild(box);
  document.body.appendChild(overlay);

  // Remove notification after 3 seconds with fade out
  setTimeout(() => {
    box.style.animation = "fadeOutScale 0.3s ease forwards";
    overlay.style.animation = "fadeOutOverlay 0.3s ease forwards";

    overlay.addEventListener(
      "animationend",
      () => {
        document.body.removeChild(overlay);
      },
      { once: true }
    );
  }, 3000);
}

// Add keyframes dynamically
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes fadeInScale {
    to {opacity: 1; transform: scale(1);}
  }
  @keyframes fadeOutScale {
    to {opacity: 0; transform: scale(0.8);}
  }
  @keyframes fadeInOverlay {
    to {opacity: 1;}
  }
  @keyframes fadeOutOverlay {
    to {opacity: 0;}
  }
`;
document.head.appendChild(styleSheet);

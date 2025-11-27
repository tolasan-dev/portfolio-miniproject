 const counters = document.querySelectorAll(".counter");
    const speed = 24;
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = parseInt(counter.getAttribute("data-count"));
        const count = parseInt(counter.innerText);
        const increment = Math.trunc(target / speed);
        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(updateCount, 50);
          /* change duration speed */
          clearTimeout();
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
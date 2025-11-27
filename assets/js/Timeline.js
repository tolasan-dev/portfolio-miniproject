function showitemText(index) {
  const timelineItems = document.querySelectorAll(".timeline-item");
  const item = timelineItems[index - 1];

  if (!item) return;

  const text = item.querySelector(".timeline-text");
  const viewBtn = item.querySelector('button[onclick^="showitemText"]');

  if (text && viewBtn) {
    text.style.display = "block";
    viewBtn.style.display = "none";
  }
}

function closeText(index) {
  const timelineItems = document.querySelectorAll(".timeline-item");
  const item = timelineItems[index - 1];

  if (!item) return;

  const text = item.querySelector(".timeline-text");
  const viewBtn = item.querySelector('button[onclick^="showitemText"]');

  if (text && viewBtn) {
    text.style.display = "none";
    viewBtn.style.display = "inline-block";
  }
}

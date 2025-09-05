document.addEventListener("DOMContentLoaded", () => {
  let tooltip = null;

  document.body.addEventListener("click", (e) => {
    const target = e.target.closest(".has-tooltip");
    if (target) {
      e.preventDefault();
      if (!tooltip) {
        tooltip = document.createElement("div");
        tooltip.className = "tooltip";
        document.body.appendChild(tooltip);
      }
      document
        .querySelectorAll(".tooltip_active")
        .forEach((el) => el.classList.remove("tooltip_active"));

      const text = target.getAttribute("title");
      tooltip.textContent = text;

        const rect = target.getBoundingClientRect();

        const tooltipX = rect.left + rect.width / 2;
        const tooltipY = rect.bottom + window.scrollY + 5;

        tooltip.style.position = 'absolute';
        tooltip.style.left = `${tooltipX}px`;
        tooltip.style.top = `${tooltipY}px`;
        tooltip.style.transform = 'translateX(-50%)';

      tooltip.classList.add("tooltip_active");
    } else {
      if (tooltip) {
        tooltip.classList.remove("tooltip_active");
      }
    }
  });
});

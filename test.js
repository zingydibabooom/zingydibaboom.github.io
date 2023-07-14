document.addEventListener("DOMContentLoaded", function() {
    const areas = document.querySelectorAll("area[data-tooltip]");
  
    areas.forEach(function(area) {
      const tooltipText = area.dataset.tooltip;
  
      const tooltip = document.createElement("div");
      tooltip.classList.add("tooltip");
      tooltip.textContent = tooltipText;
  
      const areaWrapper = document.createElement("div");
      areaWrapper.classList.add("area-tooltip");
  
      areaWrapper.appendChild(tooltip);
      area.parentNode.appendChild(areaWrapper);
    });
  });
  
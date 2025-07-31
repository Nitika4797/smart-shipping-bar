
document.addEventListener("DOMContentLoaded", function () {
  // Create bar
  const bar = document.createElement("div");

  // Style directly on the bar
  bar.style.position = "fixed";
  bar.style.top = "0";
  bar.style.left = "0";
  bar.style.width = "100%";
  bar.style.background = "#ff5733";
  bar.style.color = "#fff";
  bar.style.padding = "10px";
  bar.style.fontFamily = "Arial, sans-serif";
  bar.style.textAlign = "center";
  bar.style.fontSize = "16px";
  bar.style.zIndex = "9999";

  // Add text
  bar.innerText = "Free Shipping on orders over $50 – Smart Shipping Bar Active!";

  // Add bar to page
  document.body.appendChild(bar);
});

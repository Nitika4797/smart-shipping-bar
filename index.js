document.addEventListener("DOMContentLoaded", function () {
  const bar = document.createElement("div");
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
  bar.innerText = "Free Shipping on orders over $50 – Smart Shipping Bar Active!";

  document.body.appendChild(bar);
});

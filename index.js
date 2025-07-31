document.addEventListener("DOMContentLoaded", function () {
    console.log("Smart Shipping Bar script loaded!");

    // Avoid duplicate bars
    if (document.getElementById("smart-shipping-bar")) return;

    // Create container
    const container = document.createElement("div");
    container.id = "smart-shipping-bar";

    container.style.position = "fixed";
    container.style.top = "0";
    container.style.left = "0";
    container.style.width = "100%";
    container.style.background = "#ff5733";
    container.style.color = "#fff";
    container.style.padding = "10px";
    container.style.fontFamily = "Arial, sans-serif";
    container.style.textAlign = "center";
    container.style.fontSize = "16px";
    container.style.zIndex = "9999";

    container.innerText = "🚚 Free Shipping on orders over $50 – Smart Shipping Bar Active!";

    // Add to page
    document.body.appendChild(container);
});

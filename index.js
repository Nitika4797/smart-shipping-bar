console.log("=== Smart Shipping Bar Loaded ===");

window.addEventListener("load", function () {
    console.log("Adding bar...");

    // Prevent duplicate
    if (document.getElementById("smart-shipping-bar")) return;

    const bar = document.createElement("div");
    bar.id = "smart-shipping-bar";
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
    bar.style.zIndex = "999999";
    bar.innerText = "🚚 Free Shipping on orders over $50 – Smart Shipping Bar Active!";

    document.body.appendChild(bar);

    // Push page content down (so bar is not hidden)
    document.body.style.paddingTop = "50px";
});

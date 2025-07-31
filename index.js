console.log("=== Smart Shipping Bar Loaded ===");

document.addEventListener("DOMContentLoaded", function () {
  console.log("Adding bar...");

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
  bar.style.zIndex = "9999";
  document.body.appendChild(bar);

  function updateBar(total) {
    const target = 50; // Free shipping target
    const current = total / 100; // Shopify returns cents

    if (current >= target) {
      bar.innerHTML = `🎉 You have free shipping! Your total is $${current}`;
    } else {
      const remaining = (target - current).toFixed(2);
      bar.innerHTML = `🚚 Spend $${remaining} more to get Free Shipping!`;
    }
  }

  // Fetch cart data
  fetch("/cart.js")
    .then((res) => res.json())
    .then((cart) => {
      console.log("Cart:", cart);
      updateBar(cart.total_price);
    })
    .catch((err) => console.error("Cart fetch error:", err));
});

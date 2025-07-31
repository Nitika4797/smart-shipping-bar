console.log("=== Smart Shipping Bar Loaded ===");

document.addEventListener("DOMContentLoaded", function () {
  console.log("Adding bar...");

  // Create bar element
  const bar = document.createElement("div");
  bar.id = "smart-shipping-bar";
  Object.assign(bar.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    background: "#ff5733",
    color: "#fff",
    padding: "10px",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    fontSize: "16px",
    zIndex: "9999",
  });
  document.body.appendChild(bar);

  // Default text first
  bar.innerHTML = "🚚 Loading shipping bar...";

  function updateBar(total_price) {
    const target = 50; // Free shipping target
    const current = total_price / 100;

    if (current >= target) {
      bar.innerHTML = `🎉 You have free shipping! Total $${current}`;
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
    .catch((err) => {
      console.error("Cart fetch error:", err);
      bar.innerHTML = "🚚 Free Shipping on orders over $50!";
    });
});

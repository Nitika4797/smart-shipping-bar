console.log("=== Smart Shipping Bar Loaded ===");

// Function to create/update bar
function initSmartBar() {
  console.log("Adding bar...");

  // Remove old bar if exists
  const old = document.getElementById("smart-shipping-bar");
  if (old) old.remove();

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
  bar.innerHTML = "🚚 Loading shipping bar...";
  document.body.appendChild(bar);

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

  // Fetch Shopify cart
  fetch("/cart.js")
    .then((res) => res.json())
    .then((cart) => {
      console.log("Cart data:", cart);
      updateBar(cart.total_price);
    })
    .catch((err) => {
      console.error("Cart fetch error:", err);
      bar.innerHTML = "🚚 Free Shipping on orders over $50!";
    });
}

// Run immediately (no DOMContentLoaded)
setTimeout(initSmartBar, 1000);

// Re-run when Shopify does page transitions (optional)
document.addEventListener("shopify:section:load", initSmartBar);
document.addEventListener("shopify:section:unload", initSmartBar);

document.addEventListener("DOMContentLoaded", function () {
  const barId = "smart-shipping-bar";
  const threshold = 50; // Free shipping threshold

  // Create Bar
  const bar = document.createElement("div");
  bar.id = barId;
  bar.style.cssText = `
    position: fixed;
    top: 0;
    width: 100%;
    background: #f3f4f6;
    color: #111827;
    text-align: center;
    padding: 10px 0;
    font-weight: 600;
    z-index: 9999;
    font-family: sans-serif;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  `;
  bar.innerText = "Loading shipping message...";
  document.body.prepend(bar);

  // Update text based on cart
  function updateBar(subtotal) {
    if (subtotal >= threshold * 100) {
      bar.innerText = "🎉 Congrats! You’ve unlocked free shipping!";
    } else if (subtotal > 0) {
      const remaining = ((threshold * 100 - subtotal) / 100).toFixed(2);
      bar.innerText = `🛍️ You’re only $${remaining} away from FREE shipping!`;
    } else {
      bar.innerText = `📦 Add items worth $${threshold} to get FREE shipping!`;
    }
  }

  function fetchCart() {
    fetch('/cart.js')
      .then(res => res.json())
      .then(cart => {
        updateBar(cart.total_price);
      });
  }

  fetchCart();
  setInterval(fetchCart, 5000);
});

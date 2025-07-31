document.addEventListener("DOMContentLoaded", function () {
  // Bar create karo
  const bar = document.createElement("div");
  bar.innerHTML = `
    <div style="
        position:fixed;
        top:0;
        left:0;
        width:100%;
        background:#ff5733;
        color:#fff;
        padding:10px;
        font-family: Arial, sans-serif;
        text-align:center;
        font-size:16px;
        z-index:9999;
    ">
      Free Shipping on orders over $50 – Smart Shipping Bar Active!
    </div>
  `;
  document.body.appendChild(bar);
});

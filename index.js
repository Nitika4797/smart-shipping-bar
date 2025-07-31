document.addEventListener("DOMContentLoaded", function () {
  const bar = document.createElement("div");
  bar.innerHTML = `
    <div style="
        position:fixed;
        top:0;
        left:0;
        width:100%;
        background:#000;
        color:#fff;
        padding:10px;
        text-align:center;
        z-index:9999;
    ">
      Free Shipping on orders over $50!
    </div>
  `;
  document.body.appendChild(bar);
});

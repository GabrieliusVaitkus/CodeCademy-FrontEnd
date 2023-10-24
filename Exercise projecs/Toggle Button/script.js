document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("toggleBtn");
  const txt = document.getElementById("toggleText");

  btn.addEventListener("click", function () {
    if (!txt.style.display || txt.style.display === "block") {
      txt.style.display = "none";
    } else {
      txt.style.display = "block";
    }
  });
});

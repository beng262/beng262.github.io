// Runs in <head> before paint: use the saved theme, else the system one.
(function () {
  var t = null;
  try { t = localStorage.getItem("theme"); } catch (e) {}
  if (t !== "light" && t !== "dark") t = matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", t);
  document.documentElement.classList.add("js"); // lets CSS hide .reveal content only when the script that shows it will run
})();

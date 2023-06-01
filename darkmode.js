const btn = document.querySelector(".theme-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const lightmode_btn = document.querySelector("#lightmode-btn");
const darkmode_btn = document.querySelector("#darkmode-btn");

if (prefersDarkScheme.matches) {
  var currentTheme = "dark";
} else {
  var currentTheme = "light";
}

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.querySelector(":root").classList.toggle("lightmode");
    document.querySelector("img").classList.toggle("lightmode");
    if (currentTheme == "dark") {
      currentTheme = "light";
      lightmode_btn.style.display = "inline-block";
      darkmode_btn.style.display = "none";
    } else {
      currentTheme = "dark";
      lightmode_btn.style.display = "none";
      darkmode_btn.style.display = "inline-block";
    }
  } else {
    document.querySelector(":root").classList.toggle("darkmode");
    document.querySelector("img").classList.toggle("darkmode");
    if (currentTheme == "dark") {
      currentTheme = "light";
      lightmode_btn.style.display = "inline-block";
      darkmode_btn.style.display = "none";
    } else {
      currentTheme = "dark";
      lightmode_btn.style.display = "none";
      darkmode_btn.style.display = "inline-block";
    }
  }
});

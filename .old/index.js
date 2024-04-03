// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// 0, "", null, undefined, NaN are all false
// Dark and light mode color settings
const LIGHT_MODE = "#ffffff";
const DARK_MODE = "#171717";
let darkMode = true;

/**
 * Check the browser for the user's preferred default color settings and base the site on that.
 */
window.onload = () => {
  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    changeMode();
  } else {
    darkMode = !darkMode;
    changeMode();
  }
};

/**
 * Changes the color settings when the user clicks the requisite icon.
 */
function changeMode() {
  let adaptive = document.querySelectorAll(".color-mode");
  let nav = document.querySelectorAll(".page-nav");
  let selector = document.getElementById("mode-selector");

  if (darkMode) {
    adaptive.forEach(item => {
      item.style.backgroundColor = LIGHT_MODE;
      item.style.borderBottomColor = LIGHT_MODE;
    });
    nav.forEach(link => {
      link.style.color = "black";
    });
    selector.setAttribute("src", "./images/lightbulb-light.png");
  } else {
    adaptive.forEach(item => {
      item.style.backgroundColor = DARK_MODE;
      item.style.borderBottomColor = DARK_MODE;
    });
    nav.forEach(link => {
      link.style.color = "white";
    });
    selector.setAttribute("src", "./images/lightbulb-solid.png");
  }

  darkMode = !darkMode;
}

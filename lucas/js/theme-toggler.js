const button = document.getElementById("theme-toggle-button");
const body = document.querySelector("body");
const light_theme = "light-theme";

button.addEventListener("click", () => {
  if (body.classList.contains(light_theme)) {
    body.classList.remove(light_theme);
    button.innerText = 'Tema claro';
  } else {
    body.classList.add(light_theme);
    button.innerText = 'Tema escuro';
  }
});

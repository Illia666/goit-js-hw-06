const controlFontSize = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
controlFontSize.addEventListener("input", (event) => {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
});
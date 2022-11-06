let counterValue = 0;
const counterEl = document.querySelector("#value");

const updateData = () => {
  counterEl.textContent = counterValue;
};

document
  .querySelector(`button[data-action = "decrement"]`)
  .addEventListener("click", () => {
    counterValue -= 1;
    updateData();
  });

document
  .querySelector(`button[data-action = "increment"]`)
  .addEventListener("click", () => {
    counterValue += 1;
    updateData();
  });
Footer

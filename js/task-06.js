const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", (event) => {
  const minLength = Number(event.currentTarget.dataset.length);

  switch (true) {
    case event.currentTarget.value.length === 0: {
      event.currentTarget.classList.remove("valid", "invalid");
      break;
    }
    case event.currentTarget.value.length < minLength: {
      event.currentTarget.classList.remove("valid");
      event.currentTarget.classList.add("invalid");
      break;
    }
    default: {
      event.currentTarget.classList.remove("invalid");
      event.currentTarget.classList.add("valid");
    }
  }
});
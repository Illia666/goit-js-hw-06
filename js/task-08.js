
const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  for (const [name, value] of formData.entries()) {
    if (value.trim() === "") {
      return alert("All fields must be filled in");
    }
  }

  const loginData = {};
  for (let element of event.currentTarget.elements) {
    if (element.name) loginData[element.name] = element.value;
  }
  console.log(loginData);
  event.currentTarget.reset();
}
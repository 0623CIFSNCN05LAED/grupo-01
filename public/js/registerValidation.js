window.onload = function () {
  const validations = [
    {
      field: "first_name",
      check: (input) => input.value.length >= 2,
      message: "Completar este campo",
    },
    {
      field: "last_name",
      check: (input) => input.value.length >= 2,
      message: "Completar este campo",
    },
    {
      field: "phone",
      check: (input) => input.value.length >= 9,
      message: "Ingresar unicamente números",
    },
    {
      field: "email",
      check: (input) => validator.isEmail(input.value),
      message: "Ingresar un mail valido",
    } /*,
    {
      field: "password",
      validation: () => true,
      message: "Debe completar este campo",
    }, */,
  ];
  validations.forEach((validation) => {
    const inputId = validation.field;
    const input = document.getElementById(inputId);
    const inputErrorMsg = document.getElementById(inputId + "Error");

    function validate() {
      console.log("input", input.value);
      inputValidation(validation, input, inputErrorMsg);
    }

    input.addEventListener("blur", validate);
    input.addEventListener("input", validate);
  });

  const form = document.getElementById("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("submit interceptado");

    const validationsResult = [];

    validations.forEach((validation) => {
      const inputId = validation.field;
      const input = document.getElementById(inputId);
      const inputErrorMsg = document.getElementById(inputId + "Error");
      const result = inputValidation(validation, input, inputErrorMsg);
      validationsResult.push(result);
    });

    if (validationsResult.every((val) => val == true)) {
      form.submit();
    }
  });

  function inputValidation(validation, input, inputErrorMsg) {
    if (!input.value || !validation.check(input)) {
      inputErrorMsg.innerText = validation.message;
      inputErrorMsg.style.display = "block";
      return false;
    } else {
      inputErrorMsg.innerText = "";
      inputErrorMsg.style.display = "none";
      return true;
    }
  }

  const phone = document.getElementById("phone");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
};
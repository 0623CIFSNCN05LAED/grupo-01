window.onload = function () {
  const validations = [
    {
      field: "email",
      check: (input) => validator.isEmail(input.value),
      message: "Ingresar un mail válido",
    },
    {
      field: "password",
      check: (input) => passwordValidation(input),
      message: "La contraseña no es correcta",
    },
    /* {
      field: "password",
      check: (input) => input.value.length >= 8,

      message: "La contraseña debe tener al menos 8 caracteres",
    }, */
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
    if (!input.value) {
      inputErrorMsg.innerText = "El campo no debe estar vacío";
      inputErrorMsg.style.display = "block";
      return false;
    }

    if (!validation.check(input)) {
      inputErrorMsg.innerText = validation.message;
      inputErrorMsg.style.display = "block";
      return false;
    }

    inputErrorMsg.innerText = "";
    inputErrorMsg.style.display = "none";
    return true;
  }

  function passwordValidation(input) {
    const mayuscula = /[A-Z]/.test(input.value);
    const numero = /[0-9]/.test(input.value);
    if (!mayuscula && !numero) {
      return false;
    } else {
      return true;
    }
  }
};

window.onload = function () {
  const validations = [
    {
      field: "first_name",
      check: (input) => input.value.length >= 3,
      message: "Debe completar este campo",
    } /* ,
    {
      field: "last_name",
      validation: () => true,
      message: "Debe completar este campo",
    },
    {
      field: "phone",
      validation: () => true,
      message: "Debe completar este campo",
    },
    {
      field: "email",
      validation: () => true,
      message: "Debe completar este campo",
    },
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

    const firstname = document.getElementById("first_name");
    const firstnameValue = firstname.value;
    if (firstnameValue.length >= 3) {
    } else {
      console.log("error");
    }
  });

  function inputValidation(validation, input, inputErrorMsg) {
    if (!input.value|| !validation.check(input)) {
      inputErrorMsg.innerText = validation.message;
      inputErrorMsg.style.display = "block";
      return false;
    } else {
      inputErrorMsg.innerText = "";
      inputErrorMsg.style.display = "none"; 
      return true;
    }
  }

  const lastname = document.getElementById("last_name");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
};

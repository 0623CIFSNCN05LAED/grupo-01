window.addEventListener('load',()=>{
  const validations = [
    {
      field: "first_name",
      check: (input) => input.value.length >= 2,
      message: "Debe contener al menos 2 caracteres",
    },
    {
      field: "last_name",
      check: (input) => input.value.length >= 2,
      message: "Debe contener al menos 2 caracteres",
    },
    {
      field: "phone",
      check: (input) => input.value.length >= 9,
      message: "Ingresar número de teléfono válido con al menos 10 dígitos ",
    },
    {
      field: "email",
      check: (input) => input.value.includes("@"),
      message: "Ingresar un mail válido",
    }
  ];
  validations.forEach((validation) => {
    const inputId = validation.field;
    const input = document.getElementById(inputId);
    const inputErrorMsg = document.getElementById(inputId + "Error");
    
    function validate() {
      inputValidation(validation, input, inputErrorMsg);
    }
    input.addEventListener("blur", validate);
    input.addEventListener("input", validate);
  });

  const form = document.getElementById("form-data");
  form.addEventListener('submit', e => {
    e.preventDefault()
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
});
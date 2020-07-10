(function () {
  function login(e) {
    e.preventDefault();
    document.getElementById("error").innerHTML = "";
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    if (!email.value) {
      createError("Please Enter Email");
      return false;
    }
    if (!password.value) {
      createError("Please Enter Password");
      return false;
    }
    if (!validateEmail(email.value)) {
      createError("Please Enter Valid Email");
      return false;
    }

    if (email.value === "admin@gmail.com" && password.value === "admin") {
      redirect("dashboard.html");
      return true;
    } else {
      createError("Invalid Credentials");
      return false;
    }
  }

  function createError(msg) {
    let errorElem = document.createElement("p");
    errorElem.className = "error";
    errorElem.textContent = msg;
    document.getElementById("error").appendChild(errorElem);
  }

  function validateEmail(email) {
    let format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(format)) {
      return true;
    }

    return false;
  }

  function init() {
    document.getElementById("login").addEventListener("click", login);
  }
  window.init = init;
})();

function redirect(location) {
  window.location.href = location;
}
//window.addEventListener("DOMContentLoaded", init);

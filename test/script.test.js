describe("Login", function () {
  // inject the HTML fixture for the tests
  beforeEach(function () {
    var fixture = ` <div class="container" id="container">
      <div class="form-wrap">
        <h1>Login</h1>
        <div id="error"></div>
        <form action="#">
          <div class="form-group">
            <label for="" class="label">Email</label
            ><input type="email" class="input" id="email" />
          </div>
          <div class="form-group">
            <label for="" class="label">Password</label
            ><input type="password" class="input" id="password" />
          </div>

          <button class="btn" id="login">Login</button>
        </form>
      </div>
    </div>`;

    document.body.insertAdjacentHTML("afterbegin", fixture);
  });

  // remove the html fixture from the DOM
  afterEach(function () {
    document.body.removeChild(document.getElementById("container"));
  });

  //call the init function of calculator to register DOM elements
  beforeEach(function () {
    window.init();
  });

  it("Should show error when fields are empty", function () {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    email.value = "";
    password.value = "";
    document.getElementById("login").click();
    expect(document.getElementById("error").innerHTML).toBe(
      '<p class="error">Please Enter Email</p>'
    );
  });

  it("Should show error when only password field is empty", function () {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    email.value = "admin@gmail.com";
    password.value = "";
    document.getElementById("login").click();
    expect(document.getElementById("error").innerHTML).toBe(
      '<p class="error">Please Enter Password</p>'
    );
  });

  it("Should show error when email is invalid", function () {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    email.value = "admin";
    password.value = "admin";
    document.getElementById("login").click();
    expect(document.getElementById("error").innerHTML).toBe(
      '<p class="error">Please Enter Valid Email</p>'
    );
  });
  it("should return true when correct email and password is supplied", function () {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    email.value = "admin@gmail.com";
    password.value = "admin";
    spyOn(window, "redirect");
    document.getElementById("login").click();

    expect(redirect).toHaveBeenCalled();
  });
});

/*window.addEventListener("load", function () {
  const loader = document.querySelector(".loading-container");
  loader.style.display = "none";
});
*/
// Function to show Overlay 1

function showOverlay1() {
  var overlay1 = document.getElementById("overlay");
  overlay1.style.display = "block";
}

// Function to show overlay 2
function showOverlay2() {
  var overlay2 = document.getElementById("overlay2");
  overlay2.style.display = "block";
}

// Function to show overlay 3
function showOverlay3() {
  var overlay3 = document.getElementById("overlay3");
  overlay3.style.display = "block";
}

// Function to show overlay 4
function showOverlay4() {
  var overlay4 = document.getElementById("overlay4");
  overlay4.style.display = "block";
}

function closeOverlay1() {
  var overlay1 = document.getElementById("overlay");
  overlay1.style.display = "none";
}

// Call function to close Overlay 1 when "OK" button is clicked
document.getElementById("okButton").addEventListener("click", function () {
  closeOverlay1();
});

// Function to hide Overlay 2
function hideOverlay2() {
  var overlay2 = document.getElementById("overlay2");
  overlay2.style.display = "none";
}

// Function to hide Overlay 3
function hideOverlay3() {
  var overlay3 = document.getElementById("overlay3");
  overlay3.style.display = "none";
}

// Function to show Overlay 2
function showOverlay2() {
  hideOverlay3(); // Hide Overlay 3 before showing Overlay 2
  var overlay2 = document.getElementById("overlay2");
  overlay2.style.display = "block";
}

// Function to show Overlay 3
function showOverlay3() {
  hideOverlay2(); // Hide Overlay 2 before showing Overlay 3
  var overlay3 = document.getElementById("overlay3");
  overlay3.style.display = "block";
}

// Function to show Overlay 4
function showOverlay4() {
  hideOverlay3(); // Hide Overlay 3 before showing Overlay 4
  var overlay4 = document.getElementById("overlay4");
  overlay4.style.display = "block";
}

// Event listener for "Let's Start" button
document.querySelector(".btn.active").addEventListener("click", function () {
  showOverlay2();
});

// Event listener for "Next" button in Overlay 2
document.getElementById("nextButton").addEventListener("click", function () {
  showOverlay3();
});

// Event listener for "Next" button in Overlay 3

var signupModal = document.getElementById("signup-modal");
var signinModal = document.getElementById("signin-modal");

var signupBtn = document.querySelector(".primary_btn");
var signinBtn = document.getElementById("signin-button");

var signupCloseSpan = document.querySelector("#signup-modal .close");
var signinCloseSpan = document.querySelector("#signin-modal .close");

function openSignUpModal() {
  signupModal.style.display = "block";
  document.body.classList.add("modal-open");
}
function submitSignupInfo() {
  console.log("entering js function");
  var usernameInput = document.getElementById("user");
  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");

  if (
    usernameInput.value === "" ||
    emailInput.value === "" ||
    passwordInput.value === ""
  ) {
    showOverlay1();
    // event.preventDefault();
  } else {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
    };
    const register = {
      email: email.value,
      password: password.value,
    };
    console.log("starting API call");
    fetch("http://127.0.0.1:6069/api/register", {
      method: "POST",
      body: JSON.stringify(register),
      headers: headers,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Received response", data.status);
        if (data.status == "error") {
          console.log("failed");
          showOverlay1();
        } else {
          console.log("successful");
          signupModal.style.display = "none";
          localStorage.setItem("isSignUpHidden", "true");
          localStorage.setItem("isSignInHidden", "true");
          toggleLetsStartButton();
        }
      });
  }
}
signupCloseSpan.onclick = function () {
  signupModal.style.display = "none";
  document.body.classList.remove("modal-open");
};

function submitSigninInfo() {
  document.getElementById("signed-in").onclick = function (event) {
    var emailInput = document.getElementById("signemail");

    var passwordInput = document.getElementById("signpassword");

    if (emailInput.value === "" || passwordInput.value === "") {
      showOverlay1();
      //   event.preventDefault();
    } else {
      const login = {
        email: emailInput.value,
        password: passwordInput.value,
      };
      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
      };
      fetch("http://127.0.0.1:6069/api/login", {
        method: "POST",
        body: JSON.stringify(login),
        headers: headers,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status == "error") {
            showOverlay1();
          } else {
            console.log("Logged in");
            signinModal.style.display = "none";
            localStorage.setItem("isSignUpHidden", "true");
            localStorage.setItem("isSignInHidden", "true");
            toggleLetsStartButton();
          }
        });
    }
  };
}
signinBtn.onclick = function () {
  signinModal.style.display = "block";
};
function openSignInModal() {
  signInModal.style.display = "block";
}

signinCloseSpan.onclick = function () {
  signinModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == signupModal) {
    signupModal.style.display = "none";
    document.body.classList.remove("modal-open");
  } else if (event.target == signinModal) {
    signinModal.style.display = "none";
  }
};

/*
window.addEventListener("load", function () {
  var isSignUpHidden = localStorage.getItem("isSignUpHidden");
  var isSignInHidden = localStorage.getItem("isSignInHidden");

  if (isSignUpHidden === "true") {
    document.querySelector(".primary_btn").style.display = "none";
  }

  if (isSignInHidden === "true") {
    document.getElementById("signin-button").style.display = "none";
  }
});
*/

function toggleLetsStartButton() {
  var isSignUpHidden = localStorage.getItem("isSignUpHidden");
  var isSignInHidden = localStorage.getItem("isSignInHidden");
  var letsStartButton = document.querySelector(".btn.active");

  if (isSignUpHidden === "true" || isSignInHidden === "true") {
    letsStartButton.style.display = "block";
  } else {
    letsStartButton.style.display = "none";
  }
}
// Form submission validation for sign-up

// Form submission validation for sign-in

/*
window.addEventListener("load", function () {
  var occupationSelect = document.getElementById("occupationSelect");
  var occupations = [
    "Self Employed",
    "Student",
    "Business",
    "Corporate",
    "Others",
  ];

  occupations.forEach(function (occupation) {
    var option = document.createElement("option");
    option.text = occupation;
    option.value = occupation;
    occupationSelect.add(option);
  });
});
*/

// Event listener for "OK" button in Overlay 4
document.getElementById("ok-Button").addEventListener("click", function () {
  overlay4.style.display = "none";
  // Hide the "Let's Start" button
  document.querySelector(".btn.active").style.display = "none";
  // Show the dashboard link in the navbar
  document.getElementById("dashboardLink").style.display = "block";
});

// Functionality to logout
function logout() {
  localStorage.clear();
  location.reload();
}
document
  .querySelector("nav a[href='#']")
  .addEventListener("click", function (event) {
    logout();
  });
window.addEventListener("load", function () {
  toggleLetsStartButton(); // Initially toggle "Let's Start" button visibility
});

function validateOverlay3Fields() {
  var nameInput = document.getElementById("nameInput").value.trim();
  var ageInput = document.getElementById("ageInput").value.trim();
  var occupationSelect = document.getElementById("occupationSelect").value;
  var dobInput = document.getElementById("dobInput").value.trim();
  var contactInput = document.getElementById("contactInput").value.trim();
  var emailInput = document.getElementById("emailInput").value.trim();

  if (
    nameInput === "" ||
    ageInput === "" ||
    occupationSelect === "" ||
    dobInput === "" ||
    contactInput === "" ||
    emailInput === ""
  ) {
    return false; // If any field is empty, return false
  }
  return true; // If all fields are filled, return true
}
document
  .getElementById("submitButton")
  .addEventListener("click", function (event) {
    if (validateOverlay3Fields()) {
      showOverlay4(); // If all fields in Overlay 3 are filled, show Overlay 4
    } else {
      alert("Fill all fields"); // If any field in Overlay 3 is empty, show Overlay 1
    }
    event.preventDefault(); // Prevent form submission
  });

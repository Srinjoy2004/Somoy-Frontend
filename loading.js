window.addEventListener("load", function () {
    const loader = document.querySelector(".loading-container");
    loader.style.display = "none";
});

var signupModal = document.getElementById("signup-modal");
var signinModal = document.getElementById("signin-modal");

var signupBtn = document.querySelector(".primary_btn");
var signinBtn = document.getElementById("signin-button");

var signupCloseSpan = document.querySelector("#signup-modal .close");
var signinCloseSpan = document.querySelector("#signin-modal .close");

signupBtn.onclick = function() {
    signupModal.style.display = "block";
    document.body.classList.add("modal-open");
}

signupCloseSpan.onclick = function() {
    signupModal.style.display = "none";
    document.body.classList.remove("modal-open");
}

signinBtn.onclick = function() {
    signinModal.style.display = "block";
}

signinCloseSpan.onclick = function() {
    signinModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == signupModal) {
        signupModal.style.display = "none";
        document.body.classList.remove("modal-open");
    } else if (event.target == signinModal) {
        signinModal.style.display = "none";
    }
}

window.addEventListener("load", function() {
    var isSignUpHidden = localStorage.getItem("isSignUpHidden");
    var isSignInHidden = localStorage.getItem("isSignInHidden");

    if (isSignUpHidden === "true") {
        document.querySelector(".primary_btn").style.display = "none";
    }

    if (isSignInHidden === "true") {
        document.getElementById("signin-button").style.display = "none";
    }
});

// Form submission validation for sign-up
document.getElementById("signup-button").onclick = function(event) {
    var usernameInput = document.querySelector("#signup-modal input[type='text']");
    var emailInput = document.querySelector("#signup-modal input[type='email']");
    var passwordInput = document.querySelector("#signup-modal input[type='password']");

    if (usernameInput.value === "" || emailInput.value === "" || passwordInput.value === "") {
        alert("Please fill in all fields.");
        event.preventDefault();
    } else {
        signupModal.style.display = 'none';
        localStorage.setItem("isSignUpHidden", "true");
        localStorage.setItem("isSignInHidden", "true");
    }
}

// Form submission validation for sign-in
document.getElementById("signed-in").onclick = function(event) {
    var usernameInput = document.querySelector("#signin-modal input[type='text']");
    var passwordInput = document.querySelector("#signin-modal input[type='password']");

    if (usernameInput.value === "" || passwordInput.value === "") {
        alert("Please fill in all fields.");
        event.preventDefault();
    } else {
        signinModal.style.display = 'none';
        localStorage.setItem("isSignUpHidden", "true");
        localStorage.setItem("isSignInHidden", "true");
    }
}

// Functionality to logout
function logout() {
    localStorage.clear();
    location.reload();
}

// Add event listener to the "Home" link to trigger logout
document.querySelector("nav a[href='#']").addEventListener("click", function(event) {
    logout();
});
function showOverlay() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "block";
  }
  
  window.addEventListener("load", function() {
    var occupationSelect = document.getElementById("occupationSelect");
    var occupations = ["Self Employed", "Student", "Business", "Corporate", "Others"];
  
    occupations.forEach(function(occupation) {
      var option = document.createElement("option");
      option.text = occupation;
      option.value = occupation;
      occupationSelect.add(option);
    });
  });

 

 
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

var signupButtonIndex = document.querySelector(".coffee_text .primary_btn");
var signinButtonIndex = document.getElementById("signin-button");

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

var signup = document.getElementById('signup-button');
var signin = document.getElementById('signed-in');

signup.addEventListener('click', function() {
    window.location.href = './Somoy-Frontend/new.html';
    signupModal.style.display = 'none';
    signupButtonIndex.style.display = 'none';
    signinModal.style.display = 'none';
    signinButtonIndex.style.display = 'none';
});

signin.addEventListener('click', function() {
    window.location.href = './Somoy-Frontend/new.html';
    signinModal.style.display = 'none';
    signinButtonIndex.style.display = 'none';
    signupModal.style.display = 'none';
    signupButtonIndex.style.display = 'none';
});

 


 

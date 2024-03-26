window.addEventListener("load", function () {
    const loader = document.querySelector(".loading-container");
    loader.style.display = "none";
});

 // Get the modal element
var modal = document.getElementById("signup-modal");

// Get the button that opens the modal
var signupBtn = document.querySelector(".primary_btn");

// Get the <span> element that closes the modal
var closeBtn = document.querySelector(".close");

 
signupBtn.onclick = function() {
    modal.style.display = "block";
    document.body.classList.add("modal-open");  
}

 
closeBtn.onclick = function() {
    modal.style.display = "none";
    document.body.classList.remove("modal-open"); // Unlock scrolling
}
 
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");  
    }
}

  
    var signInModal = document.getElementById("signin-modal");

    
    var signInButton = document.getElementById("signin-button");

     
    var signInCloseSpan = signInModal.querySelector(".close");


    signInButton.onclick = function() {
        signInModal.style.display = "block";
    }
 
    signInCloseSpan.onclick = function() {
        signInModal.style.display = "none";
    }

     
    window.onclick = function(event) {
        if (event.target == signInModal) {
            signInModal.style.display = "none";
        }
    }
 

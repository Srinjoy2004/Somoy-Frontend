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

// When the user clicks on the "Sign Up" button, open the modal
signupBtn.onclick = function() {
    modal.style.display = "block";
    document.body.classList.add("modal-open"); // Lock scrolling
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
    document.body.classList.remove("modal-open"); // Unlock scrolling
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");  
    }
}


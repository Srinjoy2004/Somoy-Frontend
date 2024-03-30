window.addEventListener("load", function () {
  const loader = document.querySelector(".loading-container");
  loader.style.display = "none";
});

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

// Event listener for "Next" button in Overlay 2
document.getElementById("nextButton").addEventListener("click", function () {
  showOverlay3();
});

var signupModal = document.getElementById("signup-modal");
var signinModal = document.getElementById("signin-modal");

var signupBtn = document.querySelector(".primary_btn");
var signinBtn = document.getElementById("signin-button");
var letsStartButton = document.querySelector(".btn.active");

var signupCloseSpan = document.querySelector("#signup-modal .close");
var signinCloseSpan = document.querySelector("#signin-modal .close");

function openSignUpModal() {
  signupModal.style.display = "block";
  document.body.classList.add("modal-open");
}

function submitSignupInfo() {
  var usernameInput = document.getElementById("user");
  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");

  if (
    usernameInput.value === "" ||
    emailInput.value === "" ||
    passwordInput.value === ""
  ) {
    showOverlay1();
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
    fetch("http://127.0.0.1:6069/api/register", {
      method: "POST",
      body: JSON.stringify(register),
      headers: headers,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == "error") {
          showOverlay1();
        } else {
          signupModal.style.display = "none";
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
  var emailInput = document.getElementById("signemail");
  var passwordInput = document.getElementById("signpassword");

  if (emailInput.value === "" || passwordInput.value === "") {
    showOverlay1();
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
          signinModal.style.display = "none";
          toggleLetsStartButton();
        }
      });
  }
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

function toggleLetsStartButton() {
  var letsStartButton = document.querySelector(".btn.active");

  if (
    signupModal.style.display === "none" &&
    signinModal.style.display === "none"
  ) {
    letsStartButton.style.display = "block";
    signupBtn.style.display = "none";
    signinBtn.style.display = "none";
  } else {
    letsStartButton.style.display = "none";
  }
}

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
//
// Our Team-member's Section

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false,
  isAutoPlay = true,
  startX,
  startScrollLeft,
  timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens
  .slice(-cardPerView)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach((card) => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
  });
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  // Records the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

const infiniteScroll = () => {
  // If the carousel is at the beginning, scroll to the end
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }
  // If the carousel is at the end, scroll to the beginning
  else if (
    Math.ceil(carousel.scrollLeft) ===
    carousel.scrollWidth - carousel.offsetWidth
  ) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }

  // Clear existing timeout & start autoplay if mouse is not hovering over carousel
  clearTimeout(timeoutId);
  if (!wrapper.matches(":hover")) autoPlay();
};

const autoPlay = () => {
  if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
  // Autoplay the carousel after every 2500 ms
  timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500);
};
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

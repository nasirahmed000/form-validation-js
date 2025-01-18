// // js page active startted
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// dark /light  started

document.addEventListener("DOMContentLoaded", function () {
  // Check for saved user preference or use default
  const isDarkMode = localStorage.getItem("darkMode") === "enabled";

  // Set initial mode based on user preference
  document.body.classList.toggle("dark-mode", isDarkMode);

  // Event listener for the mode toggle button
  const modeToggleBtn = document.getElementById("modeToggleBtn");
  modeToggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    document.getElementById("modeJ").classList.toggle("Whitecolor");
    document.getElementById("modeK").classList.toggle("Whitecolor");
    document.getElementById("ourActivity").classList.toggle("Whitecolor");
    document.getElementById("ourActivity2").classList.toggle("Whitecolor");
    document.getElementById("ourActivity3").classList.toggle("Whitecolor");
    document.getElementById("ourActivity4").classList.toggle("Whitecolor");
    // Save user preference
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.setItem("darkMode", "disabled");
    }
  });
});

// form started
function submitForm() {
  // Get form values
  // var name = document.getElementById('name').value;
  // var email = document.getElementById('email').value;
  // var phone = document.getElementById('phone').value;
  // var message = document.getElementById('message').value;

  // Display submitted data
  var submittedDataDiv = document.getElementById("submittedData");

  document.querySelectorAll(".error").forEach(function (element) {
    element.innerHTML = "";
  });

  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  // Validate each field
  var isValid = true;

  if (name.trim() === "") {
    document.getElementById("nameError").innerHTML = "Name is required";
    isValid = false;
  }

  if (email.trim() === "" || !isValidEmail(email)) {
    document.getElementById("emailError").innerHTML = "Valid email is required";
    isValid = false;
  }

  if (phone.trim() === "" || !isValidPhone(phone)) {
    document.getElementById("phoneError").innerHTML =
      "Valid phone number is required";
    isValid = false;
  }

  if (message.trim() === "") {
    document.getElementById("messageError").innerHTML = "Message is required";
    isValid = false;
  }

  // If all fields are valid, submit the form
  if (isValid) {
    // submitForm();

    submittedDataDiv.innerHTML = `
            <h3>Submitted Data:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong> ${message}</p>
        `;
  } else {
    submittedDataDiv.innerHTML = "";
  }

  function isValidEmail(email) {
    // Simple email validation, you may want to use a more robust method
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isValidPhone(phone) {
    // Simple phone validation, you may want to use a more robust method
    var phoneRegex = /^\d{11}$/;
    return phoneRegex.test(phone);
  }
}

// go top startted

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



const delegate = document.getElementById('malefemalecontainer') // get the delegate element (ancestor);
delegate.addEventListener( // add an event listener to the delegate
    'change', // listening for change event bubbling up
    function() { // function that handles the change when it occurs
      const isMale = delegate.querySelector('input:checked').value === 'm'; // test if male is checked
      document.getElementById('divwife').hidden = !isMale; // if isMale, hide wife
      document.getElementById('divhus').hidden = isMale; // if not isMale, hide husband
    }
);


function showForm() {
  const additionalInfo = document.getElementById('additionalInfo');
  additionalInfo.classList.remove('hidden');
}

document.getElementById('genderForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;

  document.getElementById('outputName').innerText = `Name: ${name}`;
  document.getElementById('outputEmail').innerText = `Email: ${email}`;
  document.getElementById('outputGender').innerText = `Gender: ${gender}`;

  const outputDiv = document.getElementById('output');
  outputDiv.classList.remove('hidden');
});








// // form validate
// function validateForm() {
//     // Reset previous error messages
//     document.querySelectorAll('.error').forEach(function (element) {
//         element.innerHTML = '';
//     });

//     // Get form values
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var phone = document.getElementById('phone').value;
//     var message = document.getElementById('message').value;

//     // Validate each field
//     var isValid = true;

//     if (name.trim() === '') {
//         document.getElementById('nameError').innerHTML = 'Name is required';
//         isValid = false;
//     }

//     if (email.trim() === '' || !isValidEmail(email)) {
//         document.getElementById('emailError').innerHTML = 'Valid email is required';
//         isValid = false;
//     }

//     if (phone.trim() === '' || !isValidPhone(phone)) {
//         document.getElementById('phoneError').innerHTML = 'Valid phone number is required';
//         isValid = false;
//     }

//     if (message.trim() === '') {
//         document.getElementById('messageError').innerHTML = 'Message is required';
//         isValid = false;
//     }

//     // If all fields are valid, submit the form
//     if (isValid) {
//         submitForm();
//     }
// }
// nasir ahmed

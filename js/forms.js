/*
function validate() {
var userName = document.getElementById('userName');
console.log(userName);
if(!userName.value) {
  userName.style.border = "2px solid red";
  alert("Please enter a name to submit the form.")
  return false
}
return true
}
*/

var form = document.querySelector('.js-form'),
    formInputs = document.querySelectorAll('.js-input'),
    inputEmail = document.querySelector('.js-input-email'),
    inputPhone = document.querySelector('.js-input-phone');

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    var re = /^[0-9\s]*$/;
    return re.test(String(phone));
}

form.onsubmit = function () {
    var emailVal = inputEmail.value,
        phoneVal = inputPhone.value,
        emptyInputs = Array.from(formInputs).filter(function (input) {
        return input.value === '';
    });

    formInputs.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    if (emptyInputs.length !== 0) {
        console.log('inputs not filled');
        alert("Please fill in all fields");
        return false;
    }

    if (!validateEmail(emailVal)) {
        console.log('email not valid');
        alert("Please enter a valid email");
        inputEmail.classList.add('error');
        return false;
    } else {
        inputEmail.classList.remove('error');
    }

    if (!validatePhone(phoneVal)) {
        console.log('phone not valid');
        alert("Please enter a valid phone number");
        inputPhone.classList.add('error');
        return false;
    } else {
        inputPhone.classList.remove('error');
    }
};

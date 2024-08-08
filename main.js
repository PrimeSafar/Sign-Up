const passwordError = document.querySelector('#passwordError')
const password = document.querySelector('#password2')
const confirmPassword = document.querySelector('#confirmPassword')
const ErrorPasswordLength = document.querySelector('.ErrorPasswordLength')
password.addEventListener('input', function () {
    if (password.value.length < 8) {
        ErrorPasswordLength.textContent = 'Password must be at least 8 characters long.'
    } else {
        ErrorPasswordLength.textContent = ''
    }
})


confirmPassword.addEventListener('input', function () {
    if (password.value !== confirmPassword.value) {
        passwordError.textContent = 'Passwords do not match.'
        passwordError.style.color = 'red'
    } else {
        passwordError.textContent = 'Passwords it is  match.'
        passwordError.style.color = 'green'

    }
})
const ErrorEmail = document.querySelector('.ErrorEmail')

email.addEventListener('input', function () {
    let re = /\S+@\S+\.\S+/;
    if (!re.test(email.value)) {
        ErrorEmail.textContent = 'Please enter a valid email address.'
        ErrorEmail.style.color = 'red'
    } else {
        ErrorEmail.textContent = 'Correct Email address'
        ErrorEmail.style.color = 'green'
    }
})
const number = document.querySelector('.phonenumber')
const ErrorNumber = document.querySelector('.ErrorNumber')

number.addEventListener('input', function () {
    let re = /^\d{11}$/;
    if (!re.test(number.value)) {
        ErrorNumber.textContent = 'Please enter a valid phone number.'
        ErrorNumber.style.color = 'red'
    } else {
        ErrorNumber.textContent = 'Correct Phone number'
        ErrorNumber.style.color = 'green'
    }
})
const firstNAME = document.querySelector('.firstNAME')
const ErrorName = document.querySelector('.ErrorFirstName')

firstNAME.addEventListener('input', function () {
    if (firstNAME.value.length < 4) {
        ErrorName.textContent = 'Name must be at least 4 characters long.'
    } else {
        ErrorName.textContent = ''
    }
})
const lastName = document.querySelector('.lastNAME')
const ErrorLastName = document.querySelector('.ErrorLastName')

lastName.addEventListener('input', function () {
    if (lastName.value.length < 4) {
        ErrorLastName.textContent = 'Name must be at least 4 characters long.'
    } else {
        ErrorLastName.textContent = ''
    }
})

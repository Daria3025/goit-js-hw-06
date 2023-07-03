const loginForm = document.querySelector('.login-form');

loginForm.addEventListener("submit", OnSubmit);
function OnSubmit(evt) {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;
    if (!email.value || !password.value) {
        alert('All fields must be filled!')
    } else {
        const data = {
        email: email.value,
        password: password.value,
    };
        console.dir(data);
    }
    evt.currentTarget.reset();
}
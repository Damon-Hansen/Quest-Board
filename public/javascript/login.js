async function loginFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#validationServer01').value.trim();
    const password = document.querySelector('#validationServerUsername').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            window.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#validationServer01').value.trim();
    const email = document.querySelector('#validationServer02').value.trim();
    const password = document.querySelector('#validationServerUsername').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
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

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
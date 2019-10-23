export const userService = {
    login,
    register,
};
const url = "https://restapi1612036.herokuapp.com/api";
function login(name, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, password })
    };

    return fetch(url + '/login', requestOptions)
        .then(response => {
            localStorage.setItem('token', JSON.stringify(response.token));

            return response;
        });
}
function register(name, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, password })
    };

    return fetch(url + '/register', requestOptions)
        .then(response => {
            localStorage.setItem('token', "OK");
            return response;
        });
}


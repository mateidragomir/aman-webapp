import { userService } from '../services';

function login(username, password) {
    const loginReq = Promise.resolve(userService.login(username, password));

    loginReq.then( value => {
        if (value.wasSuccessful) {
            const user = {
                username: username,
                data: value.data,
            }
            localStorage.setItem('user', JSON.stringify(user));
        }
    });
}

function logout() {
    const logoutReq = Promise.resolve(userService.logout());

    logoutReq.then( value => {
        if (value.wasSuccessful) {
            localStorage.removeItem('user');
        }
    });
}

export const userAction = {
    login,
    logout,
};
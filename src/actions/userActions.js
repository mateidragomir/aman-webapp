import { userService } from '../services';

function login(username, password) {
    const loginReq = userService.login(username, password);
    console.log(loginReq);
    if (loginReq.wasSuccessful) {
        const user = {
            username: username,
            data: loginReq.data,
        }
        console.log(user);
        localStorage.setItem('user', JSON.stringify(user));
    }
}

function logout() {
    const logoutReq = userService.logout();
    if (logoutReq.wasSuccessful) {
        localStorage.removeItem('user');
    }
}

export const userAction = {
    login,
    logout,
};
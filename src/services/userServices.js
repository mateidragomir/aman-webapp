import { apiAction } from './fakeApiActions';

const AUTH_ENPOINT = "auth";

function login(username, password) {
    const data = {
        qualified:  username,
        password:   password,
    };
    const perform = "login";
    let loginReq;

    const callback = (response) => {
        if (response.code === 200) {
            loginReq = {
                wasSuccessful:  true,
                data:           response.data,
            }
        } else if (response.code === 409) {
            loginReq = {
                wasSuccessful:  false,
                msg:            response.errorMessage,
            }
        } else {
            loginReq = {
                wasSuccessful:  false,
                msg:            "Error",
            }
        }
    };

    apiAction.post(AUTH_ENPOINT, perform, data, callback);

    return loginReq;
}

function logout() {
    const data = {

    };
    const perform = "logout";
    let logoutReq;

    const callback = (response) => {
        if (response.code === 200) {
            logoutReq = {
                wasSuccessful:  true,
                data:           response.data,
            }
        } else {
            logoutReq = {
                wasSuccessful:  false,
                msg:            response.errorMessage,
            }
        }
    }

    apiAction.post(AUTH_ENPOINT, perform, data, callback);

    return logoutReq;
}

export const userService = {
    login,
    logout,
}
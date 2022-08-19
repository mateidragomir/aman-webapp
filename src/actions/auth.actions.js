import { apiAction } from "../services";

const AUTH_ENPOINT = "auth";

const login = (parms, callback) => {
    const data = {
        qualified:  parms.username,
        password:   parms.password,
    };
    const perform = "login";

    const onApiSuccess = (response) => {
        let req;
        switch (response.code) {
            case 200:
                req = {
                    wasSuccessful: true,
                    data: response.data,
                }
                break;
            case 409:
                req = {
                    wasSuccessful: false,
                    msg: response.errorMessage, 
                }
                break;
            default:
                req = {
                    wasSuccessful: false,
                    msg: response.errorMessage,
                }
        }
        callback(req);
    }

    apiAction.post(AUTH_ENPOINT, perform, data, onApiSuccess)
}

const logout = (parms, callback) => {
    const data = {

    };
    const perform = "logout";

    const onApiSuccess = (response) => {
        let req;
        switch (response.code) {
            case 200:
                req = {
                    wasSuccessful: true,
                    data: response.data,
                }
                break;
            case 409:
                req = {
                    wasSuccessful: false,
                    msg: response.errorMessage, 
                }
                break;
            default:
                req = {
                    wasSuccessful: false,
                    msg: response.errorMessage,
                }
        }
        callback(req);
    }
    apiAction.post(AUTH_ENPOINT, perform, data, onApiSuccess)
}

export const authActions = {
    login,
    logout,
}
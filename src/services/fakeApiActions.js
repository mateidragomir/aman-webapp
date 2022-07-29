function post(endpoint, perform, data, callback) {
    let response;
    switch (endpoint) {
        case 'auth':
            switch (perform) {
                case 'login':
                    if (data.qualified === "yes" && data.password === "yes") {
                        response = {
                            code: 200,
                            data: {

                            }
                        }
                    } else {
                        response = {
                            code: 409,
                            errorMessage: "invalid username or password",
                            data: {

                            }
                        }
                    }
                    break;
                case 'logout':
                    response = {
                        code: 200,
                        errorMessage: "You have successfully logged out.",
                        data: {

                        }
                    }
                    break;

            }
            break;

    }
    callback(response);
    
}

function get(endpoint, callback) {
    post(endpoint, null, null, callback);
}

export const apiAction = {
    post,
    get,
}
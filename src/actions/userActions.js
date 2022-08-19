import { userService } from '../services';

function login(username, password, state) {
    const loginReq = Promise.resolve(userService.login(username, password));

    loginReq.then( value => {
        let user = state;
        if (value.wasSuccessful) {
            user = {
                role: 'USER',
                username: username,
                isLoading: false,
			    isError: false,
                data: value.data,
            }
        } else {
            user = state;
            user.isError = true;
            user.errorMsg = value.msg;
        }
		localStorage.setItem('user', JSON.stringify(user));
		return user;
    });
}

function logout(state) {
    const logoutReq = Promise.resolve(userService.logout());

    logoutReq.then( value => {
		let user = state;
		user.isLoading = true;
        if (value.wasSuccessful) {
            user = {
                role: 'ANONYMOUS',
				isLoading: false,
				isError: false,
            }
        } else {
			user = state;
			user.isError = true;
            user.errorMsg = value.msg;
		}
		localStorage.setItem('user', JSON.stringify(user));
		return user;
    });
}

export const userAction = {
    login,
    logout,
};
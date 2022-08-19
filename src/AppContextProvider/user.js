const defaultUser = {
    role: 'ANONYMOUS',
	isLoading: true,
}

function userInit() {
    let user = JSON.parse(localStorage.getItem('user'));
	if (!user) {
		user = {
			role: 'ANONYMOUS',
			isLoading: false,
		}
        localStorage.setItem('user', JSON.stringify(user));
	}
	return user;
}

export { defaultUser, userInit };
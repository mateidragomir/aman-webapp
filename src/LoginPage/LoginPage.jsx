import React, { useContext, useState} from "react";

import '../App.css';
import { AppContext } from '../AppContextProvider';

// class LoginPage extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             username: '',
//             password: '',
//             submitted: false
//         };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(e) {
//         const { name, value } = e.target;
//         this.setState({ [name]: value });
//     }

//     handleSubmit(e) {
//         e.preventDefault();

//         this.setState({ submitted: true });
//         const { username, password } = this.state;
//         if (username && password) {
//             userAction.login(username, password);
//         }
//     }

//     render() {
//         const { username, password, submitted } = this.state;
//         return (
//             <div className="prompt">
//                 <h2>Login</h2>
//                 <form name="form" onSubmit={this.handleSubmit}>
//                     <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
//                         <label htmlFor="username">Username</label>
//                         <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
//                         {submitted && !username &&
//                             <div className="help-block">Username is required</div>
//                         }
//                     </div>
//                     <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
//                         <label htmlFor="password">Password</label>
//                         <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
//                         {submitted && !password &&
//                             <div className="help-block">Password is required</div>
//                         }
//                     </div>
//                     <div className="form-group">
//                         <input type="submit" value="login" />
//                     </div>
//                 </form>
//                 <button onClick={() => {userAction.logout()}}>Logout</button>
//             </div>
//         );
//     }
// }

function LoginPage() {
    const { login, logout } = useContext(AppContext.Actions);

    const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [submitted, setSubmitted] = useState(false);
	
	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
		if (username && password) {
			login({
				username,
				password,
			}, (loginReq) => {});
		}
	}

	const handleLogout = () => {
		logout({ }, (logoutReq) => {});
	}
    
    return(
        <div className='prompt'>
			<h2>Login</h2>
			<form name="form" onSubmit={handleSubmit}>
				<div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
					<label htmlFor="username">Username</label>
					<input type="text" className="form-control" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
					{submitted && !username &&
						<div className="help-block">Username is required</div>
					}
				</div>
				<div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
					<label htmlFor="password">Password</label>
					<input type="password" className="form-control" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
					{submitted && !password &&
						<div className="help-block">Password is required</div>
					}
				</div>
				<div className="form-group">
					<input type="submit" value="login" />
				</div>
			</form>
			<button onClick={handleLogout}>Logout</button>
		</div>
    );
}

export { LoginPage };
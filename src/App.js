import $ from 'jquery';
import React, { useEffect, useState } from 'react';
import './App.css';

const API_URL = "https://api.imgflip.com/get_memes"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        role: "anonymous",
        username: "",
        signIn: (username, role) => {
          this.setState({
            user: {
              role: role,
              username: username,
            }
          });
        },
        signOut: () => {
          this.setState({
            user: {
              role: "anonymous",
              username: "",
            }
          });
        },
        isLoggedIn: () => {
          const user = this.state.user;
          return user.role === "" || user.role === "anonymous" ? false : true;
        }
      },
      // user: new User("anonymous"),
      page: "login"
    }
  }

  signIn(username, role) {
    this.setState({
      user: {
        role: role,
        username: username,
      }
    });
  }

  signOut

  // page() {
  //   let page;
  //   switch(this.state.page) {
  //     case "login":
  //       page = <LoginPrompt onSignIn={(username, role) => {
  //         user.signIn(username, role);
  //         this.forceUpdate();
  //       }} />
  //       break;
  //     case "order entry":
        
  //   }
  // }

  render() {
    const user = this.state.user;
    return (
      <div className="app">
        <Topbar user={user}/>
        <div className="sidebar">
          <h1>sidebar</h1>
        </div>
        <div className="main">
          <h1>main</h1>
          <LoginPrompt onSignIn={(username, role) => {
            user.signIn(username, role);
          }} />
        </div>
      </div>
    );
  }
}

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      role: "anonymous",
      username: ""
    }
    //TODO more user data is probably needed
  }

  signIn(username, role) {
    this.role = role;
    this.username = username;
  }

  signOut() {
    this.role = "anonymous";
    this.username = "";
  }

  isLoggedIn() {
    return this.role === "" || this.role === "anonymous" ? false : true;
  }
}

// function call(endpoint, perform, data, callback) {
// 	data.perform = perform;
// 	$.ajax({
// 		type: 'POST',
// 		url: "/api/" + endpoint,
// 		data: data,
// 		success: callback
// 	});
// }

function call(endpoint, callback) {
  $.ajax({
    type: 'GET',
    url: endpoint,
    success: callback
  });
}

class LoginPrompt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      msg: "",
    }
  }

  auth() {
    if (this.state.username === "" || this.state.password === "") {
      this.setState({ msg: "Please provide username and password" });
    } else {
      if (this.state.username === "yes" && this.state.password === "yes") {
        this.props.onSignIn(this.state.username, "user");
      } else {
        this.setState({ msg: "incorrect or password" })
      }
    }
  };

  render() {
    return (
      <div className="prompt" >
        <div className="center">
          <h1>Magic Market Manager</h1>
          <input
            placeholder="Username"
            type="text"
            value={this.username}
            id="username"
            onChange={e => this.setState({ username: e.target.value, })}></input>
          <input
            placeholder="Password"
            type="password"
            value={this.password}
            id="password"
            onChange={e => this.setState({ password: e.target.value, })}></input>
          <button onClick={() => { this.auth() }}>Sign In</button>
        </div>
        <p>{this.state.msg}</p>
      </div>
    );
  }
}

class Topbar extends React.Component {
  render() {
    const user = this.props.user;
    return (
      <div className='topbar'>
        {user.isLoggedIn() ?
          <>
            <h1>{user.username}</h1>
            <button onClick={() => { console.log(user.isLoggedIn()) }}>Log out</button>
          </> :
            <button onClick={() => { console.log(user) }}>Log in</button>}
      </div>
    )
  }
}


class OrderEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //TODO figure out whats supposed to go here
    }
  }

  render() {
    //TODO 
    return (
      <div className="container">
        <div className="prompt">
          add inputs
        </div>
        <div className="container">
          add some table
        </div>
      </div>
    )
  }
}

export default App;

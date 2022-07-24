import $ from 'jquery';
import React, { useEffect } from 'react';
import './App.css';

const API_URL = "https://api.imgflip.com/get_memes"

function App() {
    return (
      <div className="app">
        <div className="topbar">
          <h1>topbar</h1>
        </div>  
        <div className="sidebar">
          <h1>sidebar</h1>
        </div>
        <div className="main">
          <h1>main</h1>
          <LoginPrompt/>
        </div>
      </div>
    );
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
    console.log(this.state.username);
    console.log(this.state.password);
    if (this.state.username === "" || this.state.password === "") {
      this.setState({msg: "Please provide username and password"});
      console.log(this.state.msg);
    }
  };
  
  render() {
    return (
      <div className="prompt" >
        <div className="center">
          <h1>Magic Market Manager</h1>
          <input 
              placeholder="Username" 
              type="text" value={this.username} 
              onChange={e => this.setState({username: e.target.value,})}></input>
          <input 
              placeholder="Password" 
              type="password" value={this.password} 
              onChange={e => this.setState({password: e.target.value,})}></input>
          <button onClick={() => {this.auth()}}>Sign In</button>
        </div>
        <p>{this.state.msg}</p>
      </div>
    );
  }
}

class Topbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    
    if (!this.props.isLoggedIn) {
      return(
        <div className='topbar'>
          <button onClick={() => {this.props.onClick()}}> sign in</button>
        </div>
      );
    }
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

import React from 'react';
import { Link } from 'react-router-dom';


class SessionButtons extends React.Component{
  constructor(props){
    super(props)
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
    this.handleDropDown = this.handleDropDown.bind(this);
    this.state = { open: false }
  }

  handleSignUp(e){

    e.preventDefault();
    this.props.setSessionUI("signup");
  }

  handleDropDown(e){

    e.preventDefault();
    this.setState({open: true})

  }

  handleGuestLogin(e){

    e.preventDefault();
    this.props.login({username: "guest", password: "password"});
  }

  handleLogin(e){

    e.preventDefault();
    this.props.setSessionUI("login");
    //displays session form
  }

  handleLogout(e){
    e.preventDefault();
    this.props.logout();
  }

  // <span className="session-button">
  //   <button onClick={this.handleLogout}>Log Out</button>
  // </span>

  render(){

    //house sign in login log out
    if (this.props.loggedIn){
      return(

        <div className="avatar" onClick={this.handleDropDown}>
          <div className={this.state.open ? "active session-button" : "hidden"} >
            <button onClick={this.handleLogout}>Log Out</button>
          </div>
        </div>

      );
    } else {
      return(
      <span className="session-button">
        <span >
          <button onClick={this.handleLogin}>Log In</button>
        </span>
        <span >
          <button onClick={this.handleSignUp}>Sign Up</button>
        </span>
        <span >
          <button onClick={this.handleGuestLogin}>Guest Login</button>
        </span>
      </span>

      );
    }

  }//render




}//classend

export default SessionButtons;

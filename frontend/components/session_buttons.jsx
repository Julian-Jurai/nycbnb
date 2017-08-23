import React from 'react';
import { Link } from 'react-router-dom';


class SessionButtons extends React.Component{
  constructor(props){
    super(props)
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  handleSignUp(e){
    debugger
    e.preventDefault()
    this.props.setSessionUI("signup")
  }

  handleGuestLogin(e){
    debugger
    e.preventDefault()

    this.props.login({username: "guest", password: "password"})
  }

  handleLogin(e){
    debugger
    e.preventDefault()
    this.props.setSessionUI("login")
    //displays session form
  }

  handleLogout(e){
    e.preventDefault()
    this.props.logout()
  }


  render(){
    debugger
    //house sign in login log out
    if (this.props.loggedIn){
      return(
        <span className="session-button">
          <button onClick={this.handleLogout}>Log Out</button>
        </span>
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
    debugger
  }//render

  //test
  // <button onClick={this.handleLogin}>Log In</button>
  // <button onClick={this.handleSignUp}>Sign Up</button>
  //testends


}//classend

export default SessionButtons;
// const sessionLinks = () => (
//   <div>
//     <h1>Welcome</h1>
//     <nav>
//       <button id="session-button">Login</button>
//       <button id="session-button">Sign up</button>
//     </nav>
//   </div>
// );
//
// const personalGreeting = (currentUser, logout) => (
// 	<div>
//     <h2>Hi, {currentUser.username}!</h2>
//     <button onClick={logout}>Log Out</button>
// 	</div>
// );
//
// const HomeIndex = ({ currentUser, logout }) => (
//   currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
// );

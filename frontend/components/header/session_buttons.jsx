import React from 'react';
import { Link } from 'react-router-dom';


class SessionButtons extends React.Component{
  constructor(props){
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
    this.handleDropDown = this.handleDropDown.bind(this);
    this.state = { open: false };
  }


  handleSignUp(e){

    e.preventDefault();
    this.props.setSessionUI("signup");
  }

  handleDropDown(e){
    e.preventDefault();
    const nextState = !this.state.open;
    this.setState({open: nextState});

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
    this.setState({ open: false });
    this.props.logout();

  }

  // <span className="session-button">
  //   <button onClick={this.handleLogout}>Log Out</button>
  // </span>

  render(){

  // <div className="avatar session-button" onClick={this.handleDropDown}></div>
// use img tag instead for session button
    //house sign in login log out
    if (this.props.loggedIn){
      return(

        <div className ="dropdown">
          <span className="session-button">
            <button >Become a Host</button>

            <button>
              <Link to={`/${this.props.currentUser.id}/trips`}>Trips</Link>
            </button>
          </span>

          <img src={window.images.avatar} className="avatar session-button" onClick={this.handleDropDown}></img>
        <div className={this.state.open ? "session-button-background" : "hidden"} onClick={this.handleDropDown} >
          <ul className={this.state.open ? "pullDown active " : "hidden"} onClick={ (e) => e.stopPropagation() } >
            <li id="demo-logout" onClick={this.handleLogout}>Log Out</li>
            <li onClick={this.handleLogout}>Log Out</li>
            <li onClick={this.handleLogout}>Log Out</li>
            <li onClick={this.handleLogout}>Log Out</li>
            <li onClick={this.handleLogout}>Log Out</li>
            <li onClick={this.handleLogout}>Log Out</li>
          </ul>
        </div>
        </div>
      );
    } else {
      return(
      <div className="session-button">
        <span >
          <button>Become a Host</button>
        </span>
        <span >
          <button>Help</button>
        </span>
        <span >
          <button onClick={this.handleLogin}>Log In</button>
        </span>
        <span >
          <button onClick={this.handleSignUp}>Sign Up</button>
        </span>
        <span >
          <button id="demo-login" onClick={this.handleGuestLogin}>Guest Login</button>
        </span>
      </div>

      );
    }
  }//render




}//classend

export default SessionButtons;


// const autoLogin = () => {
//
//   setInterval(()=>{
//     demoLogin = document.getElementById("demo-login");
//     demoLogout = document.getElementById("demo-logout");
//
//     if (demoLogin){
//       demoLogin.click()
//     } else {
//       demoLogout.click()
//     }
//
//   },5000);
//
// };

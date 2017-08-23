import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { LOGOUT } from '../actions/session_buttons_actions'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleX = this.handleX.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleX(e){
    debugger
  return  this.props.resetSessionUI(false)
  }///doesnt work!!

  handleCloseModal(e){

  }


  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    const processFrom = this.props.session_ui === "login" ? this.props.login : this.props.signup
    debugger
    processFrom(user).then(
        ()=>this.props.resetSessionUI(false),
        ()=>this.renderErrors()
    );
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }



  renderErrors(){
    const errors = this.props.errors ? this.props.errors : []
    return(
      <ul>
        {errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }



  render(){
    debugger
    let className;
    if (Boolean(this.props.session_ui) === false )  { className="hidden" } else {
      className = "session-form";
    }
    debugger//sessionform
    let pageName;
    this.props.session_ui === "login" ? pageName = "Log in to continue" : pageName = "Sign Up";
    // className = "session-form"///////////css test
    return(

        <div className={`${className}-background`} onClick={this.handleCloseModal}>
          <span className={`${className}  modal`} onClick={ (e) => e.stopPropagation(); } >
            <button className="x-button" onClick={this.handleX}>&#10005;</button>
            <form onSubmit={this.handleSubmit}>
              <h1>{pageName}</h1>
              <input
                type="text"
                onChange={this.update('username')}
                placeholder="Username"
                />
              <input
                type="text"
                onChange={this.update('password')}
                placeholder="password"
                />
              <input className="session-form-submit" type="submit" value="Submit" />
            </form>
              <p>Don't have an account? Sign Up</p>
            {this.renderErrors()}
          </span>
        </div>

    );
  }

}//classends

export default SessionForm;

// let className;
// this.props.loggedIn ? className="hidden" : className="session-form"
//
// let pageName;
// this.props.formType === "login" ? pageName = "Log in to continue" : pageName = "Sign Up";
// return(
//   <div className="session-form">
//     <h4>{pageName}</h4>
//     <form onSubmit={this.handleSubmit}>
//       <input
//         type="text"
//         onChange={this.update('username')}
//         placeholder="Username"
//         />
//       <input
//         type="text"
//         onChange={this.update('password')}
//         placeholder="password"
//         />
//       <input className="session-form-submit" type="submit" value={this.props.formType} />
//
//     </form>
//     {this.renderErrors()}
//   </div>

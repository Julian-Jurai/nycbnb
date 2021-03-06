import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { LOGOUT } from '../../actions/session_buttons_actions';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      resetToken: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleX = this.handleX.bind(this);

  }

  handleX(e){
    this.setState({
      username: '',
      password: ''
    });
    this.props.resetSessionUI(false);
    this.props.clearSesssionErrors();
  }


  handleSubmit(e) {
    this.setState({
      username: '',
      password: ''
    });
    e.preventDefault();
    const user = this.state;
    const processFrom = this.props.session_ui === "login" ? this.props.login : this.props.signup;

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



  renderErrors(resetToken){
    let errors = this.props.errors ? this.props.errors : [];
    if (resetToken) { errors = []; }


    return(
      <ul >
        {errors.map((error, i) => (
          <li id="error" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }



  render(){

    let className;
    if (Boolean(this.props.session_ui) === false )  { className="hidden"; } else {
      className = "session-form";
    }

    let pageName;
    this.props.session_ui === "login" ? pageName = "Log in to continue" : pageName = "Sign Up";
    // className = "session-form"///////////css test

    return(

        <div className={`${className}-background`} onClick={this.handleX}>
          <span className={`${className}  modal`} onClick={ (e) => e.stopPropagation() } >
            <button className="x-button" onClick={this.handleX}>&#10005;</button>
            <form onSubmit={this.handleSubmit}>
              <h1>{pageName}</h1>

              <div className="session-form-input-container">
                <input
                  type="text"
                  onChange={this.update('username')}
                  placeholder="Username"
                  value={this.state.username}
                  />
                <i className="fa fa-user-o" aria-hidden="true"></i>
              </div>



              <div className="session-form-input-container">
                <input
                  type="password"
                  onChange={this.update('password')}
                  placeholder="password"
                  value={this.state.password}
                />
              <i className="fa fa-lock" aria-hidden="true"></i>
              </div>

              <button className="session-form-submit" type="submit"> Submit </button>
            </form>

            {this.renderErrors()}
          </span>
        </div>

    );
  }

}//classends

export default SessionForm;

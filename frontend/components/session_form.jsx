import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processFrom(user);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  renderErrors(){
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

//submit the form disappears

  render(){
    return(
    <div className="session-form">
      <form onSubmit={this.handleSubmit}>
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
        <input className="session-form-submit" type="submit" value={this.props.formType} />

      </form>
        {this.renderErrors()}
    </div>
    );
  }

}//classends

export default SessionForm;

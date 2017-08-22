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
    //
  }

//submit the form disappears

  render(){
    return(
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
      <input type="submit" value={this.props.formType} />

      </form>
    );
  }

}//classends

export default SessionForm;

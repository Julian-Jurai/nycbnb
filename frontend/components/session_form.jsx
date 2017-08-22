class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit() {

  }

  update(field){
    (e) => this.setState([field]: e.currentTarget.value);
  }

  renderErrors(){

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

      <input type="submit" value="Submit" />

      </form>
    );
  }

}

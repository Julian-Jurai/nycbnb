import React from 'react';

import { withRouter, Link } from 'react-router-dom';

class BookingForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      start_date: "",
      end_date: "",
      currentHome: this.props.currentHome
    };

    this.handleCheckIn = this.handleCheckIn.bind(this);
    this.handleCheckOut = this.handleCheckOut.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCheckIn(e){
    e.preventDefault();
    console.log(e.currentTarget.value);
    this.setState({start_date: e.currentTarget.value});
  }

  handleCheckOut(e){
    e.preventDefault();
    console.log(e.currentTarget.value);
    this.setState({end_date: e.currentTarget.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.setBookingUI(this.state);
    this.props.history.push("/booking");
    //redirect to page
  }

  render(){

    return(
      <div className="booking-form">

        <div>
          <span>From</span>
          <span className="booking-form-price">{this.props.price}</span>
          <span>per night</span>
        </div>

        <form>

          <div>
            <div>Check In</div>
            <input type="date" onChange={this.handleCheckIn}/>
          </div>

          <div>
            <div>Check In</div>
            <input type="date" onChange={this.handleCheckOut}/>
          </div>

          <div>
            <div>Guests</div>
              <select>
                <option value="guest">1 Guest</option>
                <option value="guest">2 Guests</option>
                <option value="guest">3 Guests</option>
                <option value="guest">4 Guests</option>
                <option value="guest">5 Guests</option>
                <option value="guest">6 Guests</option>
                <option value="guest">7 Guests</option>
                <option value="guest">8 Guests</option>
                <option value="guest">9 Guests</option>
                <option value="guest">10 Guests</option>
                <option value="guest">11 Guests</option>
                <option value="guest">12 Guests</option>
                <option value="guest">13 Guests</option>
                <option value="guest">14 Guests</option>
              </select>
          </div>


          <button onClick={this.handleSubmit}> Request a Book</button>
          <p> 100% refundable. You won't be charged yet</p>

        </form>
      </div>
    );
  }//renderends


}//classEnds

export default BookingForm;

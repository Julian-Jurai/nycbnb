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
    this.setState({start_date: e.currentTarget.value});
  }

  handleCheckOut(e){
    e.preventDefault();
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

        <div className="booking-form-heading">
          <span>From </span>
          <span id="booking-form-price">  ${this.props.currentHome.price}</span>
          <span> per night</span>
        </div>

      <div className="booking-form-body">
        <form>
          <div className="booking-form-date">
            <div>
              <div >Check In</div>

              <input type="date"  id="booking-date" placeholder="Check In" onChange={this.handleCheckIn}/>
            </div>

            <div>
              <div>Check In</div>
              <input type="date" id="booking-date" placeholder="Check Out" onChange={this.handleCheckOut}/>
            </div>
          </div>
          <div className="booking-form-guests">
            <div id="booking-form-guests" >Guests</div>
              <select >
                <option selected value="guest">1 Guest</option>
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
        </form>

        <p> 100% refundable. You won't be charged yet</p>
      </div>
    </div>
    );
  }//renderends


}//classEnds

export default BookingForm;

import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import { isEmpty } from 'lodash';




class BookingPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      booking: {
        start_date: this.props.booking_ui.start_date,
        end_date: this.props.booking_ui.end_date,
        user_id: this.props.currentUser.id,
        homes_id: this.props.booking_ui.currentHome.id
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e){

    e.preventDefault();
    createBooking(this.state.booking);
    this.props.history.push(`/${this.props.currentUser.id}/trips`);
  }


// <input type="checkbox">Bring a pet? </input>
  render() {
//fix direct link to with if statement to redirect to homes page

    return(
    <div className="booking_page_container">
      <div className="booking-page-details">
        <h3>About Your Trip</h3>

        <div className="booking-form-guests">
          <p> Who's coming</p>
          <div id="booking-form-guests" ></div>
            <select >
              <option selected="selected" value="guest">1 Guest</option>
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

        <div className="booking-checkbox">
          <input id="checkBox" type="checkbox"></input>
          <p>Bringing a pet?</p>
        </div>

        <div className="booking-textarea">
          <p>Say hello to your host and tell them why you're coming:</p>
          <textarea
            rows="10"
            cols="60"
            placeholder="Visting family or
            friends? Seeing the sights?
            This helps your host plan for
            your trip"
          />
        </div>


        <h3>Review house rules</h3>
        <ul>
          <li>No smoking</li>
          <li>No parties or events</li>
          <li>Check in time is flexible</li>
          <li>Avoid making to much noise</li>
          <li>Be respectful to the neighbors</li>
        </ul>
        <button className="booking-page-book-button" onClick={this.handleSubmit}>Book</button>
      </div>

      <div className="booking-page-summary">
        <img src={this.props.booking_ui.currentHome.image}></img>
        <div className="booking-page-summary-details">
          <div className="booking-page-summary-header">
            <h2>{this.props.booking_ui.currentHome.title}</h2>
            <p >{this.props.booking_ui.currentHome.room_type}</p>
            <p >{this.props.booking_ui.currentHome.address}</p>
          </div>

          <div className="checkin-dates">
            <div>
              <p>Check-in</p>
              <h4>{this.props.booking_ui.start_date}</h4>
            </div>

            <div>
              <p>Check-out</p>
              <h4>{this.props.booking_ui.start_date}</h4>
            </div>
          </div>

          <div className="total">
            <h4>Total</h4>
            <h4>${this.props.booking_ui.currentHome.price}</h4>
          </div>

          <div className="disclaimer">
            <p>Contact your local bank for information about the current exhange rate</p>
          </div>
        </div>
      </div>


    </div>

    );



  }//renderends

}//classEnds


export default BookingPage;

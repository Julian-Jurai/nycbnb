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
    debugger
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
        <div>About Your Trip</div>

        <div className="booking-form-guests">
          <div id="whos-coming">Who's coming</div>
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

        <div>
          <input id="checkBox" type="checkbox"></input>
          <div>Bringing a pet?</div>
        </div>

        <div>Say hello to your host and tell them why you're coming:</div>
        <textarea
          rows="4"
          cols="50"
          placeholder="Visting family or
          friends? Seeing the sights?
          This helps your host plan for
          your trip"
        />

        <div>Review house rules</div>
        <ul>
          <li>No smoking</li>
          <li>No parties or events</li>
          <li>Check in time is flexible</li>
          <li>Avoid making to much noise</li>
          <li>Be respectful to the neighbors</li>

          <li>
            Any damage or losses caused during the Rental Period,
            as well as any special cleaning requirements will be
            the Guest's responsibility. In cases of excessive or
            unacceptable loss or damage at any time during the Rental
            Period,the Owner or Owner's Representative may require the
            Guest and their party, including visitors to vacate the
            Property immediately, without compensation or refund.
            Smoking is only allowed down stairs outside. Smoking inside
            the bedrooms, kitchen and especially upstairs is absolutely
            forbidden.
          </li>
        </ul>
        <button className="booking-page-book-button" onClick={this.handleSubmit}>Book</button>
      </div>
      <div className="booking-page-summary">
        <img src={this.props.booking_ui.currentHome.image}></img>
        <div className="page-summary-title">{this.props.booking_ui.currentHome.title}</div>
        <div className="page-summary-room_type">{this.props.booking_ui.currentHome.room_type}</div>
        <div className="checkin-dates">
            <div>
              <div>Check-in</div>
              <div className="page-summary-room_type">{this.props.booking_ui.start_date}</div>
            </div>
            <div>
              <div>Check-out</div>
              <div className="page-summary-room_type">{this.props.booking_ui.start_date}</div>
            </div>
        </div>
        <div>
          <div>Total</div>
          <div>${this.props.booking_ui.currentHome.price}</div>
        </div>

        <div>
          <div>Contact your local bank for information about the current exhange rate</div>
        </div>
      </div>
    </div>
    );



  }//renderends

}//classEnds


export default BookingPage;

import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import { isEmpty } from 'lodash';




import BookingFormContainer from './../booking/booking_form_container';



class HomesDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {dataFetched: false};
  }


  componentDidMount(){
    //loading screen dispatched > data is fetched loading stopped(state changes)
    window.setTimeout(() => this.setState({dataFetched: true}), 1000);
  }


  componentWillMount(){
    const homeId = this.props.match.params.homeId;
    if (Object.keys(this.props.homes).length <= 1){
      this.props.fetchAllHomes()
        .then(() => this.props.fetchSingleHome(homeId));
    } else {
      this.props.fetchSingleHome(homeId);
    }

  }



  render() {

    const homeId = parseInt(this.props.match.params.homeId);
    const currentHome = this.props.homes[homeId];

    if (this.state.dataFetched){
      return(

        <div className="home-detail-container">
          <img src={currentHome.image} />
          <div className="home-detail">
            <div className="home-detail-items">

                <div id="home-detail-heading">
                  <div className="home-detail-title">{currentHome.title}</div>
                  <div className="home-detail-address">{currentHome.address}</div>
                </div>

                <div>
                  Image
                </div>


                <div>
                  <h3> About this listing</h3>
                  <div>{currentHome.description}</div>
                </div>

                <div>
                  <h4> The space </h4>
                  <p>Accomodates: {currentHome.guests}:</p>
                  <p>Bedrooms: {currentHome.bedrooms}</p>
                  <p>Beds: {currentHome.beds}</p>
                  <p>Room type: {currentHome.room_type}</p>
                </div>

                <div>
                  <h4> Ammenities</h4>
                  <div>{currentHome.kitchen ? "Kitchen" : "" } </div>
                  <div>{currentHome.internet ? "Internet" : "" } </div>
                  <div>{currentHome.family ? "Family Friendly" : "" } </div>
                  <div>{currentHome.tv ? "Tv" : "" } </div>
                  <div>{currentHome.essentials ? "Essentials" : "" } </div>
                </div>

                <div>
                  <h4> Prices </h4>
                    <p>Cleaning Fee:</p>
                    <p>Monthly Discount:</p>
                    <p>Weekly Discount:</p>
                    <p>Weekend Price:</p>
                </div>

                <div>
                  <h4> House Rules </h4>
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
                </div>

                <div>
                  <h4> Cancellations </h4>
                  <p>
                    Cancel up to 5 days before check in and get a full
                    refund (minus service fees). Cancel within 5 days of
                    your trip and the first night is non-refundable, but
                    50% of the cost for the remaining nights will be
                    refunded. Service fees are refunded when cancellation
                    happens before check in and within 48 hours of booking.
                  </p>
                </div>

                <div>
                  <h4> Safety features </h4>
                  <p>Smoke detector</p>
                  <p>Fire extinguisher</p>
                </div>

                <div>
                  <h4> Availability </h4>
                  <p>2 nights minimum stay</p>
                </div>



            </div>
            <BookingFormContainer currentHome={currentHome} />
          </div>
        </div>

      );
    } else if (!this.state.dataFetched) {
      return(
        <div className="loading">
          <img src={window.images.loading} ></img>
        </div>
      );
    }

  }

}//classEnds


export default HomesDetail;



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

                <div className="home-detail-image-summary">
                  <div className="home-detail-image-summary-items">
                    <i className="fa fa-home fa-2x" aria-hidden="true" ></i>
                    <p>{currentHome.room_type}</p>
                  </div>

                  <div className="home-detail-image-summary-items">
                    <i className="fa fa-users fa-2x" aria-hidden="true" ></i>
                    <p>{currentHome.guests} guests</p>
                  </div>

                  <div className="home-detail-image-summary-items">
                    <i className="fa fa-cubes fa-2x" aria-hidden="true" ></i>
                    <p>{currentHome.bedrooms} bedrooms</p>
                  </div>

                  <div className="home-detail-image-summary-items">
                    <i className="fa fa-bed fa-2x" aria-hidden="true" ></i>
                    <p>{currentHome.beds} beds</p>
                  </div>

                </div>


                <div className="home-detail-sub-item">
                  <h3> About this listing</h3>
                  <p>{currentHome.description}</p>
                </div>

                <div className="home-detail-sub-item">
                  <h4> The space </h4>
                  <p>Accomodates: {currentHome.guests}:</p>
                  <p>Bedrooms: {currentHome.bedrooms}</p>
                  <p>Beds: {currentHome.beds}</p>
                  <p>Room type: {currentHome.room_type}</p>
                </div>

                <div className="home-detail-sub-item">
                  <h4> Ammenities</h4>

                  <div id="ammenities-icon">
                    <i className="fa fa-cutlery" aria-hidden="true"></i>
                    <p>Kitchen</p>
                  </div>

                  <div id="ammenities-icon">
                    <i className="fa fa-wifi" aria-hidden="true"></i>
                    <p>Wireless Internet</p>
                  </div>

                  <div id="ammenities-icon">
                    <i className="fa fa-child" aria-hidden="true"></i>
                    <p>Kid friendly</p>
                  </div>

                  <div id="ammenities-icon">
                    <i className="fa fa-television" aria-hidden="true"></i>
                    <p>Television </p>
                  </div>
                </div>

                <div className="home-detail-sub-item">
                  <h4> Prices </h4>
                    <p>Cleaning Fee:</p>
                    <p>Monthly Discount:</p>
                    <p>Weekly Discount:</p>
                    <p>Weekend Price:</p>
                </div>

                <div className="home-detail-sub-item">
                  <h4> House Rules </h4>
                    <p>- No smoking</p>
                    <p>- No parties or events</p>
                    <p>- Check in time is flexible</p>
                    <p>- Avoid making to much noise</p>
                    <p>- Be respectful to the neighbors</p>
                    <br></br>
                    <br></br>
                    <p>
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
                    </p>

                </div>

                <div className="home-detail-sub-item">
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

                <div className="home-detail-sub-item">
                  <h4> Safety features </h4>
                  <p>Smoke detector</p>
                  <p>Fire extinguisher</p>
                </div>

                <div className="home-detail-sub-item" id="last-home-detail-el">
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

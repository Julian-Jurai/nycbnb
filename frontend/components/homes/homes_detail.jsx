import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import { isEmpty } from 'lodash';




import BookingFormContainer from './../booking/booking_form_container';
import ReviewItem from './review_item';


class HomesDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {dataFetched: false, editFormOpen:false, body: "", rating: 0};
    this.handleEditForm = this.handleEditForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleEditForm(e){
    e.preventDefault();
    this.setState({editFormOpen: !this.state.editFormOpen}); //button is hidden
  }

  handleChange(e){
    e.preventDefault();
    this.setState({body: e.currentTarget.value});
  }

  handleSubmit(e){
    e.preventDefault();
    let review = {
      homes_id: parseInt(this.props.match.params.homeId),
      user_id: this.props.currentUser.id,
      body: this.state.body,
      rating: 1,
    };
    debugger
    this.props.createReviewForHome(review);
    //dispatch thunk action to create review and return all review
    this.setState({body: "", rating: 0});
  }


  componentDidMount(){
    const homeId = this.props.match.params.homeId;

    if (Object.keys(this.props.homes).length <= 1){
      this.props.fetchAllHomes()
        .then(() => this.props.fetchSingleHome(homeId))
        .then(() => this.props.fetchReviewsForHome(homeId));
    } else {
      this.props.fetchSingleHome(homeId)
      .then(() => this.props.fetchReviewsForHome(homeId));
    }
    //loading screen dispatched > data is fetched loading stopped(state changes)
    window.setTimeout(() => this.setState({dataFetched: true}), 1000);
  }

  // componentDidMount(){ NOTE: what is the order of execution
  //   const homeId = this.props.match.params.homeId;
  //   const loadingScreen = () => (window.setTimeout(() => this.setState({dataFetched: true}), 1000));
  //
  //   if (Object.keys(this.props.homes).length <= 1){
  //     this.props.fetchAllHomes()
  //       .then(() => this.props.fetchSingleHome(homeId));
  //       loadingScreen();
  //       // .then(() => this.props.fetchAllReviewsForHome(homeId));
  //   } else {
  //     this.props.fetchSingleHome(homeId).then(loadingScreen);
  //     // .then(() => this.props.fetchAllReviewsForHome(homeId));
  //   }
  //   //loading screen dispatched > data is fetched loading stopped(state changes)
  // }

  componentWillMount(){
    const homeId = this.props.match.params.homeId;

    if (Object.keys(this.props.homes).length <= 1){
      this.props.fetchAllHomes()
        .then(() => this.props.fetchSingleHome(homeId))
        .then(() => this.props.fetchAllUserTrips(this.props.currentUser.id));
    } else {
      this.props.fetchSingleHome(homeId)
      .then(() => this.props.fetchAllUserTrips(this.props.currentUser.id));
      // .then(() => this.props.fetchAllReviewsForHome(homeId));
    }
  }



  render() {
    debugger
    const homeId = parseInt(this.props.match.params.homeId);
    const currentHome = this.props.homes[homeId];
    let editButtonOption;
    let editFormOption;
    let inUsersTrips;
    //NOTE: reviews are fetchde in jbuidler homes show
    const reviews = Object.values(this.props.reviews_ui).map((review) => (
    <ReviewItem review={review}/>
    ));


    if (this.props.loggedIn) {
      debugger
      // why not use trips_ui???
       if (this.props.currentUser.homes){ //array [{home}];
       let prevTrips = this.props.currentUser.homes;
       let prevTripsIds = prevTrips.map( home => (home.id));
       inUsersTrips =  prevTripsIds.includes(homeId);
       }
    } else
    inUsersTrips = false;
///////////////////////////////
    // if (this.props.loggedIn) {
    //   debugger
    //   // why not use trips_ui???
    //    if (this.props.trips_ui){ //array [{home}];
    //    let prevTrips = this.props.trips_ui;
    //    let prevTripsIds =
    //       Object.values(prevTrips)
    //       .map( home => (home.id));
    //    inUsersTrips =  prevTripsIds.includes(homeId);
    //    }
    // } else
    // inUsersTrips = false;
/////////////////////////////////


    if (this.props.loggedIn && !this.state.editFormOpen && inUsersTrips) {
      editButtonOption = "create-review-button";
    } else editButtonOption = "hidden";

    if (this.props.loggedIn && this.state.editFormOpen && inUsersTrips) {
      editFormOption = "display-edit-form";
    } else editFormOption = "hidden";

    debugger

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

                <div className="home-detail-sub-item flex-and-space-beteen">
                  <h4> The space </h4>
                  <div id="listed-feats">
                    <p>Accomodates: {currentHome.guests}:</p>
                    <p>Bedrooms: {currentHome.bedrooms}</p>
                    <p>Beds: {currentHome.beds}</p>
                    <p>Room type: {currentHome.room_type}</p>
                  </div>
                </div>

                <div className="home-detail-sub-item">
                  <h4> Ammenities</h4>
                  <div className="ammenities">
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
                </div>

                <div className="home-detail-sub-item">
                  <div className="flex-and-space-beteen">
                    <h4> Prices </h4>
                    <div id="listed-feats">
                      <p>Cleaning Fee:</p>
                      <p>Monthly Discount:</p>
                      <p>Weekly Discount:</p>
                      <p>Weekend Price:</p>
                    </div>
                  </div>
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
                  <div id="safety-devices">
                    <p>Smoke detector</p>
                    <p>Fire extinguisher</p>
                  </div>
                </div>

                <div className="home-detail-sub-item" id="last-home-detail-el">
                  <h4> Availability </h4>
                  <p>2 nights minimum stay</p>
                </div>

                {reviews}
                <button className={editButtonOption} onClick={this.handleEditForm}>Write review</button>

                <div className={`${editFormOption}-background`}>
                  <form className="edit-form">
                    <input type="text" placeholder="Write your review" onChange={this.handleChange}></input>
                    <button onClick={this.handleSubmit}>Submit review</button>
                  </form>
                </div>
          </div>
            <BookingFormContainer currentHome={currentHome} />
          </div>
        </div>

      );
    } else if (!this.state.dataFetched) {
      return(
        <div className="loading-background" >
          <div className="loading">
            <img src={window.images.loading} ></img>
          </div>
        </div>
      );
    }

  }

}//classEnds


export default HomesDetail;

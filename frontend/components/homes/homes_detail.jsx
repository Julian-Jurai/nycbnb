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

            <div>
              <div id="home-detail-heading">
                <div className="home-detail-title">{currentHome.title}</div>
                <div className="home-detail-address">{currentHome.address}</div>
              </div>

              <div>
                <div>{currentHome.description}</div>
                <div>{currentHome.description}</div>
                <div>{currentHome.description}</div>
                <div>{currentHome.description}</div>
                <div>{currentHome.description}</div>
                <div>{currentHome.description}</div>
                <div>{currentHome.description}</div>
                <div>{currentHome.description}</div>
                <div>{currentHome.description}</div>
                <div>{currentHome.description}</div>
                <div>{currentHome.description}</div>
                <div>{currentHome.description}</div>
                <div>{currentHome.description}</div>
                <div>{currentHome.description}</div>
                <div>{currentHome.description}</div>
                <div>{currentHome.description}</div>
                <div>{currentHome.description}</div>
                <div>{currentHome.description}</div>
                <div>{currentHome.description}</div>
                <div>{currentHome.lat}</div>
                <div>{currentHome.long}</div>
                <div>{currentHome.bedrooms}</div>
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

import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import { isEmpty } from 'lodash';


import BookingFormContainer from './booking_form_container';



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
      debugger
      return(
        <div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div>title: {currentHome.address}</div>
          <div>description: {currentHome.description}</div>
          <div>address: {currentHome.address}</div>
          <div>latitude: {currentHome.lat}</div>
          <div>longitude: {currentHome.long}</div>
          <div>bedrooms: {currentHome.bedrooms}</div>

          <BookingFormContainer
            currentHome={currentHome}
          />
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

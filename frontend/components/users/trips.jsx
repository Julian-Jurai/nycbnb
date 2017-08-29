import React from 'react';
import { Link } from 'react-router-dom';
import { uniqBy } from 'lodash';

import {TripItem} from './trips_item';



class Trips extends React.Component {
  constructor(props){
    super(props);
    this.state = {dataFetched: false};
  }

  // componentDidMount(){
  //   window.setTimeout(() => this.setState({dataFetched: true}), 1000);
  // }


  componentDidMount(){
    debugger
    this.props.fetchAllUserTrips(this.props.currentUser.id);
  }

  render() {

    let tripItems = (
      Object.values(this.props.trips).map(home => {

        return <TripItem key={home.id} home={home} />;
      })
    );

    if (tripItems.length > 0){
      return (
        <div className="trips">
          <h1>Past Trips</h1>
          <div className="trips-trip-items">
            {tripItems}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1>You have no trips yet</h1>
          <div>
            <img src={window.images.no_trips}></img>
          </div>
        </div>
      );
    }

  }

}//classEnds


export default Trips;

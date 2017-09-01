import React from 'react';
import { Link } from 'react-router-dom';
import { uniqBy } from 'lodash';

import {TripItem} from './trips_item';



class Trips extends React.Component {
  constructor(props){
    super(props);
    this.state = {dataFetched: false};
  }

  componentDidMount(){

    this.props.fetchAllUserTrips(this.props.currentUser.id);
  }


  // componentWillMount(){
  //   this.props.fetchAllUserTrips(this.props.currentUser.id);
  // }

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
        <div className="notrips">
          <div>
            <img id="notrips" src={window.images.notrips}></img>
          </div>
        </div>
      );
    }

  }

}//classEnds


export default Trips;

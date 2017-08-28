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
    this.props.fetchAllUserTrips(this.props.currentUser.id);
  }

  render() {
    debugger
    let tripItems = (
      Object.values(this.props.trips).map(home => {
        debugger
        return <TripItem key={home.id} home={home} />;
      })
    );

    debugger
    if (tripItems.length > 0){

      return (
        <div>
          <div>Past Trips</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>
            {tripItems}
          </div>
          <div>User's trips</div>
        </div>
      );
    } else {
      return (
        <div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div>
            NO TRIPS BRA
          </div>
          <br></br>
          <br></br>
        </div>
      );
    }

  }

}//classEnds


export default Trips;

import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import { isEmpty } from 'lodash';


import HomesIndexItem from './homes_index_item';



class HomesDetail extends React.Component {
  constructor(props){
    super(props);

  }


  componentWillMount(){
    const homeId = this.props.match.params.homeId;
    if (Object.keys(this.props.homes).length <= 1){
      this.props.fetchAllHomes().then(this.props.fetchSingleHome(homeId));
    } else {
      this.props.fetchSingleHome(homeId);
    }

  }



  render() {

    const homeId = parseInt(this.props.match.params.homeId);
    // const currentUser =
    const currentHome = this.props.homes[homeId];
    debugger
    return(
      <div>

        <div className="home-details">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div>HomesDetailPage</div>
        </div>
      </div>
    );
  }

}//classEnds


export default HomesDetail;

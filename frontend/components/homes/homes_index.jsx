import React from 'react';
import { Link } from 'react-router-dom';
import HomesIndexItem from './homes_index_item';

import MarkerManager from '../../util/marker_manager';

class HomesIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {dataFetched: false};
  }


  componentDidMount(){
    window.setTimeout(() => this.setState({dataFetched: true}), 1000);
  }


  componentWillMount(){
    this.props.fetchAllHomes();
  }


  render() {

    let allHomes;

    if (this.state.dataFetched){

      allHomes = this.props.homes.map(
        home => ( <HomesIndexItem home={home} />)
      );

      return(
        <div className="home-index">
                {allHomes}
        </div>
      );
    } else {
      return(
        <div className="loading">
          <img src={window.images.loading}></img>
        </div>
      );
    }
  }

}//classEnds


export default HomesIndex;

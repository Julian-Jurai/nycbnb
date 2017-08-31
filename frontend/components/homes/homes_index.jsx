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
    let searched = [];

    if (this.state.dataFetched){

      allHomes = this.props.homes.map(
        home => ( <HomesIndexItem home={home} />)
      );

      // if (this.props.search_ui){
      //
      //   searchedHomes = this.props.homes.map(
      //     home => {
      //
      //       if (home.address.startsWith(this.props.search_ui))
      //        return (<HomesIndexItem home={home} />);
      //      }
      //   );
      //
      // }


      return(
        <div className="home-index">
          {this.props.search_ui ? searched : allHomes}
        </div>
      );
    } else {
      return(
        <div className="loading-background" >
          <div className="loading">
            <img src={window.images.loading}></img>
          </div>
        </div>
      );
    }
  }

}//classEnds


export default HomesIndex;

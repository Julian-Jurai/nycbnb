import React from 'react';
import { Link } from 'react-router-dom';
import HomesIndexItem from './homes_index_item';


class HomesIndex extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){

    this.props.fetchAllHomes();

  }

  render() {

    let allHomes;
    if (this.props.homes){
      allHomes = this.props.homes.map(
        home => (<HomesIndexItem home={home} />)
      );

  } else ( allHomes = [<li></li>]);


    return (
      <div className="home-index">
          {allHomes}
      </div>

    );

  }//render end



}//classEnds


export default HomesIndex;

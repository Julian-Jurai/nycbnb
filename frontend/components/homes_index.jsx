import React from 'react';
import { Link } from 'react-router-dom';
import HomesIndexItem from './homes_index_item';


class HomesIndex extends React.Component {
  constructor(props){
    super(props);
    debugger
  }

  componentDidMount(){
    debugger
    this.props.fetchAllHomes();

  }

  render() {
    debugger
    let allHomes;
    if (this.props.homes){
      allHomes = this.props.homes.map(
        home => (<HomesIndexItem home={home} />)
      );
    debugger
    } else ( allHomes = [<li></li>])


    return (
      <div>
        <h1>HomesIndex</h1>
        <ul>
          {allHomes}

        </ul>
      </div>

    );

  }//render end



}//classEnds


export default HomesIndex

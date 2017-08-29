import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import { isEmpty } from 'lodash';

import Map from './map';
import HomesIndexContainer from '../homes/homes_index_container';




class Search extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Map homes={this.props.homes} updateFilter={this.props.updateFilter}/>
        <HomesIndexContainer />
      </div>
    );
  }

}


export default Search;

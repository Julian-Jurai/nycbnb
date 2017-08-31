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
      <div className="homes-page-container-map">
        <HomesIndexContainer />
        <Map
          filter={this.props.filter}
          homes={this.props.homes}
          updateFilter={this.props.updateFilter}
          updateSearch={this.props.updateSearch}
          search_ui={this.props.search_ui}
        />
      </div>
    );
  }

}


export default Search;

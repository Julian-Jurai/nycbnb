import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import { isEmpty } from 'lodash';



class Map extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div id="map-container" ref="map"></div>
    );
  }

}

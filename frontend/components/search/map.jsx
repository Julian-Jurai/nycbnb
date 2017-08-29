import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import { isEmpty } from 'lodash';

import MarkerManager from '../../util/marker_manager.js';



class Map extends React.Component {
  constructor(props){
    super(props);

    this.registerListener = this.registerListener.bind(this);
  }

  componentDidMount(){
    const mapOptions = {
      center: { lat: 40.746569, lng: -73.987085},
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.homes);
    this.registerListener();
  }

  componentWillReceiveProps(newProps){
    this.MarkerManager.updateMarkers(newProps.homes);
  }

  registerListener(){
    google.maps.event.addListener(this.map, 'idle', () => {

      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
         northEast: { lat:north, lng: east },
         southWest: { lat: south, lng: west } };

      this.props.updateFilter(bounds);
    });
  }

  searchAddress() {
    var addressInput = document.getElementById('address-input').value;
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({address: addressInput}, function(results, status) {

      if (status == google.maps.GeocoderStatus.OK) {
        //fetch
      }
    });

  }


  render(){
    return(
      <div id="map-container" ref="map">
        <div id= "map" ref={map => this.mapNode = map} />
      </div>
    );
  }//render


}//classname

export default Map;

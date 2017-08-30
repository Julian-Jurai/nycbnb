import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import { isEmpty } from 'lodash';

import MarkerManager from '../../util/marker_manager.js';



class Map extends React.Component {
  constructor(props){
    super(props);
    // this.searchAddress = this.searchAddress.bind(this);
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


  var input = document.getElementById('search-button');
  var autocomplete = new google.maps.places.Autocomplete(input);


  autocomplete.addListener('place_changed', () => {

    // marker.setVisible(false);

    let place = autocomplete.getPlace();
    if (!place.geometry) {
      document.getElementById('search-button').innerHTML="No details available for input: '" + place.name + "'";
      return;
    }

  //   // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      this.map.fitBounds(place.geometry.viewport);
    } else {
      this.map.setCenter(place.geometry.location);
      this.map.setZoom(17);
    }

  });



  }

  componentWillReceiveProps(newProps){
    // this.searchAddress();
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


  //
  // searchAddress() {
  //   let addressInput = this.props.search_ui;
  //   let geocoder = new google.maps.Geocoder();
  //   debugger
  //   geocoder.geocode({address: addressInput}, function(results, status) {
  //     debugger
  //     if (status == google.maps.GeocoderStatus.OK) {
  //       let latlng = {
  //         lat: results[0].geometry.location.lat(),
  //         lng: results[0].geometry.location.lng()
  //       };
  //       debugger
  //       this.map.setCenter(latlng);
  //     }
  //   });
  //
  // }



  render(){
    return(
      <div id="map-container" ref="map">
        <div id= "map" ref={map => this.mapNode = map} />
      </div>
    );
  }//render


}//classname

export default Map;

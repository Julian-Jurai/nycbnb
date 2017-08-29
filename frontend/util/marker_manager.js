
class MarkerManager {
  constructor(map){
    this.map = map;
    this.markers = {};
    this.createMarkerFromHome = this.createMarkerFromHome.bind(this);
    this.removeMarker = this.removeMarker.bind(this);

  }

  updateMarkers(homes){
    let homesObj = {};
    Object.keys(this.markers).forEach(homeId => {
      if (!homes[homeId]){
        this.removeMarker(this.markers[homeId]);
      }
    });

    Object.values(homes).forEach( home => {
      if (!this.markers[home.id]){
        this.createMarkerFromHome(home);
      }
    });

  }

  removeMarker(marker){
    this.markers[marker.homeId].setMap(null);
    delete this.markers[marker.homeId];
  }

  createMarkerFromHome(home){
    const position = new google.maps.LatLng(home.lat, home.long);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      homeId: home.id
    });

    // marker..addListener('click', ()=> this.handleClick(home) )
    this.markers[marker.homeId] = marker;
  }


}

export default MarkerManager;

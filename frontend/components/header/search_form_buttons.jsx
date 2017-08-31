import React from 'react';
import { Link } from 'react-router-dom';


class SearchFormButtons extends React.Component{
  constructor(props){
    super(props);

    this.handleSearch =  this.handleSearch.bind(this);

  }

  handleSearch(e){
    e.preventDefault();
    // this.props.updateSearch(e.currentTarget.value);
  }

  // <input type="text" name="search" id="search-button" placeholder="Anywhere" onChange={this.handleSearch}/>

  render(){
    let displayOption;
    if (this.props.location.pathname == "/homes") {
      displayOption = "";
    } else { displayOption = "hidden";}
    return(

      <div className={"search-form-button"} id="address-input">

        <div  className="logo" >
          <Link to="/"><img src={window.images.logo} /></Link>
        </div>

        <div className={`search-form-button-container ${displayOption}`}>


          <div className="anywhere-searchbutton" >
            <input type="text" name="search" id="search-button" placeholder="Anywhere" onChange={this.handleSearch}/>
          </div>



          <select>
            <option selected="selected" value="guest">1 Guest</option>
            <option value="guest">2 Guests</option>
            <option value="guest">3 Guests</option>
            <option value="guest">4 Guests</option>
            <option value="guest">5 Guests</option>
            <option value="guest">6 Guests</option>
            <option value="guest">7 Guests</option>
            <option value="guest">8 Guests</option>
            <option value="guest">9 Guests</option>
            <option value="guest">10 Guests</option>
            <option value="guest">11 Guests</option>
            <option value="guest">12 Guests</option>
            <option value="guest">13 Guests</option>
            <option value="guest">14 Guests</option>
          </select>

        </div>
      </div>



    );
  }

}//class ends

export default SearchFormButtons;

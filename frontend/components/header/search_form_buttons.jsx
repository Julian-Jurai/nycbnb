import React from 'react';
import { Link } from 'react-router-dom';


class SearchFormButtons extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return(

      <div className="search-form-button">
        <div  className="logo" >
          <Link to="/"><img src={window.images.logo} /></Link>
        </div>
        <div className="anywhere-searchbutton">
          <input type="text" name="search" placeholder="Anywhere" />
        </div>
        <div className="when-calender-button">
          <input id="date" type="date" />
        </div>
        <div className="guest-button">
          <input type="text" />
        </div>
        <div className="anywhere-searchbutton">

        </div>
      </div>



    );
  }

}//class ends

export default SearchFormButtons;

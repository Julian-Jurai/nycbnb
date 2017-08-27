import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import { isEmpty } from 'lodash';




class BookingPage extends React.Component {
  constructor(props){
    super(props);
    debugger
    this.state = {dataFetched: false};
  }

  render() {
    return(
      <div>
        <div>About Your Trip</div>
        <input type="checkbox">Bring a pet? </input>
        <div>Say hello to your host and tell them why you're coming:</div>
        <textarea
          rows="4"
          cols="50"
          placeholder="Visting family or friends? Seeing the sights? This helps your host plan for your trip"
        />
      <div>Review house rules</div>
      <ul>
        <li>No parties or events</li>
        <li>Check in time is flexible</li>
        <li>No smoking</li>
        <li>Avoid making to much noise</li>
        <li>Be respectful to the neighbors</li>
        <li>Any damage or losses caused during the Rental Period,
           as well as any special cleaning requirements will be
          the Guest's responsibility. In cases of excessive or unacceptable
          loss or damage at any time during the Rental Period,
          the Owner or Owner's Representative may require the Guest and their
         party, including visitors to vacate the Property immediately, without
         compensation or refund. Smoking is only allowed down stairs outside.
         smoking inside the bedrooms, kitchen and especially upstairs is absolutely
          forbidden.</li>

      </ul>





      </div>
    );

  }//renderends

}//classEnds


export default BookingPage;

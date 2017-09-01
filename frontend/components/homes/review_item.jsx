import React from 'react';
import { Link } from 'react-router-dom';


class ReviewItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {editFormOpen: false, body: this.props.review.body};
    this.handleEditForm = this.handleEditForm.bind(this);
    this.handleDeleteReview = this.handleDeleteReview.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  // updateReviewForHome: (review) => dispatch(updateReviewForHome(review)),
  // deleteReview: (reviewId) => dispatch(deleteReview(reviewId))

  handleEditForm(e){

    e.preventDefault();
    this.setState({editFormOpen: (!this.state.editFormOpen)});


    let radnom;


  }

  handleUpdate(e){
    debugger
    e.preventDefault();
    let review = {
      id: this.props.review.id,
      homes_id: this.props.review.homes_id,
      // user_id: this.props.currentUser.user.id,
      user_id: this.props.currentUser.id,
      body: this.state.body,
      rating: 1,
    };
    debugger
    this.props.updateReviewForHome(review);
    this.setState({editFormOpen: false, body: this.state.body});
    debugger
  }

  handleDeleteReview(e){
    e.preventDefault();
    this.props.deleteReview(this.props.review.id);
  }

  handleChange(e){
    e.preventDefault();
    this.setState({body: e.currentTarget.value});
  }



  render(){
    debugger
    let editFormClass;
    let editButtonClass;
    let bodyClass;

    //editFormClass
    this.state.editFormOpen  ? ( editFormClass = "show-edit-form") : (editFormClass = "hidden")


    //editButtonClass
    if (this.props.currentUser){
      debugger
      // if (this.props.currentUser.user.id === this.props.review.user.id) {
      if (this.props.currentUser.id === this.props.review.user.id) {
        editButtonClass =  "edit-buttons";
      }
    } else { editButtonClass =  "hidden"; }

    //bodyClass
    this.state.editFormOpen ? ( bodyClass = "hidden") : (bodyClass = "show-body")


    // let randNum =  Math.floor(Math.random() * (20 - 1) + 1);
    let stars = [];
    let num = this.props.review.rating;
    for (var i = 0; i < num; i++) {
      stars.push(<i className="fa fa-star" aria-hidden="true"></i>);
    }

    return (
      <div className="review-item">
        <div className="review-item-edit-delete">
          <div className="review-item-edit-">

          </div>
          <div className="review-item-delete">

          </div>

        </div>

        <div className="review-item-header">
          <div className="review-item-header-right">
            <img src={this.props.review.user.image} id="user-avatar"></img>
            <div>
              <p>{this.props.review.user.username}</p>
              <p>{this.props.review.updated_at}</p>
              <p>{this.props.review.user.rating}</p>
              <span id="stars" className="user-reviews">
                { stars }
              </span>
            </div>
          </div>

          <div className="review-item-header-left">
            <i className="fa fa-flag-o" aria-hidden="true">{` Report `}</i>

            <i className="fa fa-thumbs-o-up helpful" aria-hidden="true">
              <span>{`  Helpful `}</span>
              <span id="helpful">{` ${this.props.review.id}`}</span>
            </i>

          </div>
        </div>

        <div>
          <div className={bodyClass}>
            <p className="review-body">{this.props.review.body}</p>
          </div>

          <div className={editFormClass}>
              <textarea
                rows="8"
                cols="40"
                value={this.state.body}
                onChange={this.handleChange}
              />
            <button onClick={this.handleUpdate}>Update review</button>
          </div>
        </div>

        <div className={editButtonClass}>
          <i className="fa fa-pencil" aria-hidden="true" onClick={this.handleEditForm}></i>
          <i className="fa fa-trash" aria-hidden="true" onClick={this.handleDeleteReview}></i>
        </div>
      </div>
    );
  }


}//classends

export default ReviewItem;

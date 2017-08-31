class Api::ReviewsController < ApplicationController

  def index

    @reviews = Review.where(
      homes_id: params[:home_id]
    )
    render "api/reviews/index"

  end


  def create

    @review = Review.new(review_params)
    if @review.save!
      render "api/reviews/show"
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def show
    @reviews = Review.where(
      user_id: params[:user_id],
      homes_id: params[:home_id]
    )
    render "api/reviews/show"
  end

  def destroy
    @review = Review.find(params[:id])
    if @review
      @review.destroy
      render "api/reviews/show"
    else
      render json: ["Deletion failed"], status: 422
    end

  end

  def update
    @review = Review.find(params[:id])
    if @review.update(review_params)
      render "api/reviews/show"
    else
      render json: ["Update Failed"], status: 422
    end
  end


  def review_params
    params.require(:review).permit(
    :user_id,
    :homes_id,
    :body,
    :rating
    )
  end

end

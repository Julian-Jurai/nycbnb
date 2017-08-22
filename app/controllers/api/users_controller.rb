class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
  end


#loggin test method
  def index
    @user = current_user
    if @user
      render "api/users/show"
    else
      render json: ["User not logged in"]
    end
  end


  private

  #update user params to accomodate fname, lname, email
  def user_params
    params.require(:user).permit(:username, :password)
  end


end

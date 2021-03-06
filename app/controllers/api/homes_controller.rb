class Api::HomesController < ApplicationController

  def index

    @homes = params[:bounds] ? Home.in_bounds(params[:bounds]) : Home.all
      render "api/homes/index"
      # handle errors

  end

  def show

    @home = Home.find(params[:id])
    if @home
      render "api/homes/show"
    else
      render json: @home.errors.full_messages, status: 422
    end

  end

  def create
    @home = Home.new(homes_params)
    if @home.save
      render "api/homes/show"
    else
      render json: @home.errors.full_messages, status: 422
    end
  end


  def homes_params
    params.require(:user).permit(
      :host_id,
      :title,
      :description,
      :lat,
      :long,
      :address,
      :price,
      :room_type,
      :bedrooms,
      :guests,
      :beds,
      :kitchen,
      :internet,
      :family,
      :tv,
      :essentials
    )
  end

end

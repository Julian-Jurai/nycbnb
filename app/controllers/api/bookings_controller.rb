class Api::BookingsController < ApplicationController

  def index

    if params[:user_id]
      @bookings = Booking.where(user_id: params[:user_id])
      render "api/bookings/index"
    elsif params[:home_id]
      @bookings = Booking.where(homes_id: params[:home_id])
      render "api/bookings/index"
    else render json: ["No bookings found"], status: 422
    end
    # handle errors
  end




  def create
    #Date format is 'yyyy-mm-dd' do not parse!

    @booking = Booking.new(booking_params)
    if @booking.save
      render "api/bookings/show"
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def show
      @bookings = Booking.where(
        user_id: params[:user_id],
        homes_id: params[:home_id]
      )
  end

  def destroy

    @booking = Booking.find(params[:id])
    if @booking
      @booking.destroy
      render json: ["Booking sucessfully deleted"]
    else
      render json: ["No booking found"], status: 422
    end

  end


  def booking_params
    params.require(:booking).permit(
    :user_id,
    :homes_id,
    :start_date,
    :end_date
    )
  end

end

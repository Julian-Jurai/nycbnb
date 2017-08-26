@bookings.each do |booking|
  json.set! booking.id do
    json.extract! booking,
    :user_id,
    :homes_id,
    :start_date,
    :end_date
  end
end

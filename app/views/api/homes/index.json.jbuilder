
@homes.each do |home|
  json.set! home.id do
    json.extract! home,
      :title,
      :host_id,
      :description,
      :lat,
      :long,
      :address,
      :price,
      :room_type,
      :beds
  end
end

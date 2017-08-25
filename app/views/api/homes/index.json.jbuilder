
@homes.each do |home|

  json.set! home.id do

    json.extract! home,
      :id,
      :title,
      :host_id,
      :description,
      :lat,
      :long,
      :address,
      :price,
      :room_type,
      :beds,
      :image
  end
end

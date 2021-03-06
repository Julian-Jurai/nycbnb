
@homes.each do |home|

  json.set! home.id do
    json.image home.image.url
    json.thumb home.image.url(:thumb)
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
      :beds
  end
end

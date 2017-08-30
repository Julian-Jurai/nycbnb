json.extract! @home,
  :id,
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

json.reviews  @home.reviews.map do |review|
  json.partial! "api/reviews/review", review: review
end

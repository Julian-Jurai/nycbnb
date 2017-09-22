

@reviews.each do |review|

  json.set! review.id do
    json.partial! "api/reviews/review", review: review
    json.username review.user.username
    json.image review.user.image.url
  end
end

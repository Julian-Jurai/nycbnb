
json.set! @review.id do
  # json.partial! "api/reviews/review", review: @review
  # json.partial! "api/users/user", user: @review.user
  json.partial! "api/reviews/review", review: @review
  json.username @review.user.username
  json.image @review.user.image.url
  
end

#<Review id: 436, user_id: 343, homes_id: 342, rating: 1, body: "Review 5 ", created_at: "2017-09-21 23:13:51", updated_at: "2017-09-21 23:13:51">

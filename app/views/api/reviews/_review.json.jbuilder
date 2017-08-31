
json.extract! review,
  :id,
  :body,
  :homes_id,
  :user_id,
  :rating,
  :updated_at

json.partial! "api/users/user", user: review.user

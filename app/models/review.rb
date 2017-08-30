class Review < ApplicationRecord
  validates :user_id, :homes_id, :body, :rating, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :home,
  primary_key: :id,
  foreign_key: :homes_id,
  class_name: :Home

end

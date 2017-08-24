class Booking < ApplicationRecord
  validates :user_id, :homes_id,  :start_date, :end_date, presence: true

  # belongs_to :home,
  # primary_key: :id,
  # foreign_key: :homes_id,
  # class: :Home
  #
  # belongs_to :user,
  # primary_key: :id,
  # foreign_key: :user_id,
  # class: :User

end

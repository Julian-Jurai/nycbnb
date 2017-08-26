# == Schema Information
#
# Table name: bookings
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  homes_id   :integer          not null
#  start_date :date             not null
#  end_date   :date             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Booking < ApplicationRecord
  validates :user_id, :homes_id,  :start_date, :end_date, presence: true

  belongs_to :home,
  primary_key: :id,
  foreign_key: :homes_id,
  class_name: :Home

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

end

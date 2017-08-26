# == Schema Information
#
# Table name: homes
#
#  id                 :integer          not null, primary key
#  host_id            :integer          not null
#  title              :string           not null
#  description        :string           not null
#  lat                :float            not null
#  long               :float            not null
#  address            :string           not null
#  price              :integer          not null
#  room_type          :string           not null
#  bedrooms           :integer          not null
#  guests             :integer          not null
#  beds               :integer          not null
#  kitchen            :boolean          not null
#  internet           :boolean          not null
#  family             :boolean          not null
#  tv                 :boolean          not null
#  essentials         :boolean          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Home < ApplicationRecord
   validates :host_id, :title, :description, :lat, :long, :address, :price, presence: true
   validates :family, :tv, :essentials, :room_type, :bedrooms, :guests, :beds, :kitchen, :internet, presence: true


  has_attached_file :image, default_url: "home_default.png"

  validates_attachment_content_type :image, content_type: /\Aimage/

  has_many :bookings,
  primary_key: :id,
  foreign_key: :homes_id,
  class_name: :Booking

  has_many :users,
  through: :bookings,
  source: :user




end

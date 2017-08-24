# == Schema Information
#
# Table name: homes
#
#  id          :integer          not null, primary key
#  host_id     :integer          not null
#  title       :string           not null
#  description :string           not null
#  lat         :float            not null
#  long        :integer          not null
#  address     :string           not null
#  price       :integer          not null
#  room_type   :string           not null
#  bedrooms    :integer          not null
#  guests      :integer          not null
#  beds        :integer          not null
#  kitchen     :boolean          not null
#  internet    :boolean          not null
#  family      :boolean          not null
#  tv          :boolean          not null
#  essentials  :boolean          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#



class Home < ApplicationRecord
  validates :host_id, :title, :description, :lat, :long, :address, :price, presence: true
  validates :room_type, :bedrooms, :guests, :beds, :kitchen, :internet, presence: true
  validates :family, :tv, :essentials, presence: true


end

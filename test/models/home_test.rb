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

require 'test_helper'

class HomeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

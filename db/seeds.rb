# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
User.create(username: "guest", password: "password")
User.create(username: "Julian", password: "password")
User.create(username: "Musa", password: "password")
User.create(username: "Foots", password: "password")
User.create(username: "123456", password: "123456")
#
# Homes.destroy_all
# Home.create(
#   host_id:
#   title: Faker::Ancient.hero,
#   description: Faker::Lorem.paragraph,
#   lat: Faker::Address.latitude,
#   long: Faker::Address.longitude,
#   address: Faker::Address.street_address,
#   price: Random.new.rand(50..1000),
#   room_type: ["Entire home", "Private room", "Shared room"].sample,
#   bedrooms: Random.new.rand(1..5),
#   guests: Random.new.rand(1..10),
#   beds: Random.new.rand(1..7),
#   kitchen: Faker::Boolean.boolean,
#   internet: Faker::Boolean.boolean,
#   family: Faker::Boolean.boolean,
#   tv: Faker::Boolean.boolean,
#   essentials: Faker::Boolean.boolean,
# )
# Home.create(
#   host_id:
#   title: Faker::Ancient.hero,
#   description: Faker::Lorem.paragraph,
#   lat: Faker::Address.latitude,
#   long: Faker::Address.longitude,
#   address: Faker::Address.street_address,
#   price: Random.new.rand(50..1000),
#   room_type: ["Entire home", "Private room", "Shared room"].sample,
#   bedrooms: Random.new.rand(1..5),
#   guests: Random.new.rand(1..10),
#   beds: Random.new.rand(1..7),
#   kitchen: Faker::Boolean.boolean,
#   internet: Faker::Boolean.boolean,
#   family: Faker::Boolean.boolean,
#   tv: Faker::Boolean.boolean,
#   essentials: Faker::Boolean.boolean,
# )
# Home.create(
#   host_id:
#   title: Faker::Ancient.hero,
#   description: Faker::Lorem.paragraph,
#   lat: Faker::Address.latitude,
#   long: Faker::Address.longitude,
#   address: Faker::Address.street_address,
#   price: Random.new.rand(50..1000),
#   room_type: ["Entire home", "Private room", "Shared room"].sample,
#   bedrooms: Random.new.rand(1..5),
#   guests: Random.new.rand(1..10),
#   beds: Random.new.rand(1..7),
#   kitchen: Faker::Boolean.boolean,
#   internet: Faker::Boolean.boolean,
#   family: Faker::Boolean.boolean,
#   tv: Faker::Boolean.boolean,
#   essentials: Faker::Boolean.boolean,
# )
# Home.create(
#   host_id:
#   title: Faker::Ancient.hero,
#   description: Faker::Lorem.paragraph,
#   lat: Faker::Address.latitude,
#   long: Faker::Address.longitude,
#   address: Faker::Address.street_address,
#   price: Random.new.rand(50..1000),
#   room_type: ["Entire home", "Private room", "Shared room"].sample,
#   bedrooms: Random.new.rand(1..5),
#   guests: Random.new.rand(1..10),
#   beds: Random.new.rand(1..7),
#   kitchen: Faker::Boolean.boolean,
#   internet: Faker::Boolean.boolean,
#   family: Faker::Boolean.boolean,
#   tv: Faker::Boolean.boolean,
#   essentials: Faker::Boolean.boolean,
# )
# Home.create(
#   host_id:
#   title: Faker::Ancient.hero,
#   description: Faker::Lorem.paragraph,
#   lat: Faker::Address.latitude,
#   long: Faker::Address.longitude,
#   address: Faker::Address.street_address,
#   price: Random.new.rand(50..1000),
#   room_type: ["Entire home", "Private room", "Shared room"].sample,
#   bedrooms: Random.new.rand(1..5),
#   guests: Random.new.rand(1..10),
#   beds: Random.new.rand(1..7),
#   kitchen: Faker::Boolean.boolean,
#   internet: Faker::Boolean.boolean,
#   family: Faker::Boolean.boolean,
#   tv: Faker::Boolean.boolean,
#   essentials: Faker::Boolean.boolean,
# )

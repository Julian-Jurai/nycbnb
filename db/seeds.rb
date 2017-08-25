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

Home.destroy_all
user_ids = User.all.map{ |user| user.id }

# Home.create(image:)

# Home.create(
#   host_id: user_ids.sample,
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

Home.create(
  host_id: user_ids.sample,
  title: "title",
  description: "description",
  lat: 50,
  long: 45,
  address: "address",
  price: 50,
  room_type: "Entire home",
  bedrooms: 4,
  guests: 6,
  beds: 5,
  kitchen: true,
  internet: true,
  family: true,
  tv: true,
  essentials: true,
  image: "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/seed_homes/1.jpg"
)

Home.create(
  host_id: user_ids.sample,
  title: "title",
  description: "description",
  lat: 50,
  long: 45,
  address: "address",
  price: 50,
  room_type: "Entire home",
  bedrooms: 4,
  guests: 6,
  beds: 5,
  kitchen: true,
  internet: true,
  family: true,
  tv: true,
  essentials: true,
  image: "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/seed_homes/33f0a1eb_original.jpg"
)

Home.create(
  host_id: user_ids.sample,
  title: "title",
  description: "description",
  lat: 50,
  long: 45,
  address: "address",
  price: 50,
  room_type: "Entire home",
  bedrooms: 4,
  guests: 6,
  beds: 5,
  kitchen: true,
  internet: true,
  family: true,
  tv: true,
  essentials: true,
  image: "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/seed_homes/7b53f441_original.jpg"
)

Home.create(
  host_id: user_ids.sample,
  title: "title",
  description: "description",
  lat: 50,
  long: 45,
  address: "address",
  price: 50,
  room_type: "Entire home",
  bedrooms: 4,
  guests: 6,
  beds: 5,
  kitchen: true,
  internet: true,
  family: true,
  tv: true,
  essentials: true,
  image: "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/seed_homes/7b53f441_original.jpg"
)

Home.create(
  host_id: user_ids.sample,
  title: "title",
  description: "description",
  lat: 50,
  long: 45,
  address: "address",
  price: 50,
  room_type: "Entire home",
  bedrooms: 4,
  guests: 6,
  beds: 5,
  kitchen: true,
  internet: true,
  family: true,
  tv: true,
  essentials: true,
  image: "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/seed_homes/da4b9b6b_original.jpg"
)

Home.create(
  host_id: user_ids.sample,
  title: "title",
  description: "description",
  lat: 50,
  long: 45,
  address: "address",
  price: 50,
  room_type: "Entire home",
  bedrooms: 4,
  guests: 6,
  beds: 5,
  kitchen: true,
  internet: true,
  family: true,
  tv: true,
  essentials: true,
  image: "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/seed_homes/fd6d6382_original.jpg"
)

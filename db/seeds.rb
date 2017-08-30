# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or create!d alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create!([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create!(name: 'Luke', movie: movies.first)


random_descriptions = [
  "Beautiful studio with large overhung windows, hardwood floors, newly renovated kitchen, marble baths. Situated on Wall Street, minutes away from the Battery Park, 9/11 Memorial, New York Stock Exchange, East River Bike Trail, and Federal Hall. Great shopping within minutes include Hermes, Tiffany's, Century 21. Convenient transportation (J,Z,1, 2, , A, C, E, N, Q, R, 4, and 5 train are all within 5 minutes walking). Breathtaking views of the water against the concrete jungle backdrop.",
  "The complex used to be the old bakery of Oia and it was recently restored with respect to the unique local architecture creating a remarkable ekistic complex of a unique sculptural quality. The plasticity of the forms,the use of local techniques, the built in beds and the antique furniture together with modern amenities strike the right balance between sophistication and coziness.",
  "Our farmhouse is glad to give you hospitality in the Leccio apartment, it is indipendent and there's space for a couple and a third person.The outside area is equipped with tables in the shade of the trees, deck chairs, barbecue and wood burning oven.The apartment is indipendent and complete. All the farm is a garden and you can walk around if you are interest.You can ask us if you like to have a grill or some more garden forniture.",
  "We are in Long Island City, 4 blocks away from the 7 train that takes you to Grand Central. I mean if you take this train you will be in Grand Central in 5 minutes.We are also a block away from the East River from here you have a great view of Manhattan.",
  "This duplex apartment has been carefully furnished and crafted into a beauty rare to Brooklyn. The breathtaking views, floor-to-ceiling 18-foot windows, and state of the art amenities , along with the minimalistic interior design and decor will make you never want to leave!",
  "Renovated, newly furnished and fully equipped 2 Bed/1 Bath with access to flowering backyard. Minutes from convenience stores, restaurant, transportation and NYC skyline view.",
  "10 minute bus ride (1 stop) to NYC Manhattan / Port Authority / Times Square. Bus stop is across the street. You’ll love my place because of the location, it is a very safe neighborhood, and the house is newly renovated with brand new furniture, and kept clean by a dedicated staff. My place is good for couples, solo adventurers, business travelers, families (with kids), and big groups. We also provide food in the fridge for first day breakfast/light supper.",
  "Charming and cozy apartment located in Bushwick, Brooklyn. The apartment is a quite, spacious and naturally well lit bedroom. The sofa is an amazing place to snuggle up.The neighborhood is equal parts old-school Hispanic and hipster bohemian, the neighborhood is both a working-class community and the site of much creativity.Walking distance to the L, M and J train but if you do not want to walk take the B52 Bus across the street to either of the trains mentioned.",
  "Luxury Building, Amazing view from bedroom. Live like your at a Resort in the Caribbean. in door and outdoor Pool, Hot tub, Basket ball court, Yoga Class, Gym, boxing gym, Great Location 5 Mins to TIME SQUARE. Laundry and dryer inside the apartment. Long stay are welcome. Daily cleaning. You can not beat the price, its better than a hotel. you get a nice Kitchen and a Living room for a cheaper price.",
  "Fully testy renovated, big, bright, clean 2 bedroom apt in Union City New Jersey. SLEEPS UP TO 8 GUEST. Minutes from New York City Time Square, The Meadowlands Sports Arena/Izod Center. Easy access to grocery, restaurants and buses to NYC & Hoboken.",
  "Ideal for family size trips!!!Don't just visit... live comfortably!!!Welcome Home... Bright Lighting , Heating, AC Washer, Dryer, Dishwasher, Backyard Access, Private Bathroom and Direct TV.You will NOT find a better deal for space, value and price!!!Great for a family. Has a Queen Bed, Queen Sofa Bed. If you have more than 4 guest I will open the other floor up for you and your guest. Comes with half bathroom queen bed and walk in closet.",
  "Bright, beautiful, creative apartment with natural sunlight. Professionally decorated with an interior designer (still a few finishing touches to come), full of art and character. In the heart of the Lower East Side, walking: 2 min to East Village, 15 min walk to SoHo, 20 min to Williamsburg, 2 min to the subway and 5 min to Whole Foods. You're in New York City.",
  "Staying in my place will defiantly enhance your NYC Experience. This recently renovated charming Studio is two flight up, located in the center or Manhattan. The neighborhood offers anything you could think of: Nightlife, cafes, Shopping, Restaurants & Museums. steps from the UN and a few minutes walk from Grand Central.",
  "Enjoy Central Park views from your bedroom window! This is the ideal apartment for those who like easy access to the high energy city by day, but prefer to come home to a peaceful, tree-lined neighborhood to get a good night of rest. Please read the whole profile, most of your questions will be answered below! :)",
  "Clean spacious studio in the centre of East Village. Close to transport, 8 minute walk to Astor Place 6 train, 10 mins to 8 Street University Place N R, 15 min walk to Union Square. Located on a quiet street half a block from Tompkins Square Park, across from a beautiful church built in 1900, surrounded by cafes, restaurants and nightlife.",
  "My 1 bedroom Apartment is a walking distance to Central Park (3-5min) and to the Hudson river park (10-12min) steps from the Museum of Natural History. It has a spacious living room where you can dine with your family chill or just watch TV after a long day in the city. The Upper West Side is a great neighborhood that have great mix of history architecture and culture. You gonna love it! & This apt is available for monthly rentals!",
  "Come stay in my converted townhome in the heart of Bedford-Stuyvesant. Close to great restaurants, coffeeshops and juice bars, a great place to lay your head after a day or night out on the town.",
  "Amazing apartment in SoHo, the heart of Manhattan, you'll stay in the middle of everything in the city. Comfortable for 4 people (1 Queen, 1 SofaBed) kitchen, bathroom, living room. Fast internet, cable television, access to sports club. Best area in all of NYC.",
  "Right in the heart of Historic Greenwich Village. Provides incredible access to numerous subway line and five minute walk to Washington Sq Park.This is on a beautiful treeline street that is very quiet. Just one flight up (building has elevator). Lots of light and a relaxing home to escape the hustle and bustle of City Streets."
]

random_titles = [
  "Central Greenwich Village Home Perfect For Summer",
  "Double room in lge Victorian house",
  "In the historical center of Lecce",
  "Stunning All concrete House by the river",
  "Leccio Apartment",
  "Unique architecture",
  "'Silo Studio' Cottage",
  "The World Famous Seashell House ",
  "Live in an historic English Castle!",
  "The best position in Hvar!",
  "Jack Sparrow House, Cornwall",
  "Romantic Cabana with view",
  "West side in the Crozon Peninsula",
  "Palazzo Cattolica Art-Apartment",
  "Cubehouse in central Rotterdam",
  "Old Folk Housen",
  "Malibu Yurt Retreat On Organic Farm",
  "Cozy A-Frame Cabin in the Redwoods",
  "Private Pool House with Amazing Views!",
  "Charming gardenroom with woodstove",
  "Luxury Gold Coast Hinterland Villa",
  "Minsk Belarus Studio in historical center",
  "Luxury Villa with Amazing Sea View"
]

random_reviews = [
  "This flat really does have an amazing view and the outside sitting area is great. The flat it's self is small and feels dark. Something I hadn't realised and I probably should have is no sitting room area and a small kitchen with only a hob which makes it harder if you have children.",
  "Super place and ideal for a large party of people",
  "Our stay at Villa Amonteera was spectacular! I travelled with my family, my brothers family, my sisters family and my mother and there was plenty of space for everyone! The view from the rooftop jacuzzi and swimming pool were incredible! The rooms were modern and chic and, in fact, every bedroom had a view as well! We did a little bit of everything at the villa, swam a lot, played games, relaxed, took photos, watched movies, got plenty of massages. The kids had the best time of their lives. We did go out during our stay there, but even if we had not the villa offers lots of things to do. Last but not least, the staff was helpful and friendly.",
  "Location: the is in a great location overlooking Bang Tao Beach as shown in the pictures. It is up a steep hill in a fairly private area of Phukey. Accommodations: the villa is as described in the pictures and more spectacular in person. Amenities: the villa was well supplied as you would get in a hotel. The staff were excellent hosts and the chef is top notch. Thai dishes and bbq are a must when staying here. Overall: We would highly recommend staying at Villa Zamani and hope to be (EMAIL HIDDEN) munication before and during the stay was great.",
  "The flat is really amazing, spacious and greatly decorated. Very easy access and to park nearby. GianLuca gave us great tips, and even booked a table for us at Le Zie ! Loved it ! Looking forward to come back !",
  "We had a wonderful time!! Ivana and Gianluca are super friendly and the place is amazing. Definitely recommend staying here when you plan to go to Lecce. Thank you both!!",
  "What a wonderful experience! The space is even better than the pictures. And Gianluca and Ivana are the most gracious and welcoming hosts. The location is perfect for exploring the historic centre of Lucca. We look forward to going back!",
  "This apartment is absolutely BEAUTIFUL, comfortable, and well-equipped. It is a quick and easy walk to see the sights of Lecce. We easily found a parking spot in front of the apartment, and the hosts were very helpful and responsive. Loved this apartment!",
  "Great place within easy walking distance to everything you need. Gianluca went out of his way to make us feel welcome and even arranged an early lunch at a trattoria for his hungry, travel tired guests. Bottom line, nice clean place at a great price.",
  "My Wife and I came for our honeymoon. We stayed only one night as we were on a whistle stop tour, but the hosts went out of their way to help us out with maps and guidebooks and breakfast. We even had a bottle of bubbles on arrival! A beautiful home and even better hosts.",
]

random_boolean = [ true, false, true, false, true, false]
random_price = (50..300).to_a
random_snum = (3..7).to_a
random_rating = (2..5).to_a



User.destroy_all
User.create!(username: "guest", password: "password")
User.create!(username: "Julian", password: "password")
User.create!(username: "Musa", password: "password")
User.create!(username: "Foots", password: "password")
User.create!(username: "Brendon", password: "passoword")
User.create!(username: "Mav", password: "passoword")
User.create!(username: "Cal", password: "passoword")

user_ids = User.all.map{ |user| user.id }

Home.destroy_all



Home.create!(
  host_id: user_ids.sample,
  title: "title",
  description: "In bounds 1",
  lat: 40.72,
  long: -74,
  address: "address",
  price: 50,
  room_type: "Entire  home",
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

Home.create!(
  host_id: user_ids.sample,
  title: "title",
  description: "In bounds 2",
  lat: 40.76,
  long: -74,
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
Home.create!(
  host_id: user_ids.sample,
  title: "title",
  description: "out of bounds 1",
  lat: 50,
  long: -75,
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

Home.create!(
  host_id: user_ids.sample,
  title: "title",
  description: "out of bounds 2",
  lat: 55,
  long: -76,
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

Home.create!(
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

Home.create!(
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

Home.create!(
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

Home.create!(
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

homes_ids = Home.all.map{ |home| home.id }

Booking.destroy_all

Booking.create!(
  {
    user_id: user_ids.sample,
    homes_id: homes_ids.sample,
    start_date: '2017-06-01',
    end_date: '2017-06-04'
  }
)

Booking.create!(
  {
  user_id: user_ids.sample,
  homes_id: homes_ids.sample,
  start_date: '2016-06-01',
  end_date: '2015-06-04'
  }
)

### REVIEWS ###

Review.create!(
  {
  user_id: user_ids.sample,
  homes_id: homes_ids.sample,
  body: random_reviews.sample,
  rating: random_rating.sample
  }
)
Review.create!(
  {
  user_id: user_ids.sample,
  homes_id: homes_ids.sample,
  body: random_reviews.sample,
  rating: random_rating.sample
  }
)
Review.create!(
  {
  user_id: user_ids.sample,
  homes_id: homes_ids.sample,
  body: random_reviews.sample,
  rating: random_rating.sample
  }
)
Review.create!(
  {
  user_id: user_ids.sample,
  homes_id: homes_ids.sample,
  body: random_reviews.sample,
  rating: random_rating.sample
  }
)

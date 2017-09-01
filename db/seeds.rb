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

random_profile_image = [
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Users/067ad871eca05621e4f5396ea92f3d66--profile-photography-headshot-photography.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Users/205-McGREGOR_CONOR.png",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Users/IMG_ReeseD_20161027.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Users/caa238-profile.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Users/emily-profile.png",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Users/image.jpeg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Users/images.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Users/mock-profile.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Users/obioma.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Users/profile.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Users/profile_img.png",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Users/student-profile-nicole-mills-college.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Users/team2.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Users/varun_56b_copy.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Users/viewImage-1.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Users/viewImage-2.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Users/viewImage.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Users/xu-profile-400-1.png"
]

random_house_image = [
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/05HIGHEND1-superJumbo.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/0c899a0f3b6ba01181d56b0fcc300061.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/0e25c2e2390dc63c0b7b9e11b54d6a10.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/101-west-end-apartments-exterior.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/111-murray-street-kpf-rockwell-architecture-news-skyscraper-new-york-city-usa_dezeen_1568_8.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/131162027.0.0.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/16TICKET-superJumbo-v2.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/3H9aKtT.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/75-Kenmare-Street-1.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/7TvpgVk.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/80_columbus_circle_-66a-master_bedroom-nyc1.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/8AGvuIL.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/9s1aqOG.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/CetraRuddy-535W43205.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/ClLGSwk.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/E5bU0Pi.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/JBq9WNw.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/LaRpJ7X.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/MOPW0Nk.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/MfthjDF.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/Py9u71V.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/SbGhUW3.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/XaRqYju.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/Y5E19DN.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/beatrice-apartments-penthouse.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/beTTeDs.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/cream-wall-luxury-bedroom-apt-nyc-with-white-table-lamp-on-the-desk-it-also-has-minimalist-windows-design-ideas-with-white-ceiling-it-also-has-brown-rug.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/cullman-aerial-real-estate-phot.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/d0T3XtH.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/dynamic.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/go-inside-the-brooklyn-home-of-new-yorks-most-sought-after-architect-1.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/m3pTnKW.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/new-york-loft-apartments-in-cool-414827e80d5ebfd1102575b3c042e801jpg.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/slide-1.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/slider_ar_06sl_big.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/wLV72T0.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/walkup-nyc-header.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/we-toured-a-273-million-apartment-in-one-of-new-york-citys-most-expensive-buildings.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/xwBZmOB.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/z2sInhy.jpg",
  "https://s3.us-east-2.amazonaws.com/nyc-bnb-dev/Homes/wwwww.jpg"
]

random_lat = [
  40.816807403348875, 40.77342043091354, 40.795748560480185,
  40.64055540328192, 40.65443768662733, 40.85908127792321,
  40.60648765999119, 40.68661801739872, 40.724167563384526,
  40.73553758530453, 40.88128119365111, 40.846018624975635,
  40.60488684143729, 40.72219811535685, 40.88674827678327,
  40.78505606414934, 40.676937872111274, 40.627962645144514,
  40.86583462317485, 40.77385721693258, 40.76248639192421,
  40.73472658884314, 40.77250885522205, 40.809309950586425,
  40.70752729844037, 40.67041663166196, 40.643253536644245,
  40.66868876840924, 40.752928442969456, 40.60097266029533,
  40.65414834031823, 40.81900428924561, 40.68111936862471,
  40.825231637153614, 40.899064419055456, 40.617387889982936,
  40.75681181444408, 40.84136354168355, 40.6720746722405,
  40.70153265388591, 40.87758593920155, 40.87336162173339,
  40.887310942353125, 40.689170825645576, 40.855737780370575,
  40.877308897358944, 40.72802353769765, 40.68693013258512,
  40.72244623542839, 40.89444539889581
]

random_lng = [
  -73.75071028159498, -73.92776703939857, -73.95502874562277,
  -73.96764806687663, -73.80431911436969, -73.77255278452935,
  -73.87480097236744, -73.82674781981046, -73.87948246654521,
  -73.88435162896823, -73.85768737586965, -73.75125215871401,
  -73.75098406230536, -73.79029455547581, -73.97907891684451,
  -73.90692279192305, -73.88527614241319, -73.86348627252585,
  -73.88853062376921, -73.89322604076548, -73.97164261658948,
  -73.99320816495678, -73.94539671881397, -73.94050771116738,
  -73.86312416695844, -73.92301426642318, -73.75359519031565,
  -73.93647729241525, -73.95683685324686, -73.83489484649839,
  -73.80492138338653, -73.83791504962713, -73.9417374375959,
  -73.97423914940997, -73.95140433346374, -73.87644609838442,
  -73.95345854797141, -73.94839220194227, -73.8130095995791,
  -73.86812056574374, -73.83723735587658, -73.87629672099047,
  -73.81692215904386, -73.98790390071963, -73.76304034990447,
  -73.8911604982731, -73.87944867445297, -73.86678936004408,
  -73.95275737935677, -73.8958970534631
]

random_addresses = [
  "8151 S. El Dorado Street
Westbury, NY 11590",
  "8204 Chapel Rd.
Rego Park, NY 11374",
  "259 Shore Lane
New York, NY 10025",
  "668 East Meadowbrook St.
South Richmond Hill, NY 11419",
  "9290 Silver Spear St.
New York, NY 10016",
  "9704 Central St.
New York, NY 10028",
  "1 South Middle River Lane
New York, NY 10003",
  "27 Summerhouse Street
Poughkeepsie, NY 12601",
  "7570 Bridgeton Court
Newburgh, NY 12550",
  "691 Wood Lane
Freeport, NY 11520",
  "649 Lees Creek Rd.
Staten Island, NY 10306",
  "65 East Columbia Dr.
Troy, NY 12180",
  "15 Lookout Circle
New York, NY 10003",
  "21 Edgewater St.
Elmont, NY 11003",
  "9958 Parker Street
New York, NY 10016",
  "31 Thomas Ave.
Brooklyn, NY 11229",
  "9812 Myers Ave.
Rochester, NY 14609",
  "78 S. Holly Ave.
New York, NY 10031",
  "254 Indian Spring Drive
New York, NY 10040",
  "8158 Westminster Street
Woodside, NY 11377",
  "8443 N. Bald Hill Avenue
Astoria, NY 11106",
  "26 Ridgewood Avenue
Buffalo, NY 14215
",
  "8991 St Louis St.
Staten Island, NY 10314",
  "19 Atlantic Drive
New York, NY 10024",
  "532 West Rd.
Jamaica, NY 11435",
  "81 Overlook Drive
North Tonawanda, NY 14120",
  "466 Cherry Road
Flushing, NY 11355",
  "7 Aspen St.
Brooklyn, NY 11201",
  "239 Berkshire Rd.
Huntington Station, NY 11746"
]

random_room_type = [
  "Entire home",
  "Private room",
  "Shared room"
]


random_profile_usernames = [
  "Emma",	"Liam",
	"Olivia",	"Noah",
	"Ava",	"Lucas",
	"Sophia",	"Mason",
	"Isabella",	"Oliver",
	"Mia",	"Logan",
	",Amelia",	"Ethan",
	"Charlotte",	"Elijah",
	"Harper",	"Aiden"
]

# random_yr = (10..18).to_a
# random_month = (1..9).to_a
random_day = (2..9).to_a
# random_date = "20#{random_yr.sample}-0#{random_month.sample}-0#{random_day.sample}"

User.destroy_all

User.create!(
username: "guest",
password: "password",
image: random_profile_image.pop
)


10.times do
  User.create!(
  username: random_profile_usernames.pop,
  password: "password",
  image: random_profile_image.pop
  )
end


user_ids = User.all.map{ |user| user.id }

Home.destroy_all


24.times do
  Home.create!(
    host_id: user_ids.sample,
    title: random_titles.sample,
    description: random_descriptions.sample,
    lat: random_lat.sample,
    long: random_lng.sample,
    address: random_addresses.sample,
    price: random_price.sample,
    room_type: random_room_type.sample,
    bedrooms: random_snum.sample,
    guests: random_snum.sample,
    beds: random_snum.sample,
    kitchen: true,
    internet: true,
    family: true,
    tv: true,
    essentials: true,
    image: random_house_image.pop
  )
end

homes_ids = Home.all.map{ |home| home.id }

Booking.destroy_all

8.times do
  Booking.create!(
    {
      user_id: user_ids.sample,
      homes_id: homes_ids.sample,
      start_date: '2017-06-01',
      end_date: "2017-06-0#{random_day.sample}"
    }
  )
end

### REVIEWS ###

30.times do
  Review.create!(
    {
    user_id: user_ids.sample,
    homes_id: homes_ids.sample,
    body: random_reviews.sample,
    rating: random_rating.sample
    }
  )
end

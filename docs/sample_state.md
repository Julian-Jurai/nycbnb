```js
{
  currentUser: {
      id: 1,
      email: "email@email.com",
      first: "Green",
      last: "McThomas",
      username: "Bnbeezy",
      month: 2,
      day: 1,
      year: 1998
  },

  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createNote: {errors: ["body can't be blank"]}
  },

  homes: {
    1: {
      title: "Tree Home Cabin",
      body: "This cabin was just featured in..",
      room_type: "Entire Home",
      host_id: 1,
      long: 21,
      lat: 213,
      address: "113 St Park "
      image_url: "cabin.jpg",
      price: 627
    },
    2: {
      title: "High rise apartment with an amazing balcony view",
      description: "Its Great!",
      long: 21,
      lat: 213,
      address: "123 Flex Street",
      image_url: "home.jpg",
      price: 160,
      space: {
        guests: 4,
        bathrooms: 1,
        bedrooms: 2,
        beds: 3,
        room_type: "Entire home"
      },
      amenities: {
        internet: true,
        tv: true,
        family: true,
        kitchen: true
      },
      bookings: {
        id: 1
        start_date: 2/1/2018
        start_date: 2/2/2018
      }
      reviews: {
        1: {
          home_id: 3
          author_Id: 1,
          rating: 9,
          body: "Love It!"
        }
      }
    }
  }

}
```

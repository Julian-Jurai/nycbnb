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
      title: "Home",
      body: "This is a homey home in..",
      room_type: "Shared Room",
      host_id: 2,
      long: 22211,
      lat: -12213,
      address: "03 W Park "
      image_url: "home.jpg",
      price: 231
    }
  },
  homeDetail: {
    id: 1,
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
    reservations: {
      id: 1
      start_date: 2/1/2018
      start_date: 2/2/2018
    }
    reviews: {
      1: {
        author_Id: 1,
        rating: 9,
        body: "Love It!"
      }
    }
  },
  experiences: {
    1: {
      title: "sleep with wolves",
      body: "This cabin was just featured in..",
      duration: 2,
      host_id: 1,
      long: 21321,
      lat: 213213,
      address: "113 St Park "
      image_url: "wolves.jpg",
      price: 17
    },
  },
  experienceDetail: {
    title: "sleep with wolves",
    body: "This cabin was just featured in..",
    duration: 2,
    host_id: 1,
    long: 21321,
    lat: 213213,
    experience_type: "Nature"
    address: "113 St Park "
    image_url: "wolves.jpg",
    price: 17
  }
}
```

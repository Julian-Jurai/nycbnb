# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users` - create new user
- `PATCH /api/users` - update user info
- `GET /api/users/:id` - users show page

### Session

- `POST /api/session` - log in user
- `DELETE /api/session` - log out

### Homes

- `GET /api/homes`
  - homes index/search actions
  - accepts `price`, `start_date`, and `end_date` query params to fetch
      available homes
- `GET /api/homes/:id` - fetch one spot
- `DELETE /api/homes/:id` - cancel a home
- `PATCH /api/homes/:id` - edit a home

### Experience

- `GET /api/Experience`
  - Experience index/search actions
  - accepts `price`, `start_date`, and `end_date` query params to fetch
      available Experience
- `GET /api/Experience/:id` - fetch one Experience
- `DELETE /api/Experience/:id` - cancel an experience
- `PATCH /api/Experience/:id` - edit as experience

### Reviews

- `GET /api/reviews` - fetches home's/experience's reviews
- `POST /api/reviews` - create a review
- `PATCH /api/reviews/:id` - edit your review
- `DELETE /api/reviews/:id` - delete your review

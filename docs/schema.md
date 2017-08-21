
## users
column name     | data type | details
----------------|-----------|-----------------------
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null
month           | integer    | not null
day             | integer    | not null
year            | integer    | not null


## homes
column name | data type | details
------------|-----------|-----------------------
host_id     | integer   | not null, (users), indexed
lat         | float     | not null
long        | float     | not null
price       | integer   | not null
user_review_id      | integer   | not null
title       | string    | not null
description | text      | not null
address     | string    | not null
image_url     | string    | not null
reservation_id   | integer |
internet    | boolean    |
family      | boolean    |
parking     | boolean    |
parking     | boolean    |
kitchen     | boolean    |
beds        | integer    |
bedrooms    | integer   |
bathrooms   | integer   |
property_type| string   |
room_type   | string   |


## Experience
column name | data type | details
------------|-----------|-----------------------
host_id  | integer   | not null, (users), indexed
image_url     | string    | not null
lat         | float     | not null
long        | float     | not null
price       | integer   | not null
title       | string    | not null
description | text      | not null
address     | string    | not null
start_date  | date      | not null
end_date    | date      | not null

## HomeReviews
column name | data type | details
------------|-----------|-----------------------
author_id   | integer   | not null, (users), indexed
home_id     | integer   | not null,  (homes), indexed
experience_id     | integer   | not null,  (experience), indexed
rating      | integer   | not null
body        | text      | not null

## ExperienceReviews
column name | data type | details
------------|-----------|-----------------------
author_id   | integer   | not null, (users), indexed
experience_id     | integer   | not null,  (experience), indexed
rating      | integer   | not null
body        | text      | not null

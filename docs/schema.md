
## users
column name     | data type | details
----------------|-----------|-----------------------
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null
image_url       | string    | not null
month           | integer    | not null
day             | integer    | not null
year            | integer    | not null


## homes
column name | data type | details
------------|-----------|-----------------------
host_id     | integer   | not null, (users), indexed
title       | string    | not null
description | text      | not null
lat         | float     | not null
long        | float     | not null
address     | string    | not null
price       | integer   | not null
image_url     | string    | not null
property_type| string   |
bedrooms    | integer   |
beds        | integer    |
bathrooms   | integer   |
kitchen     | boolean    |
internet    | boolean    |
family      | boolean    |
tv          | boolean    |
essentials  | boolean    |



## Experience
column name | data type | details
------------|-----------|-----------------------
host_id     |integer    | not null, (users), indexed
title       | string    | not null
description | text      | not null
duration    | integer   | not null
lat         | float     | not null
long        | float     | not null
address     | string    | not null
price       | integer   | not null
image_url   | string    | not null
experience_type   | string    | not null
start_date  | date      | not null
end_date    | date      | not null

## HomeReviews
column name | data type | details
------------|-----------|-----------------------
author_id   | integer   | not null, (users), indexed
home_id     | integer   | not null,  (homes), indexed
title       | string    | not null
body        | text      | not null

## ExperienceReviews
column name | data type | details
------------|-----------|-----------------------
author_id   | integer   | not null, (users), indexed
experience_id     | integer   | not null,  (experience), indexed
title      | string  | not null
body        | text      | not null

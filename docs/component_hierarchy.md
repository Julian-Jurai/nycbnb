## Component Hierarchy

**AuthFormContainer**
  - AuthForm: will provide sign up and log in functionality

**MainNavBar**
  - Logo
  - AuthFormContainer
  - LocationSearchBar
  - DateSelection
  - Guest
  - SiteNavigationBar

**MainFooter**

**FeaturedExperienceIndex**
 - ExperienceIndexItem

**FeaturedHomesIndex**
 - HomesIndexItem

**ForYouContainer**

**HomeIndexContainer**
  - HomeIndex
    + HomeIndexItem
    + GoogleMaps

**ExperienceIndexContainer**
  - ExperienceIndex
    + ExperienceIndexItem

**HomeIndexFilterBar**

**UsersContainer**
  - Users

**HomeIndexItemContainer**
  - ReservationForm

**ReservationForm**

**HomeFeaturesIndex**
 - HomeFeaturesIndexItem

**GoogleMaps**

**ReviewIndex**
  - ReviewIndexItems
    + User


## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/" | "ForYouContainer" |
| "/homes/" | "HomesIndexContainer" |
| "/homes/:homeId/" | "HomesIndexItemContainer" |
| "/homes/:homeId/userId" | "UsersContainer" |
| "/experiences/" | "ExperienceIndexContainer" |
| "/experiences/:experienceId" | "ExperienceIndexItem"
| "/experiences/:experiencesId/userId" | "UsersContainer" |

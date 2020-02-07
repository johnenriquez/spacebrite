# Spacebrite

![Spacebrite Hero Image](https://github.com/johnenriquez/spacebrite/blob/master/app/assets/images/app-screens/hero-wide.png)

Spacebrite is a ticketing / registration platform developed for interplanetary flights. Spacebrite allows space travel agencies to focus on transporting their passengers safely and efficiency, while providing their passengers a simplified, streamlined interface to access to their trip itinerary, flights, and more.

Spacebrite's design takes cues from Delta Airlines, Virgin Atlantic, and JetBlue in order to help users bridge the shift from intercontinental travel to interplanetary travel.

### Useful Links
- [Live Site](http://spacebrite-demo.herokuapp.com/) hosted on Heroku
- [Design documents / wiki](https://github.com/johnenriquez/spacebrite/wiki)
- [Github repo](https://github.com/johnenriquez/spacebrite) (This document)

## Features

### Authentication



While Spacebrite allows you to browse flights without registering, features such as bookmarks, trips, and checkins are unavailable until you sign up. If you don't want to create an account immediately, you can log in as a demo user.

The forms validate that you've filled out the fields and display any relevant error messages in red.

Logging in:

![Login Screen With Errors](https://github.com/johnenriquez/spacebrite/blob/master/app/assets/images/app-screens/login-screen-with-errors.png)

Signing up:

![Signup Screen With Errors](https://github.com/johnenriquez/spacebrite/blob/master/app/assets/images/app-screens/signup-with-errors.png)

### Spaceports & Flights

![Spaceport Screen](https://github.com/johnenriquez/spacebrite/blob/master/app/assets/images/app-screens/spaceport-wide.png)

You can view upcoming flights to and from a specific spaceport, regardless of whether you've logged in. Spaceports have their own IATA code, the planet (or celestial body) of their location, and their locality upon that planet. Visiting a spaceport page reveals the inbound and outbound flights scheduled to or from that spaceport.

Flights have their own identification numbers. They all belong to specfic spaceline companies and have a model designation.


### Feature roadmap

As this open beta rolls out, users will soon be able to:
- bookmark flights
- plan trips
- check in to flights

## Technologies

Spacebrite is built on React+Redux on the frontend, and Rails 5 and PostgreSQL on the backend.

## Feedback

Feature requests are always welcome. The cleanest way to send any feedback is to [open an issue](https://github.com/johnenriquez/spacebrite/issues).


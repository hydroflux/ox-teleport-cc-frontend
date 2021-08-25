<!-- CHALLENGE -->
Our client wants a website that allows them to learn more about major U.S. cities. Specifically, they wish to be able to submit the name of a city and learn its latitude and longitude, as well as quality of life scores for the area, where available. To save costs, we have decided to use Teleport’s free public API (https://developers.teleport.org/api/getting_started/) as our data source. 

<!-- August 24th Backlog Updates -->
[] Sample list isn't the best way to have a splash / home page--also wasted a lot of time during the CC--decide on a way to update
[] Categories list should exist in their own table including the colors
[] Look into the widgets available on the api again, possible to show on the CityContainer page
[] If continuing to use material-ui, update the CityContainer page to use the 'Paper' component in order to split the page into left / right (right side for widget)
[] Need to add conditionals for if the urban area details don't exist

<!-- August 25th Backlog Updates -->
[] Update the splash page to be more engaging
[] Fix issue with sampleCities refreshing on refresh--query params stay the same but the sample cities are appearing--the search results should be maintained; Could this be fixed by removing ComponentDidMount & set the results based on the route?
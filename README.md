# CHALLENGE

Our client wants a website that allows them to learn more about major U.S. cities. Specifically, they wish to be able to submit the name of a city and learn its latitude and longitude, as well as quality of life scores for the area, where available. To save costs, we have decided to use Teleport’s free public API (<https://developers.teleport.org/api/getting_started/>) as our data source.

<!-- August 24th Backlog Updates -->
[] Sample list isn't the best way to have a splash / home page--also wasted a lot of time during the CC--decide on a way to update
[] Categories list should exist in their own table including the colors
[] Look into the widgets available on the api again, possible to show on the CityContainer page
[] Need to add conditionals for if the urban area details don't exist

<!-- August 25th Backlog Updates -->
[] Update the splash page to be more engaging
[] Fix issue with sampleCities refreshing on refresh--query params stay the same but the sample cities are appearing--the search results should be maintained; Could this be fixed by removing ComponentDidMount & set the results based on the route?

<!-- August 26th Backlog Updates -->
[] Consider updating styling from individual CSS files to inline styling (reasoning: material-ui components need inline styling to function properly; additionally, the styling isn't very heavy on the other components & containers & therefore wouldn't take up a lot of space & would reduce size of the file structure)
[] Create a center-aligned title element to sit at the top of 'Main' component--would fix the above issue as well
[] Look into 'Fragment' component ( React level component ) to learn what's possible with Fragment properties
[] Change 'Paper' spacing on the 'CityContainer' page
[] Update Typography on the 'CityContainer' component to make the fonts more engaging / better ui
[] Add a hover zoom to the paper elements of the 'CityContainer'
[] Come up with a better name for the app
[] The title on the 'CityContainer' and the bar chart aren't aligned--add an additional structure element to line them back up
[] Push searched cities to the top of the city state in App

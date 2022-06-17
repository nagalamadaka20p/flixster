📝 `NOTE` Use this template to initialize the contents of a README.md file for your application. As you work on your assignment over the course of the week, update the required or stretch features lists to indicate which features you have completed by changing `[ ]` to `[x]`. (🚫 Remove this paragraph before submitting your assignment.)

## Week 1 Assignment: Flixster

Submitted by: Preeti Nagalamadaka

Estimated time spent: 10-12

Deployed Application (optional): [https://nagalamadaka20p.github.io/flixster/]

### Application Features

#### CORE FEATURES

- [X] User can view a list of current movies from The Movie Database API as a grid view
  - The grid element should have an id of `movies-grid`
  - Each movie wrapper element should have a class of `movie-card`
- [X] For each movie displayed, user can see the following details:
  - Title - the element should have a class of `movie-title`
  - Image - the `img` element should have a class of `movie-poster`
  - Votes - the element should have a class of `movie-votes`
- [X] User can load more current movies by clicking a button at the bottom of the list (automatic scroll at bottom)
  - The button should have an id of `load-more-movies-btn`.
  - When clicked, the page should not refresh.
  - New movies should simply be added to the bottom
- [X] Allow users to search for movies and display them in a grid view
  - There should be a search input element with an id of `search-input`
  - Users should be able to type into the input
  - When a user hits 'Enter', it should send a search request to the movies API
  - The results from the search should be displayed on the page
  - There should be a close icon with an id of `close-search-btn` that exits the search, clears results, and shows the current movies displayed previously
- [X] Website accounts for basic HTML/CSS accessibility features
- [X] Website should be responsive

#### STRETCH FEATURES

- [X] Deploy website using GitHub Pages. 
- [ ] Allow user to view more details about a movie within a popup.
- [X] Improve the user experience through CSS & animation.
- [ ] Allow movie video trailers to be played using [embedded YouTube](https://support.google.com/youtube/answer/171780?hl=en)
- [X] Implement anything else that you can get done to improve the app functionality!

### Walkthrough Video

https://user-images.githubusercontent.com/77798750/174410053-586bf158-b777-4d87-a343-9520a96af818.mp4


### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Yes, I definitely felt prepared to complete this assignment, especially after Lab 3 when we learned about fetching data from APIs.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
If I had more time, I would have added a stretch feature where once the user clicked on an image they could see an embedded YouTube video of the movie. I would also try to hide and show different elements rather than clearing my HTML every time and updating one div.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

I am pretty satisfied with the overall website. I had some difficulty with fetching different categories of movies, but was eventually able to figure it out. 

### Open-source libraries used

- Add any links to open-source libraries used in your project.

### Shout out

Phinneas and Yilika were very helpful. My friend Arisa also helped with my code!

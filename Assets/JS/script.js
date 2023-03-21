


fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyDcDNFqw79rNBAcjg0nY-N21UfKqVW4U3s&part=snippet&q=koalas&type=video')
.then(response => response.json())
.then(data => {
  // Parse the response data and display the results on your website
  console.log(data);
})
.catch(error => {
  console.error(error);
});

//var searchInput = 
var animals = ["animal 1", "animal 2", "animal 3", "animal 4", "animal 5", "animal 6"];
var animalSelection = document.querySelector("[]");
var apiURL = urlStart + animals[selectedoption] + urlEnd;



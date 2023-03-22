function getParams() {
  // Get the search params out of the URL (i.e. `?q=london&format=photo`) and convert it to an array (i.e. ['?q=london', 'format=photo'])
  var searchParamsArr = document.location.search.split("&");
  console.log(searchParamsArr);
  // Get the query and format values
  var query = searchParamsArr[0].split("=").pop();
  var format = searchParamsArr[1].split("=").pop();

  searchApi(query, format);
}

function getAnimalOption(event) {
  console.log(event.target.value);
  // START
  searchApi(event.target.value);
}

function searchApi(value) {
  var locQueryUrl =
    "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDcDNFqw79rNBAcjg0nY-N21UfKqVW4U3s&part=snippet&q=" +
    value +
    "&type-video";

  fetch(locQueryUrl)
    .then((response) => response.json())
    .then((data) => {
      // Parse the response data and display the results on your website
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

//var searchInput =
// var animals = ["animal 1", "animal 2", "animal 3", "animal 4", "animal 5", "animal 6"];
// var animalSelection = document.querySelector("[]");
// var apiURL = urlStart + animals[selectedoption] + urlEnd;

var animalNamesInput = document.querySelector('#animal-names');
animalNamesInput.addEventListener('change', getAnimalOption);

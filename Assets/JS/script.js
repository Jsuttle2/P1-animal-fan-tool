var animalNamesInput = document.querySelector('#animal-names');
var cardParent = document.querySelector('#card-parent')

// function getParams() {
//   // Get the search params out of the URL (i.e. `?q=london&format=photo`) and convert it to an array (i.e. ['?q=london', 'format=photo'])
//   var searchParamsArr = document.location.search.split("&");
//   console.log(searchParamsArr);
//   // Get the query and format values
//   var query = searchParamsArr[0].split("=").pop();
//   var format = searchParamsArr[1].split("=").pop();

//   searchApi(query, format);
// }

function getAnimalOption(event) {
  console.log(event.target.value);
  // START
  searchApi(event.target.value);
}

function printResults (dataResults) {
  console.log(dataResults)
  cardParent.classList.add('columns')

  var resultCard = document.createElement('div')
  resultCard.classList.add('card', 'column')
  cardParent.appendChild(resultCard)

  var resultImgHold = document.createElement('div')
  resultImgHold.classList.add('card-image', 'is-4by3', 'image')
  resultCard.appendChild(resultImgHold)

  var resultCardCon = document.createElement('div')
  resultCardCon.classList.add('card-content')
  resultCard.appendChild(resultCardCon)

  var thumbnailImg = document.createElement('img')
  thumbnailImg.setAttribute('src', dataResults.snippet.thumbnails.high.url)
  thumbnailImg.setAttribute('alt', dataResults.snippet.title)  
  resultImgHold.appendChild(thumbnailImg)

  var titleEl = document.createElement('p')
  titleEl.classList.add('title', 'is-4')
  titleEl.textContent = dataResults.snippet.title
  resultCardCon.appendChild(titleEl)

  var cardDisc = document.createElement('div')
  cardDisc.classList.add('content')
  cardDisc.textContent = dataResults.snippet.description
  resultCard.appendChild(cardDisc)




}

function searchApi(value) {
  var locQueryUrl =
    "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBHegcloyyeTcXZ7yRN4vubnnbqYIIJ8vE&part=snippet&q=" +
    value +
    "&type-video&VideoCategoryId=15";

  fetch(locQueryUrl)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      
      for (let i = 0; i < data.items.length; i++) {
        printResults(data.items[i])
        
      }
      
    })
    .catch((error) => {
      console.error(error);
    });
}

//var searchInput =
// var animals = ["animal 1", "animal 2", "animal 3", "animal 4", "animal 5", "animal 6"];
// var animalSelection = document.querySelector("[]");
// var apiURL = urlStart + animals[selectedoption] + urlEnd;


animalNamesInput.addEventListener('change', getAnimalOption);

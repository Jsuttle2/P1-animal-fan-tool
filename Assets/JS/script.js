//App's HTML variables 

var animalNamesInput = document.querySelector('#animal-names');
var cardParent = document.querySelector('#card-parent')
var gifParent = document.querySelector('#gif-parent')
var gifNamesInput = document.querySelector('#gif-names')
var wikiNamesInput = document.querySelector('#wiki-names')

function getAnimalOption(event) {
  console.log(event.target.value);

  searchYtApi(event.target.value);

  localStorage.setItem('animal', JSON.stringify(event.target.value));
}

function getGifOption(event) {
  console.log(event.target.value);

  searchGifApi(event.target.value);

  localStorage.setItem('gif', JSON.stringify(event.target.value));
}

function printResults (dataResults) {
  console.log(dataResults)
  cardParent.classList.add('columns')

  var resultCard = document.createElement('div')
  resultCard.classList.add('card', 'column', 'is-multiline')
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

  var cardLink = document.createElement('a')
  cardLink.setAttribute('href', `https://www.youtube.com/watch?v=${dataResults.id.videoId}`)
  cardLink.setAttribute('target', '_blank')
  cardLink.classList.add('button', 'is-primary')
  cardLink.textContent = 'Watch now!'
  resultCard.appendChild(cardLink)
}

function printResultsGif (dataResults) {
  console.log(dataResults)
  gifParent.classList.add('columns')

  var gifResult = document.createElement('img')
  gifResult.classList.add('column', 'is-one-fifth', 'is-centered')
  gifResult.setAttribute('src', dataResults.images.original.url)
  gifResult.setAttribute('alt', dataResults.title)  
  gifParent.appendChild(gifResult)
}

function searchYtApi (value) {
  const apiKey = 'AIzaSyDcDNFqw79rNBAcjg0nY-N21UfKqVW4U3s'
  var youtubeUrl =
    `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&q=${value}&type-video&VideoCategoryId=15`;

  fetch(youtubeUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      
      for (let i = 0; i < data.items.length; i++) {
        printResults(data.items[i]) 
      }
      
    })
    .catch((error) => {
      console.error(error);
    });
    cardParent.innerHTML = null;
}

function searchGifApi(value) {
    const apiKey = 'EtWqh5cPx4L3jZayXSHTyH4VxTpK4Hsk'
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${value}&limit=5`)
    .then((response) => response.json())
    .then((data) => {
            
      for (let i = 0; i < data.data.length; i++) {
        printResultsGif(data.data[i])
      }
      
    })
    .catch((error) => {
      console.error(error);
    });

    gifParent.innerHTML = null
  }

var lastYtSearch = localStorage.getItem('animal');
if (lastYtSearch) {
animalNamesInput.value = lastYtSearch;
  searchYtApi(lastYtSearch);
}

var lastGifSearch = localStorage.getItem('gif');
if (lastGifSearch) {
gifNamesInput.value = lastGifSearch
  searchGifApi(lastGifSearch);
}


animalNamesInput.addEventListener('change', getAnimalOption);
gifNamesInput.addEventListener('change', getGifOption)

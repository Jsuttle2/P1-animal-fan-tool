var searchInput = 



fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyDcDNFqw79rNBAcjg0nY-N21UfKqVW4U3s&part=snippet&q=koalas&type=video')
  .then(response => response.json())
  .then(data => {
    // Parse the response data and display the results on your website
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });


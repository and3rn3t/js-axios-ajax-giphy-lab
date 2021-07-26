
const giphyRandomEndpoint = `https://api.giphy.com/v1/gifs/random?api_key=y83UkQPy63JJlqj4VbcAyG0We1cA760W`;
const giphyTrendingEndpoint = `https://api.giphy.com/v1/gifs/trending?api_key=y83UkQPy63JJlqj4VbcAyG0We1cA760W`;
const giphySearchEndpoint = `https://api.giphy.com/v1/gifs/search?api_key=y83UkQPy63JJlqj4VbcAyG0We1cA760W`;

// GRAB THE BUTTON ELEMENT FROM THE DOM

let randomButton = document.querySelector('#getRandomGiphyButton');
// let trendingButton = document.querySelector('#getTrendingGiphyButton');

// ADD A CLICK EVENT LISTENER

randomButton.addEventListener('click', getRandom);
// trendingButton.addEventListener('click', getTrending);

// INSIDE THE EVENT HANDLER, MAKE AN AXIOS GET REQUEST TO THE
// giphyRandomApiUrl ENDPOINT

async function getRandom() {
    await axios.get(giphyRandomEndpoint)
    .then(randomResponse => {
        let randomImageUrl = randomResponse.data.data.image_url;
        let randomImageTitle = randomResponse.data.data.title;
        // console.log(randomImageUrl,randomImageTitle);
        document.getElementById('giphyImageTag').setAttribute('src', randomImageUrl);
        document.getElementById('giphyTitleDiv').innerHTML = randomImageTitle;
})};

// async function getTrending() {
//     await axios.get(giphyTrendingEndpoint)
//     .then(trendingResponse => {
//         let trendingImageUrl = trendingResponse.data.data.url;
//         let trendingImageTitle = trendingResponse.data.data.title;
//         // console.log(trendingResponse);
//         document.getElementById('giphyImageTag').setAttribute('src', trendingImageUrl);
//         document.getElementById('giphyTitleDiv').innerHTML = trendingImageTitle;
// })};

// IN THE .THEN METHOD, PARSE THE JSON RESPONSE OBJECT AND FIND
// THE image_url key

// CHANGE THE SRC ATTRIBUTE ON THE IMG TAG TO THE image_url KEY

// CHANGE THE INNER TEXT OF THE giphyTitleDiv TO  THE title KEY
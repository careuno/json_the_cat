/* W02D4- Cats as a Service
• use a JSON API to fetch raw, structured data.
• build a command line app that makes it "easy" for users to query this dataset from the terminal.
• Users can provide any breed name, causing our application to fetch the information from the API and print out a short description of that breed

https://docs.thecatapi.com/

Scan through TheCatAPI's documentation and find the API docs for the API URL/endpoint which will return cat breed results.

*/

//const fs = require('fs');
const request = require('request');
// const args = process.argv;
// const commandArg = args.slice(2);
// const catBreed = commandArg[0];
const url = 'https://api.thecatapi.com/v1/breeds/search?q=';

/* Refactor the code in breedFetcher. This function should call the callback with either an error if there's a error or null if there isn't,
for the first argument. The table below shows in more detail what to pass into callback for each of
the two scenarios.*/


const fetchBreedDescription = function(catBreed, callback) {
  request(`${url}${catBreed}`, (error, response, body) => {
    if (error) {
      callback(error); //here you can pass only one parameter cause when you pass it to index.js it will read it as the first parameter, error, which is correct
    } else {
      const data = JSON.parse(body);
      if (!data[0]) {
        callback('0 results found'); //removing the console.log lines and using callback instead is what they mean by refactor
      } else {
        callback(null, data[0].description); //here you need to write null, data[0].description because when it passes back to index.js, it needs a placeholder for the error paramter to clue in that you are passing them the description
      }
    }
  });
};

module.exports = {
  fetchBreedDescription,
};
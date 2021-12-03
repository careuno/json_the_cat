//This file will be the one users can run and provide the breed name to.
//It will then require the breedFetcher file and call it's exported function

// index.js
const { fetchBreedDescription } = require('./breedFetcher');

const catBreed = process.argv[2];
// const args = process.argv;
// const commandArg = args.slice(2);
// const catBreed = commandArg[0];

fetchBreedDescription(catBreed, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});
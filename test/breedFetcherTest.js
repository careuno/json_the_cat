// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null); //error should be passed back as null so when you compare null,null it should be pass

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim()); //if there is no error, there is a description, and we should check the description we expect with the description we return

      done(); //since we are testing async functions we need to use done(); in each Mocha test to let the framework know when each test is completed
    });
  });
  it('returns an error, 0 results found', (done) => {
    fetchBreedDescription('bleh', (err, desc) => {
      // we expect an error
      assert.equal(err, '0 results found'); //we expect an error, but we have to compare with what error message we expect

      const expectedDesc = null; //we expect the description to be null

      // compare returned description
      assert.equal(expectedDesc, desc); //so we need to compare null(expectedDesc) with the desc it returns when running

      done(); //since we are testing async functions we need to use done(); in each Mocha test to let the framework know when each test is completed
    });
  });
});

// run test with npx mocha
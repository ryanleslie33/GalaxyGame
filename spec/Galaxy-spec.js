import {Galaxy} from 'C:/Users/ryan leslie/Desktop/GalaxyGame/src/Galaxy.js';

describe("Galaxy", function(){
  var newGalaxy;

  beforeEach(function() {
    newGalaxy = new Galaxy(3);
  });

  it ( "determines the age of a person on mercury", function(){
  //   var newGalaxy;
  // newGalaxy = new Galaxy(3);
  expect(newGalaxy.mercuryChecker()).toEqual(6);
});
});

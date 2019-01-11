import { Galaxy } from '/Users/Guest/desktop/GalaxyGame/src/Galaxy.js';

describe("Galaxy", function() {
  var newGalaxy;

  beforeEach(function() {
    newGalaxy = new Galaxy(3);
  });

  it ( "determines the age of a person on mercury", function() {

  expect(newGalaxy.mercuryChecker()).toEqual(12.5);
});

it ( "determines the age of a person on venus", function() {

expect(newGalaxy.venusChecker()).toEqual(4.838709677419355);
});

it ( "determines the age of a person on mars", function() {

expect(newGalaxy.marsChecker()).toEqual(1.595744680851064);
});

it ( "determines the age of a person on mars", function() {

expect(newGalaxy.marsChecker()).toEqual(1.595744680851064);
});


});

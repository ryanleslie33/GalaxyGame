import { Galaxy } from '/Users/Guest/desktop/GalaxyGame/src/Galaxy.js';

describe("Galaxy", function() {
  let newGalaxy;
  // let newGalaxy2;
  let newGalaxy3;

  beforeEach(function() {
    newGalaxy = new Galaxy(3);
    // newGalaxy2 = new Galaxy(20);
    newGalaxy3 = new Galaxy(81);
  });

  it ( "determines the age of a person on mercury and also the life expectancy", function() {

  expect(newGalaxy.mercuryChecker()).toEqual(" you are " + 12.5 + " years old in mercury " + "you have " + 67.5 + " years before you reach your average life expectancy");
});

it ( "determines the age of a person on mercury plus years they have passed life average", function() {

expect(newGalaxy3.mercuryChecker()).toEqual(" you are " + 337.5 + " years old in mercury " + "you have exceeded " + 257.5 + " years after your life expectancy");
});

it ( "determines the age of a person on venus and also the life expectancy", function() {

expect(newGalaxy.venusChecker()).toEqual(" you are " + 4.838709677419355 + " years old in venus " + "you have " + 75.16129032258064 + " years before you reach your average life expectancy");
});

it ( "determines the age of a person on mars and life expectancy", function() {

expect(newGalaxy.marsChecker()).toEqual(" you are " + 1.595744680851064 + " years old in mars " + "you have " + 78.40425531914893 + "years before you reach your average life expectancy");
});

it ( "determines the age of a person on jupiter and life expectancy", function() {

expect(newGalaxy.jupiterChecker()).toEqual(" you are " + 0.25295109612141653 + " years old in jupiter " + "you have " + 79.74704890387858 + "years before you reach your average life expectancy");
});

// it ( "determines how many years the user has left to live", function() {
//
// expect(newGalaxy2.lifeChecker()).toEqual([60]);
// });


});

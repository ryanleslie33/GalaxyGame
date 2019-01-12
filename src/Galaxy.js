export class Galaxy {

  constructor(age){
    this.age = age;
    // this.life = life;
    this.average = 80;
  }

  mercuryChecker() {
    let age = this.age;
    const mercury = 0.24;
    let answer = (age / mercury);
    const average = this.average;
    let output = []
    var i = i;
    let yearsBefore = (average - answer);
    let yearsAfter = (answer - average);

    if (age <= average) {

      output.push("you have " + yearsBefore + " years before you reach your average life expectancy")
    }
    else  {
      output.push("you have exceeded " + yearsAfter + " years after your life expectancy")
    }
    return (" you are " + answer + " years old in mercury " + output);
  }

  venusChecker() {
    let age = this.age;
    const venus = 0.62;
    let answer = (age / venus);
    const average = this.average;
    let output = []
    var i = i;
    let yearsBefore = (average - answer);
    let yearsAfter = (answer - average);

    if (age <= average) {

      output.push("you have " + yearsBefore + " years before you reach your average life expectancy")
    }
    else  {
      output.push("you have exceeded " + yearsAfter + "years after your life expectancy")
    }
    return (" you are " + answer + " years old in venus " + output);
  }

  marsChecker() {
    let age = this.age;
    const mars = 1.88;
    let answer =  (age / mars);
    const average = this.average;
    let output = []
    var i = i;
    let yearsBefore = (average - answer);
    let yearsAfter = (answer - average);

    if (age <= average) {

      output.push("you have " + yearsBefore + "years before you reach your average life expectancy")
    }
    else  {
      output.push("you have exceeded " + yearsAfter + "years after your life expectancy")
    }
    return (" you are " + answer + " years old in mars " + output);
  }

  jupiterChecker() {
    let age = this.age;
    const jupiter = 11.86;
    let answer =  (age / jupiter);
    const average = this.average;
    let output = []
    var i = i;
    let yearsBefore = (average - answer);
    let yearsAfter = (answer - average);

    if (age <= average) {

      output.push("you have " + yearsBefore + "years before you reach your average life expectancy")
    }
    else  {
      output.push("you have exceeded " + yearsAfter + "years after your life expectancy")
    }
    return (" you are " + answer + " years old in jupiter " + output);
  }

  lifeChecker() {
    var i = i;
    let age = this.age;
    const average = this.average;
    let output = []
    let yearsBefore = (average - age);
    let yearsAfter = (age - average);

      if (age <= average) {
        output.push(yearsBefore);
      }
      else  {
        output.push(yearsAfter)
      }

    return output;
  }


}

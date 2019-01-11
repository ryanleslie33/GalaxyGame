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
    return (" you are " + answer + " years old in mercury ");

  }

  venusChecker() {
    let age = this.age;
    const venus = 0.62;
    let answer = (age / venus);
    return (" you are " + answer + " years old in venus ");
  }

  marsChecker() {
    let age = this.age;
    const mars = 1.88;
    let answer =  (age / mars);
    return (" you are " + answer + " years old in mars ");
  }

  jupiterChecker() {
    let age = this.age;
    const jupiter = 11.86;
    let answer =  (age / jupiter);
    // let life = lifeChecker(answer);
    return (" you are " + answer + " years old in jupiter ");
  }

  lifeChecker() {
    var i = i;
    let age = this.age;
    const average = this.average;
    let yearsBefore = (average - age);
    let yearsAfter = (age - average);
    for(i = 0; i <= age; i ++) {
      if (age <= average) {
        return yearsBefore;
      }
      else {
        return yearsAfter;
      }
    }

  }


}

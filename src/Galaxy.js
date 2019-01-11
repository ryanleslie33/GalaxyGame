export class Galaxy {

  constructor(age){
    this.age = age;
    // this.life = life;
    // this.average = 80;
  }

mercuryChecker() {
let age = this.age;
const mercury = 0.24;
let answer = (age / mercury);
return answer;

}

venusChecker() {
  let age = this.age;
  const venus = 0.62;
    let answer = (age / venus);
  return answer;
}

marsChecker() {
  let age = this.age;
  const mars = 1.88;
  let answer =  (age / mars);
      return answer;
}

jupiterChecker() {
  let age = this.age;
  const jupiter = 11.86;
  let answer =  (age / jupiter);
      return answer;
}


}

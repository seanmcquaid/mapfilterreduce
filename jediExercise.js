var personnel = [
    {
      id: 5,
      name: "Luke Skywalker",
      pilotingScore: 98,
      shootingScore: 56,
      isForceUser: true,
    },
    {
      id: 82,
      name: "Sabine Wren",
      pilotingScore: 73,
      shootingScore: 99,
      isForceUser: false,
    },
    {
      id: 22,
      name: "Zeb Orellios",
      pilotingScore: 20,
      shootingScore: 59,
      isForceUser: false,
    },
    {
      id: 15,
      name: "Ezra Bridger",
      pilotingScore: 43,
      shootingScore: 67,
      isForceUser: true,
    },
    {
      id: 11,
      name: "Caleb Dume",
      pilotingScore: 71,
      shootingScore: 85,
      isForceUser: true,
    },
  ];

let jediPersonnel = personnel.filter((person)=> person.isForceUser);
// console.log(jediPersonnel);

let jediScores = jediPersonnel.map((jedi)=>jedi.pilotingScore + jedi.shootingScore);
// console.log(jediScores);

let totalJediScore = jediScores.reduce((acc,score)=> acc + score);
console.log(totalJediScore);

// ONE LINE CHAINING OF ALL OF THESE 

let allJediMethods = personnel.filter((person)=> person.isForceUser).map((jedi)=>jedi.pilotingScore + jedi.shootingScore).reduce((acc,score)=> acc + score);
console.log(allJediMethods);
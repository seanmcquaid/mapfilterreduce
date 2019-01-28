// .reduce runs a callback for each element of an array
// different than map in that reduce passes the result of this callback from one array element to another
// The accumulator can be pretty much anything

var pilots = [
    {
      id: 10,
      name: "Poe Dameron",
      years: 14,
    },
    {
      id: 2,
      name: "Temmin 'Snap' Wexley",
      years: 30,
    },
    {
      id: 41,
      name: "Tallissan Lintra",
      years: 16,
    },
    {
      id: 99,
      name: "Ello Asty",
      years: 22,
    }
  ];
  const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);

//   starting value was set to 0 but can be set to anything to start accumulating
// will return total years between each pilot
// acc increases on each iteration through the array
console.log(totalYears);

var mostExpPilot = pilots.reduce(function (oldest, pilot) {
    return (oldest.years || 0) > pilot.years ? oldest : pilot;
  }, {});

//   Accumulator = oldest. Callback compares the accumulator 
//   to each pilot. If a pilot has more years of experience 
//   than oldest, then that pilot becomes the new oldest 
//   so that’s the one I return.

console.log(mostExpPilot);
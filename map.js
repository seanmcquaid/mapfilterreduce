// What you have
var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
  ];
  // What you need
  [20, 24, 56, 88]

//   using forEach

// var officersIds = [];
// officers.forEach(function (officer) {
//   officersIds.push(officer.id);
// });

// using map

const officersIds = officers.map((officer) => officer.id);

console.log(officersIds);

// map takes 2 arguments, a callback and optional context

// the callback runs for EACH VALUE IN THE ARRAY and 
// returns a new value for each in the resulting array

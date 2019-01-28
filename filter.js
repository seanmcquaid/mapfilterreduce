// What if you have an array, but only want some of 
// the elements in it? That’s where .filter() comes in!

var pilots = [
    {
      id: 2,
      name: "Wedge Antilles",
      faction: "Rebels",
    },
    {
      id: 8,
      name: "Ciena Ree",
      faction: "Empire",
    },
    {
      id: 40,
      name: "Iden Versio",
      faction: "Empire",
    },
    {
      id: 66,
      name: "Thane Kyrell",
      faction: "Rebels",
    }
  ];

//   Say we want two arrays now: one for rebel pilots, 
// the other one for imperials. With .filter() 
// it couldn’t be easier!
// pilot = each element in the array
// .faction will check to see if that condition is met, if so , this will be put into the resulting array
const rebels = pilots.filter(pilot => pilot.faction === "Rebels");
const empire = pilots.filter(pilot => pilot.faction === "Empire");

// Basically, if the callback function returns true, the 
// current element will be in the resulting array. 
// If it returns false, it won’t be.
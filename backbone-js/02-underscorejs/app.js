'use strict';
var ironman = {
    name: "Tony Stark",
    alias: "Iron Man"
   };
   var avengers_array = [
    {name: "Tony Stark", alias: "Iron Man", ability: "flight"},
    {name: "Bruce Banner", alias: "The Incredible Hulk", ability: "superhuman strength"},
    {name: "Steve Rogers", alias: "Captain America", ability: "superhuman strength"},
    {name: "Clint Barton", alias: "Hawkeye", ability: "superior hand-eye coordination"},
    {name: "Thor Odinson", alias: "Thor", ability: "teleportation"},
    {name: "Natasha Romanova", alias: "Black Widow", ability: "espionage"}
   ];

//    _.each(ironman, function(value, key){ alert(key+': '+value); });
   // .last() or .first()... does exactly what you think
    var firstAvenger = _.first(avengers_array); // returns the first value in an array
    var lastTwoAvengers = _.last(avengers_array, 2); // The optional second parameter allows for additional values to be returned, but when specified, comes back as an array

    // .range()
var newArray = _.range(0,10); // returns an array with the values from argument1 (inclusive) to argument2 (exclusive)


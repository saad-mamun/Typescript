"use strict";
let isTrue = true;
let age = 30;
let fullName = "Liton";
fullName = "Mamun";
let lastName = "Al-Mamun";
lastName = 198;
const names = [];
names.push("Liton");
const aj = ["liton", "mamun"];
let myTuple;
myTuple = [4, true, "Liton Vaiya"];
myTuple.push("Mamun");
const car = {
    names: "Tesla",
    model: 2023
};
car.names = "Toyota";
const bike = {
    names: "Suzuki",
};
car.model = 2022;
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 12] = "North";
    CardinalDirections[CardinalDirections["East"] = 13] = "East";
    CardinalDirections[CardinalDirections["South"] = 14] = "South";
    CardinalDirections[CardinalDirections["West"] = 15] = "West";
})(CardinalDirections || (CardinalDirections = {}));
console.log(CardinalDirections.South);

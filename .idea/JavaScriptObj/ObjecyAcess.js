/*
To access an object property, Dot notation and Bracket notation can be used*/

var nameobj = {
    firstname: "Babatunde",
    lastName: "Kuku",
    otherName: "Gbolahan",
};

var firstNameValue =nameobj.firstname;
var lastnameValue = nameobj.lastName;
var otherName = nameobj.otherName;

console.log(firstNameValue );
console.log(lastnameValue);
console.log(otherName);

var animalobj = {

    " animal1 " : "Dog",
    " animal 2 " :" cat ",
};
var animal1Value = animalobj[" animal1 "];
var animal2Value = animalobj[" animal 2 "];
    animalobj[" animal1 "] = " Bingo "
    animalobj[" animal 2 "] = "kitty"
    animalobj.animal4 = " Run "
    animalobj.animal3 = "cow"
/*    delete animalobj.animal3;
*/
console.log(animal1Value);
console.log(animal2Value);
console.log(animalobj)
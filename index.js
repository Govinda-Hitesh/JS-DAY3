//hoisting : its supported with that of var keywords and with the function . let and const keywords donot upport hoisting.

//let keyword variables cannot be accessed before declaration/iitialization
// console.log(game);
// const game = "cricket";
// console.log(game1);
// let game1 ="cricket";

//var keyword variables are hoisted.
console.log(game2);
var game2;
game2 = "badminton";
console.log(game2);//badminton

//note: for var keywords variables, as long as they are not assign value give us undefind but the moment we declare a value to it, it will give us the assigned value.

//fnctions are hosted of which we can call the function before declaring the function.

add(2,3);//arguments

function add(a,b){//parameters
    let result = a+b;
    console.log(result);
}




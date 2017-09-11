//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (name, status, color, hungry) {
  this.name = name;
  this.status = status;
  this.color = color;
  this.hungry = hungry;
};


// Instances of Dog
// Needed: sadie, moonshine, atticus
let sadie = new Dog("sadie", "normal", "black", false);
let moonshine = new Dog("moonshine",'', '', true);
let atticus = new Dog("atticus");


//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (name, pet) {
  this.name = name;
  this.pet = pet;
};


// Instances of Human
// Needed: mason, julia



let mason = new Human("mason", sadie);
let julia = new Human("julia");

// mason.protoype = new Human();



mason.prototype = new Human();


mason.prototype.pet = function(animal){
  this.pet(animal);
};

console.log(mason.pet);

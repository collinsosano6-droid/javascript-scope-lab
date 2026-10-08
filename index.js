// You will be developing a menu with milkshakes and burgers. 
// You will also be creating menu features for both the milkshake and burger.

//variables in global scope
const burgers = [`Hamburger`, `Cheeseburger`];
let featuredDrink = `Strawberry Milkshake`;

// console.log(burgers);
// console.log(featuredDrink);

function addBurger(){
    const newBurger = `Flatburger`;
    return burgers.push(newBurger) ;
}


if(true){
    const anotherNewBurger = `Maple Bacon Burger`;
    burgers.push(anotherNewBurger);
}

function changeFeaturedDrink (){
   featuredDrink = `The JavaShake`;
   return featuredDrink;
}

// console.log(burgers);
// console.log(featuredDrink);


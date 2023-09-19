class Hamster {
    constructor(owner, name, price) {
        this.owner = '';
        this.name = name;
        this.price = 15;
    }

    wheelRun() {
        console.log(`squeak squeak`);
        // `When ${this.name} runs, the wheel goes 
    }

    eatFood() {
        console.log('nibble nibble');
    }

    getPrice() {
        return this.price;
        
    }
    
}

 const hammy = new Hamster('Tae', 'Hammy');

// hammy.getPrice();
// console.log(hammy.getPrice());



class Person {
    constructor (name, age, height, weight, mood, hamsters, bankAccount) {
        
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
        
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age
    }

    getWeight() {
        return this.weight;
    }

    greet() {
        console.log(`Hello ${this.name}!`);
    }

    eat() {
        this.weight += 2;
        this.mood += 2;
    }

    exercise() {
        this.weight -= 2;
    }

    ageUp() {
        this.age = 5 + 9 + 15;
        this.height ++;
        this.weight ++;
        this.mood --;
        this.bankAccount += 10;
    }

    buyHamster(hamster) {
        this.hamsters.push(hamster);
        this.mood += 10;
        this.bankAccount -= hamster.getPrice();
    }
}

// const human = new Person('Tae');
// // console.log(human);
// human.eat();
// console.log(human);



// const boy = new Person ('Timmy');
// // console.log(boy);

// boy.ageUp();
// console.log(boy);

// // boy.eat();
// // console.log(boy);

// // boy.exercise();
// // console.log(boy);

// // boy.ageUp();
// // console.log(boy);


//  const Gus = new Hamster('Timmy', 'Gus');

// //  boy.buyHamster(Gus);
// //  console.log(boy); // how do I log the owner of the gus the hamster?

// //  boy.buyHamster();
// //  console.log(boy);

// // boy.ageUp();
// // console.log(boy);

// boy.eat();
// console.log(boy);

// boy.exercise();
// console.log(boy);


class Dinner {
    constructor(appetizer, entree, dessert) {
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;
    }

}

class Chef {
    dinnerMenu(appetizer, entree, dessert) {
        return new Dinner(appetizer, entree, dessert);
    }
}


const chef = new Chef();

const dinner1 = chef.dinnerMenu('Caesar Salad', 'Wagyu Steak and 5 Cheese Baked Mac', 'Mango Mochii');
const dinner2 = chef.dinnerMenu('Spinach and Artichokke dip', 'Garlic Rosemary Chicken and Seasoned Red Potatos', 'Apple A La Mode');
const dinner3 = chef.dinnerMenu('Lobster Bisque', 'Angel hair Carbonara', 'Japanese Cheesecake Bread with Berries');




console.log(dinner1);
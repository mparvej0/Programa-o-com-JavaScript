//Create Array
let info = ["ironman", 97, "Delhi", 82, "batman", 75,"thor", 64, "hulk",36, "rahul"];
console.log(info, info.length, typeof info);

//Array Indices
let marks = [96, 75, 48, 83, 66];
console.log(marks[0], marks[1], marks[3], marks[4], marks[2]);

//Loping Over
let heros = ["ironman", "hulk", "thor", "batman"];
for(let i = 0; i < heros.length; i++) {
    console.log(heros[i]);
}

//Array Methods
let foodItems = ["Potato", "Apple", "Litchi", "Tomato"]
foodItems.push("Chips", "Burger", "Paneer");
console.log(foodItems);
foodItems.pop();
console.log(foodItems);
console.log(foodItems.toString());
let veggies = ["Brinjal", "Lady finger", "Onion"]
let veg = foodItems.concat(veggies);
console.log(veg);
foodItems.unshift("Cucumber");
console.log(foodItems)
foodItems.shift("Litchi")
console.log(foodItems);
console.log(foodItems.slice(1, 4));
foodItems.splice("Watermelon", "Mango", "Gauva");
console.log(foodItems);
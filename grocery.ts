// definition of a class with the obvious name Grocery
class Grocery {
	// The class should have some basic attributes such as name, quantity, etc
	name: string;
	quantity: number;
	price: number;
	
	constructor(name: string, quantity: number, price: number) {
		this.name = name;
		this.quantity = quantity;
		this.price = price;
	}
}

let grocery_list = [
	new Grocery("milk", 3, 3),
	new Grocery("bread", 6, 2),
	new Grocery("eggs", 11, 1)
]

for(var index in grocery_list) {
	// Add the text content
	p.textContent = index.name.concat(index.quantity.toString());
}

// 1. Select the div element using the id property
const app = document.getElementById("app");

// 2. Create a new <p></p> element programmatically
const p = document.createElement("p");

// 3. Add the text content
// p.textContent = grocery_list[0];
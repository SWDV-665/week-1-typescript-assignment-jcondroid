// Definition of a class with the obvious name Grocery
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

// 1. Select the div element using the id property
const app = document.getElementById("app");

// 2. Create a new <p></p> element programmatically
const table = document.createElement("table");

// 3. Add the text content
for(var index of grocery_list) {
	table.textContent = table.textContent.concat(index.name).concat(", ").concat(index.quantity.toString()).concat(", ").concat(index.price.toString());
}

// 4. Append the table element to the div element
app?.appendChild(table);
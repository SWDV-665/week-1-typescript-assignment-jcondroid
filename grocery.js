// Definition of a class with the obvious name Grocery
var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
    return Grocery;
}());
var grocery_list = [
    new Grocery("milk", 3, 3),
    new Grocery("bread", 6, 2),
    new Grocery("eggs", 11, 1)
];
// 1. Select the div element using the id property
var app = document.getElementById("app");
// 2. Create a new <p></p> element programmatically
var p = document.createElement("table");
// 3. Add the text content
for (var _i = 0, grocery_list_1 = grocery_list; _i < grocery_list_1.length; _i++) {
    var index = grocery_list_1[_i];
    // console.log(index);
    // Add the text content
    p.textContent = p.textContent.concat(index.name).concat(", ").concat(index.quantity.toString()).concat(", ").concat(index.price.toString());
}
// 3. Add the text content
// p.textContent = "Hello, World!";
// p.textContent = grocery_list;
// 4. Append the p element to the div element
app === null || app === void 0 ? void 0 : app.appendChild(p);

const cartItem = { name: "Hp", price: 50000, quantity: 1 };
console.log("Before update:", cartItem);
cartItem.name = "dell";
cartItem.price = 49000;
cartItem.quantity = 3;
console.log("After update:", cartItem);
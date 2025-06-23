let cart = {};
const products = [
    {id : 1,name: "Product 1", price: 100},
    {id : 2,name: "Product 2", price: 200},
    {id : 3,name: "Product 3", price: 300},
];
// const showproduct  =  () =>
// {
//     products.forEach((product) => {
//         console.log(`ID: ${product.id}, Name: ${product.name}, Price: $ ${product.price}`);
//     });
// }
// showproduct();

const addToCart = (id) => {
    cart = {...cart, [id]: 1};
    console.log(`Product with ID ${id} added to cart.`);
    console.log("Current Cart:", cart);

};
addToCart(1);
addToCart(2);

// const showproduct = () => {
//     products.forEach((product) => {
//         console.log(`ID: ${product.id}, Name: ${product.name}, Price: $${product.price}`);
//     });
// }
// showproduct();

const showcart = () => {
    if (Object.keys(cart).length === 0) {
        console.log("Cart is empty.");
        return;
    }

    console.log("Current Cart:");
    for (const id in cart) {
        const product = products.find(p => p.id == id);
        if (product) {
            console.log(`ID: ${product.id}, Name: ${product.name}, Price: $${product.price}`);
        }
    }
};
showcart();


const increment = (id)=>{
    cart = {...cart, [id]: (cart[id] || 0) + 1};
}
// increment(1);
// increment(2);
const decrement = (id)=>
{
    cart = {...cart,id : cart[id]-1};
}

// decrement(1);
// decrement(2);
const totalsum = () => {
    return products.reduce((accumulator, product) => {
        if (cart[product.id]) {
            return accumulator + product.price * cart[product.id];
        }
        return accumulator;
    }, 0);
};
console.log(totalsum());



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

// const addToCart = (id) => {
//     cart = {...cart, [id]: 1};
//     console.log(`Product with ID ${id} added to cart.`);
//     console.log("Current Cart:", cart);

// };
// addToCart(1);
// addToCart(2);

// const showproduct = () => {
//     products.forEach((product) => {
//         console.log(`ID: ${product.id}, Name: ${product.name}, Price: $${product.price}`);
//     });
// }
// showproduct();

const showcart = () => {
    if (cart.length === 0) {
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
 }
 showcart();










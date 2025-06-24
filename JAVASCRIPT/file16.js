//Promise
const f1 = () => {
    return 5;
};
const f2 = (x) => {
    console.log(x+5);
}
const n = f1();
f2(n); // Output: 10
setInterval(() => {
    console.log("Hello World");
}, 1000); // Output: Hello World every second
//Promise
// const f1 = () => {
//     return 5;
// };
// const f2 = (x) => {
//     console.log(x+5);
// }
// const n = f1();
// f2(n); // Output: 10
// setInterval(() => {
//     console.log("Hello World");
// }, 1000); // Output: Hello World every second



// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//     console.log("Promise resolved!"); // Step 1

//     setTimeout(() => {
//         console.log("Another111 promise resolved!"); // Step 2

//         setTimeout(() => {
//             console.log("Third111 promise resolved!"); // Step 3
//         }, 2000); // from 7s to 9s → 2s later

//     }, 2000); // from 5s to 7s → 2s later

// }, 5000); // Step 1: after 5s

// });
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Another promise resolved!");
//     }, 7000);
// });
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Third promise resolved!");
//     }, 9000);
// });

// promise1.then((result) => {
//     console.log(result);
//     return promise2;
// }).then((result) => {
//     console.log(result);
//     return promise3;
// }).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.error("Error:", error);
// });





// const f1 = () => {
//     return new Promise((resolve, reject) => {
//        reject("Error in f1");
//     });
// };
// const f2 = (x) => {
//    console.log(x+5);
// };
// f1().then((n)=>f2(n)).catch((err)=>console.log(err))

// promise1: nested timeouts inside a Promise


// const promise1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Promise resolved!"); // After 5s

//             setTimeout(() => {
//                 console.log("Another111 promise resolved!"); // After 7s

//                 setTimeout(() => {
//                     console.log("Third111 promise resolved!"); // After 9s
//                     resolve(); // resolve after last log
//                 }, 2000);

//             }, 2000);

//         }, 5000);
//     });
// };

// // Simple promise2
// const promise2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Another promise resolved!");
//         }, 2000); // You can use any delay
//     });
// };

// // Simple promise3
// const promise3 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Third promise resolved!");
//         }, 2000); // You can use any delay
//     });
// };

// // Execute in order
// promise1()
//   .then(() => {
//       return promise2();
//   })
//   .then((result2) => {
//       console.log(result2);
//       return promise3();
//   })
//   .then((result3) => {
//       console.log(result3);
//       console.log("All Promises Done");
//   })
//   .catch((err) => {
//       console.error("Error:", err);
//   });



// fetch("https://jsonplaceholder.typicode.com/users/")
//   .then(response => {
//     // if (!response.ok) {
//     //   throw new Error("Network response was not ok");
//     // }
//     return response.json();
//   })
//   .then(data => {
//     data.forEach(post => {
//       console.log(post.name);
//       console.log(post.email);
      
//     });
//   })
//   .catch(error => {
//     console.error("Error:", error);
//   });

const fetchData = async () =>
{
    const res = await fetch("https://jsonplaceholder.typicode.com/users/");
    const data = await res.json();
    data.forEach(post => {
        console.log(post.name);
        console.log(post.email);
    });
}
fetchData().catch(error => {
    console.error("Error:", error);
});
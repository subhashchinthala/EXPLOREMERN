db.employees.find({department:"IT"})
// [
//   {
//     _id: ObjectId('685b8385ce273981c4748a69'),
//     name: 'John Smith',
//     email: 'john@gmail.com',
//     department: 'IT',
//     salary: 1456,
//     location: [ 'FL', 'OH' ],
//     date: 'Wed Jun 25 2025 10:35:09 GMT+0530 (India Standard Time)'
//   },
//   {
//     _id: ObjectId('685b83e1ce273981c4748a6a'),
//     name: 'John Smith',
//     email: 'john@gmail.com',
//     department: 'IT',
//     salary: 1456,
//     location: [ 'FL', 'OH' ],
//     date: 'Wed Jun 25 2025 10:36:41 GMT+0530 (India Standard Time)'
//   },
//   {
//     _id: ObjectId('685b83edce273981c4748a6b'),
//     name: 'Mike Joseph',
//     email: 'mike@gmail.com',
//     department: 'IT',
//     salary: 2456,
//     location: [ 'FL', 'TX' ],
//     date: 'Wed Jun 25 2025 10:36:53 GMT+0530 (India Standard Time)'
//   },
//   {
//     _id: ObjectId('685b83edce273981c4748a6c'),
//     name: 'Cathy G',
//     email: 'cathy@gmail.com',
//     department: 'IT',
//     salary: 3456,
//     location: [ 'FL', 'TX' ],
//     date: 'Wed Jun 25 2025 10:36:53 GMT+0530 (India Standard Time)'
//   }
// ]


db.employees.find({department:{$eq:"IT"}})
// $eq ==> equal to ,$gt ==> greater than,$gte ==>greater than or equal to, $lt ==> less than,$lte ==> less than or equal to
// [
//   {
//     _id: ObjectId('685b8385ce273981c4748a69'),
//     name: 'John Smith',
//     email: 'john@gmail.com',
//     department: 'IT',
//     salary: 1456,
//     location: [ 'FL', 'OH' ],
//     date: 'Wed Jun 25 2025 10:35:09 GMT+0530 (India Standard Time)'
//   },
//   {
//     _id: ObjectId('685b83e1ce273981c4748a6a'),
//     name: 'John Smith',
//     email: 'john@gmail.com',
//     department: 'IT',
//     salary: 1456,
//     location: [ 'FL', 'OH' ],
//     date: 'Wed Jun 25 2025 10:36:41 GMT+0530 (India Standard Time)'
//   },
//   {
//     _id: ObjectId('685b83edce273981c4748a6b'),
//     name: 'Mike Joseph',
//     email: 'mike@gmail.com',
//     department: 'IT',
//     salary: 2456,
//     location: [ 'FL', 'TX' ],
//     date: 'Wed Jun 25 2025 10:36:53 GMT+0530 (India Standard Time)'
//   },
//   {
//     _id: ObjectId('685b83edce273981c4748a6c'),
//     name: 'Cathy G',
//     email: 'cathy@gmail.com',
//     department: 'IT',
//     salary: 3456,
//     location: [ 'FL', 'TX' ],
//     date: 'Wed Jun 25 2025 10:36:53 GMT+0530 (India Standard Time)'
//   }
// ]

db.employees.find({salary:{$gt:3000}})
// [
//   {
//     _id: ObjectId('685b83edce273981c4748a6c'),
//     name: 'Cathy G',
//     email: 'cathy@gmail.com',
//     department: 'IT',
//     salary: 3456,
//     location: [ 'FL', 'TX' ],
//     date: 'Wed Jun 25 2025 10:36:53 GMT+0530 (India Standard Time)'
//   }
// ]


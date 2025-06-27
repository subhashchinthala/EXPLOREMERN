db.employees.aggregate([
     {$match:{department:"IT"}},
   {$project:{name:1,salary:1}},
])
// [
//   {
//     _id: ObjectId('685b83e1ce273981c4748a6a'),
//     name: 'John Smith',
//     salary: 2000
//   },
//   {
//     _id: ObjectId('685b83edce273981c4748a6b'),
//     name: 'Mike Joseph',
//     salary: 2456
//   },
//   {
//     _id: ObjectId('685b83edce273981c4748a6c'),
//     name: 'Cathy G',
//     salary: 3456
//   }
// ]



 db.employees.aggregate([
     {$match:{department:"IT"}},
     {$project:{name:1,salary:1}},
     {$sort:{salary:1}}
])
// [
//   {
//     _id: ObjectId('685b83e1ce273981c4748a6a'),
//     name: 'John Smith',
//     salary: 2000
//   },
//   {
//     _id: ObjectId('685b83edce273981c4748a6b'),
//     name: 'Mike Joseph',
//     salary: 2456
//   },
//   {
//     _id: ObjectId('685b83edce273981c4748a6c'),
//     name: 'Cathy G',
//     salary: 3456
//   }
// ]



 db.employees.aggregate([
      {$match:{department:"IT"}},
      {$project:{name:1,salary:1}},
      {$sort:{salary:1}},
      {$limit:3}
])
// [
//   {
//     _id: ObjectId('685b83e1ce273981c4748a6a'),
//     name: 'John Smith',
//     salary: 2000
//   },
//   {


//     _id: ObjectId('685b83edce273981c4748a6b'),
//     name: 'Mike Joseph',
//     salary: 2456
//   },
//   {
//     _id: ObjectId('685b83edce273981c4748a6c'),
//     name: 'Cathy G',
//     salary: 3456
//   }
// ]


db.employees.aggregate([
    {$project : {
        _id:0,name:1,
    }}
])
db.employees.aggregate({department: "IT"},{name:1,email:1})
//display annaul saalary of all employeez


db.employees.aggregate([
  {
    $project: {
      name: 1,
      email: 1,
      annualSalary: { $multiply: ["$salary", 12] }
    }
  }
])

//display 

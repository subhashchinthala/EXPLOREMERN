db.employees.updateOne({email:"sub@gmail.com"},{$set:{salary:5000}}) // updates the salary of the employee with email "

db.employees.updateMany({department:"IT"},{$set:{points: 1}});

db.employees.updateMany({},{$rename : {points : "score"}});

db.employees.updateMany({},{$unset : {score : ""}});

db.employees.updateMany({},{$push : {skills : "Java"}});

db.employees.updateMany({email:"Sub@gmail.com"},{$pull : {skills : "MERN"}});

db.employees.updateMany({email:"Sub@gmail.com"},{$addToSet : {skills : "MERN"}});

db.employees.updateMany({email:"Sub@gmail.com"},{$pop : {skills:-1} });


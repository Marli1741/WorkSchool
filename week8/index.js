const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://localhost:27017/Week8';

mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', (err) => {
   console.log(`Error occurred during connection: ${err}`);
});

db.once('connected', () => {
   console.log(`Connected to ${MONGO_URI}`);
});

const PersonSchema = new mongoose.Schema({
   name: { type: String, required: true },
   age: Number,
   Gender: String,
   Salary: Number
});

// Create the model
const Person = mongoose.model('Person', PersonSchema, 'personCollection');

// Insert a single document
const doc1 = new Person({
   name: 'JACK',
   age: 20,
   Gender: "Male",
   Salary: 3456
});

doc1
   .save()
   .then((savedDoc) => {
       console.log("New document has been added into your database:", savedDoc);
   })
   .catch((err) => {
       console.error("Error saving the document:", err);
   });

const manyPersons = [
   { name: 'Simon', age: 42, Gender: "Male", Salary: 3456 },
   { name: 'Neesha', age: 23, Gender: "Female", Salary: 1000 },
   { name: 'Mary', age: 27, Gender: "Female", Salary: 5402 },
   { name: 'Mike', age: 40, Gender: "Male", Salary: 4519 }
];

Person.insertMany(manyPersons)
   .then(() => {
       console.log("Data inserted successfully!");
   })
   .catch((error) => {
       console.error("Error inserting multiple documents:", error);
   });

// Finding all the documents in the collection

var givenage = 30;

Person.find({ Gender: "Female", age: { $gte: givenage } }) // Find all Female users with age >= 30
  .sort({ Salary: 1 }) // Sort ascending by Salary
  .select('name Salary age') // Select only name, Salary, and age
  .limit(10) // Limit to 10 items
  .exec() // Execute the query
  .then(docs => {
    console.log(`Showing females with age greater than or equal to ${givenage}:`);
    docs.forEach(function(Doc) {
      console.log(Doc.age, Doc.name); // Print the age and name of each document
    });
  })
  .catch(err => {
    console.error(err);
  });

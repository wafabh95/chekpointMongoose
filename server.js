const mongoose = require('mongoose');
const person = require('./PersonSchema');
mongoose.connect('mongodb+srv://mongodb-user:rootroot@cluster0.ckjkp.mongodb.net/personDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

var user = new person({
    name: "salma",
    age: 25,
    favoriteFoods: ['Apple', 'Banana']
  });

  var user = new person({
    name: "wafa",
    age: 22,
    favoriteFoods: ['Apple', 'Banana','orange','pizza']
  });
  //1 Create and Save a Record of a Model
  user.save()
.then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   })
  //2Create Many Records with model.create()
  
    person.create([{name:"client",age:"24",favoriteFoods:['pizza']}], (err, data) => {
      if (err) console.log(err);
      
    });
    person.create([{name:"client1",age:"45",favoriteFoods:['spaghetti']}], (err, data) => {
        if (err) console.log(err);
        
      });

      //3Use model.find() to Search Your Database

      person.find({name:"client"},(err,data)=>{
          if(err)
          console.log(err)
          else console.log(data)
      })
    //   4Use model.findOne() to Return a Single Matching Document from Your Database

 person.findOne({name:"client"},(err,data)=>{
          if(err)
          console.log(err)
          else console.log(data)
      })

      



    //   5Use model.findById() to Search Your Database By _id
    person.findById({_id:'6058c80178e60928e0d30f4a'},(err, data)=>{
        if(err)
        console.log(err)
        else
        console.log(data)
    })
    // 6Perform Classic Updates by Running Find, Edit, then Save
    person.findOneAndUpdate({name:"client1",age:"45",favoriteFoods:['spaghetti','hamburger']},(err, data)=>{
        if(err)
        console.log(err);
        else
        console.log(data);
    })
    // findByIdAndRemove
    person.findByIdAndRemove({name:"client1"},(err, data)=>{
        if(err)
        console.log(err);
        else
        console.log(data);
    })
    // remove
    person.remove({name:"client1"},(err, data)=>{
        if(err)
        console.log(err);
        else
        console.log(data);
    })

    var queryChain = function(done) { var foodToSearch = "burrito"; Person 
    .find({favoriteFoods:foodToSearch}) 
    .sort({name : "asc"}) 
    .limit(2) 
    .select("-age") 
    .exec((err, data) => { if(err) done(err); done(null, data); }) }; 
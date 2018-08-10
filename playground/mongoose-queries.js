const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b6c1bd927b59e5e8ca4b213';

if(!ObjectID.isValid(id)){
    console.log('ID is not valid in this case');
}

User.find({
    _id:id
}).then((out)=>{
    console.log('User',out);
});

// Todo.findOne({
//     _id:id
// }).then((todo)=>{
//     console.log('Todo',todo);
// });

User.findById(id).then((user)=>{
    if(!user){
        return console.log('ID Does nto match');
    }
    console.log('USER by ID',JSON.stringify(todo,undefined,2));
}).catch((e)=> console.log(e));
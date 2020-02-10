
// Add third npm modules
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-app-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

const User = mongoose.model('User',{
    name: {
        type: String
    }, 
    age: {
        type: Number
    }
})

const me = new User({
    name: 'Chun',
    age: 34
})

me.save().then(() => {
    console.log(me)
}).catch(() => {
    console.log('Error', error)
})

const Task = mongoose.model('Task', {
    description: {
        type: String
    }, 
    completed: {
        type: Boolean
    }
})


const task = new Task({
    description: 'Learn the mongoose library',
    completed: false
})

task.save().then(() => {
    console.log(task) 
}).catch(() => {
    console.log(error)
})
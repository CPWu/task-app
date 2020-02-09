// Examples of CRUD (Create, Read, Update, Delete) examples

// NPM Modules
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

// Variables
const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "task-app"

const id = new ObjectID()
console.log(id)

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log("Unable to connect to database.") 
    }

    const db = client.db(databaseName)

    db.collection('users').findOne({
        name: 'Chun'
    }, (error, user) => {
        if (error) {
            return console.log('Unable to fetch')
        }

        console.log(user)
    })
})



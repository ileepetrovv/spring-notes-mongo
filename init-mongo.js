const username = process.env.MONGO_USERNAME || 'notesuser';
const password = process.env.MONGO_PASSWORD || 'notespwd';
const database = process.env.MONGO_INITDB_DATABASE || 'notesdb';

// init-mongo.js
db.createUser({
    user: username,
    pwd: password,
    roles: [
        {
            role: 'readWrite',
            db: database
        }
    ]
});


db = db.getSiblingDB(database);

db.notes.insertOne({
    text: "Welcome to Notes App with Environment Variables!",
    createdAt: new Date()
});
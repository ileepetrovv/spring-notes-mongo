// init-mongo.js
db.createUser({
    user: 'notesuser',
    pwd: 'notespwd',
    roles: [
        {
            role: 'readWrite',
            db: 'notesdb'
        }
    ]
});

// Креирај колекција и внеси тестови податоци ако сакаш (опционално)
db.notes.insertOne({
    text: "Welcome to Notes App!",
    createdAt: new Date()
});
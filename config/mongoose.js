const mongoose = require('mongoose');







mongoose.connect('mongodb+srv://pawars897:Google005@cluster0.dhsdwtf.mongodb.net/habit-tracker?retryWrites=true&w=majority');

const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;

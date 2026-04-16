const mongoose = require('mongoose');


function connectToDb() {
    const mongoUri = process.env.MONGO_URI || process.env.DB_CONNECT;

    if (!mongoUri) {
        console.log('Mongo connection string is missing. Set MONGO_URI (preferred) or DB_CONNECT.');
        return;
    }

    mongoose.connect(mongoUri).then(() => {
        console.log('Connected to DB');
    }).catch(err => console.log(err));
}


module.exports = connectToDb;

const mongoose = require('mongoose');

//database connection
mongoose.connect('mongodb+srv://thanhdat0122:thanhdat123456.@cluster0.4sgqz9v.mongodb.net/', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (error) => console.log('error message', error));

module.exports = db;

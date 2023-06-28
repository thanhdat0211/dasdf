require('dotenv').config();
const app = require('./app');
const db = require('./db');

const PORT = process.env.PORT || 3000;

async function startServer() {
	//on database connection
	db.once('open', () => console.log('connected to the databse'));

	app.listen(PORT, () => {
		console.log(`Server started at http://localhost:${PORT}`);
	});
}

startServer();

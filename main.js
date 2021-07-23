require('dotenv').config();
const mdlStores = require('./utils/nearbyStores');

let express = require("express");
const app = express();

const nearbyStores = await mdlStores.defineNearbyStores();

app.then().listen(process.env.API_PORT, () => {
	console.log(`Server started at port ${process.env.API_PORT}`);
});
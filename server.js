// MONGO DB IMPORT
const { MongoClient } = require("mongodb");

// WEB SERVER INITIALISATION
const cors = require('cors');
const express = require('express');

const app = express();
var http = require('http').Server(app);
app.use(cors())

// ENVIRONMENT VARIABLE
const env = require('dotenv').config();

// CONNECTION URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// DATABASE NAME
const dbName = "restaurant-search";
const db = client.db(dbName);

// CHECK THE STATUS OF THE SERVER
app.get('/status', (req, res) => {
    console.log("Server Status Checked!");
    res.sendStatus(200)
});

async function main() {
    // USE CONNECT METHOD TO CONNECT TO THE SERVER
    await client.connect();
    console.log("Connected successfully to server");
}

app.get("/getAllRestaurant", async (req, res) => {
    const collection = db.collection("restaurant");
    console.log(collection)

    const restaurants = await new Promise((resolve) => {
        resolve(collection.find({}).toArray())
    })

    console.log(restaurants);

    res.send({
        restaurants
    })
})

// PARSE THE PORT AND ENVIRONMENT PARSED FROM THE .ENV FILE
const { parsed: { PORT, ENVIRONMENT } } = env;

http.listen(PORT, () => {
    console.log('\x1b[36m%s\x1b[0m', `${ENVIRONMENT} Server listening on ${PORT}`);
})

http.on("listening", async () => {
    main()
        .then(console.log("DB Connection Establishment Success"))
        .catch(error => {
            console.log("Some error Occurred while Connecting to DB ", error)
        })
})
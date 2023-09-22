const client = require('./conexion.js');
const express = require('express');
const app = express();
const port = 3004;
const cors = require('cors');

app.use(cors());

app.listen(port, () => {
    console.log(`Aplicacion de ejemplo en el puerto:  ${port}`);
});

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get('/hoteles', (req, res) => {

    client.connect((err) => {
        client.query('SELECT * FROM hoteles', (err, dbres) => {
            console.log(err ? err.stack : res.rows)
            res.send(dbres);
            });
    })

});

app.get('/products/:id', (req, res) => {
    client.connect((err) => {
        client.query(`SELECT * FROM products WHERE product_id=${req.params.id}`, (err, res) => {
            console.log(err ? err.stack : res.rows) // Hello World!
            // client.end();
        })
    })
});

client.connect();

module.exports = app;
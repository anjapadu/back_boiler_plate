const express = require("express");
let app = express.Router();

app.get('/hi', function (req, res) {
    try {
        let errors = [];
        // if (!req.body.text || req.body.text.trim().length === 0) {
        //     errors.push('You must enter the text');
        // }
        // if (!req.body.country || req.body.country.length !== 2) {
        //     errors.push('You must enter the country 2 letters code');
        // }
        res.status(200).send({ msg: 'Hello world' })

    } catch (e) {
        console.log('Error', e)
        res.status(400).send({ error: JSON.stringify(e) })
    }
})


export default app;
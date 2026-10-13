const express = require("express")
const router = express.Router()

app.post('/signup', (req, res) => {
    // let { username, email, password } = req.body
    console.log(req.body)

    res.send("Ici l'API, le signup est réussit")
})

module.exports = routers
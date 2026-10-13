const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')

// Définitions des routers

const userRouter = require("./routes/user")

app.use(express.json())

let corsOptions = {
    origin: "*",
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
}

app.use(cors(corsOptions))

// ROUTES

// Route de type GET qui me renvoie "Hello World" quand je fais une requête vers localhost:3000
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Mise en place du router -> les routes sont regroupés par catégories, ici toutes celles liées aux user
// seront disponibles après /user au niveau du endpoint
app.use("/user", userRouter)

// On spécifie que notre app écoute les requêtes arrivant sur le port 3000
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
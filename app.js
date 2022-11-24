const express = require("express");
const app = express();

const path = require("path");

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "home.html"))
})
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "login.html"))
})
app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "register.html"))
})
app.get("/detalle", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "detalle.html"))
})
app.get("/carrito", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "carrito.html"))
})
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "404.html"))
})

app.listen(3030, () => console.log("Servidor levantado en el puerto 3030"));

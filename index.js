const express = require("express");
const fs = require("fs");

const app = express();


app.listen(3000, () => {
    console.log("server started...");
});

app.use(express.static("./public"));

app.get('/api/user', (req, res) => {
    res.send({
        nom: "Darkann",
        verif: true,
        date: 13/01/1978,
        amis: [ "Anaïs", " Vince ", " Yoda" ],
    });
});



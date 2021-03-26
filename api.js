const express = require("express");
const app = express();

//2 ligness de code pour remplir la donnée req.body par exemple pour la requette post sinon elle est vide
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/", (req, res) => {
  res.send("Bonjour !");
});

//requette GET sur /hello
app.get("/hello", (req, res) => {
  var bodyRes;
  if (req.query.nom) {
    //req.query récupère les paramètres d'entrée de l'url
    bodyRes = "Bonjour, " + req.query.nom + " !";
  } else {
    bodyRes = "Quel est votre nom ?";
  }
  res.send(bodyRes);
});
//requette POST sur /chat
app.post("/chat", (req, res) => {
  var bodyRes = "Nous sommes à Paris";
  if (req.body.msg === "ville") {
    //req.body provient d'une requette body lors de l'appel http post. Elle est vide si on n'a pas parser le json au début
    bodyRes = "Nous sommes à Paris";
  } else if (req.body.msg === "météo") {
    bodyRes = "Il fait beau";
  } else {
    bodyRes = "Message non reçu";
  }
  res.send(bodyRes);
});

let port = process.env.PORT; //port pour lequel écoute le serveur heroku, si elle est nulle c'est qu'on est en serveur local
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

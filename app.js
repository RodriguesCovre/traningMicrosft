const express = require("express");
function isAuthorized(req, res, next){
  const authHeader = req.headers.authorization;

  if(!authHeader || authHeader !== 'senhaSiuperSecreta'){
    return res.status(401).send('Acesso negado');
  }
  next();
}
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/users", isAuthorized, (req, res) => {
  res.json([
    {
      id: 1,
      name: "User Userson",
    },
  ]);
});

app.get("/products", (req, res) => {
  res.json([
    {
      id: 1,
      name: "The Bluest Eye",
    },
  ]);
});

app.listen(port, () => console.log(`Servidor aberto na porta http://localhost:${port}`));

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/' , (req,res) => {
  res.send('Hello world !');
});

app.get('/movies' , (req,res) => {
  res.send('Liste des films');
});

app.get('/movies/add' , (req,res) => {
  res.send('prochainement un formulaire d\'ajout ici');
});

app.get('/movies/:id' , (req,res) => {
  const id = req.params.id;
  res.send(`Détail du film ${id}`);
});

app.listen(PORT , () => {
  console.log(`listening on port PORT`);
});
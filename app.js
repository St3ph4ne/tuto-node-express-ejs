const express = require('express');
const app = express();
const PORT = 3000;

// ajout du middleware express.static pour indiquer l'emplacement des fichiers à servir statiquement (ici style.css)
app.use('/public' , express.static('public'))

// indique le view engine et son chemin
app.set('views' , './views');
app.set('view engine' , 'ejs');

app.get('/' , (req,res) => {
  // res.send('Hello world !');
  res.render('index.ejs');
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
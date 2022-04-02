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
  const title = 'Meilleurs films des 30 dernières années'
  const bestMovies = [
    { title: 'Matrix' , year: 1999},
    { title: 'Rambo' , year: 1985},
    { title: 'Rocky' , year: 1988},
    { title: 'Dikkenek' , year: 2009}
  ]
  res.render('movies' , { bestMovies: bestMovies , title: title});
});

// app.get('/movie-details' , (req,res) => {
//   res.render('movie-details');
// });

app.get('/movies/add' , (req,res) => {
  res.send('prochainement un formulaire d\'ajout ici');
});

app.get('/movies/:id' , (req,res) => {
  const id = req.params.id;
  
  // res.send(`Détail du film ${id}`);
  res.render('movie-details' , {movieid: id});
});

app.listen(PORT , () => {
  console.log(`listening on port PORT`);
});
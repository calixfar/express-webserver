const express = require('express')
const app = express()
const hbs = require('hbs');
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getAnio', () =>{ 
    return new Date().getFullYear();
});
app.set('view engine', 'hbs');
app.get('/',  (req, res) => {
    
  res.render('home', {
      name : 'Luis',
  });
})
app.get('/about',  (req, res) => {
    
    res.render('about', {
    });
  })
 
app.listen(port, () => console.log(`Escuchando por el puerto ${port}`));
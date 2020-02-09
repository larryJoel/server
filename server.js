const express = require('express');
const app = express();
const hbs = require('hbs');
require ('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));




// express hbs
hbs.registerPartials(__dirname + '/views/parcials');
app.set('view engine', 'hbs');

app.get('/', (req, res) =>{

  res.render('home',{
    nombre:'larry González'});
});
  app.get('/about', (req, res) =>{

    res.render('about',{
      heroe:'Batman'});
  
    // let salida ={
    //     nombre:'larry',
    //     edad: 47,
    //     url:req.url
    //}
  // res.send(salida);
});
// app.get('/data', (req, res) =>{
//     res.send('Hello World')
  // });
 
app.listen(port,()=>{
    console.log(`El puerto ${ port } se esta escucando`)
});
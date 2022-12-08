require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

//Render HBS
app.set('view engine', 'hbs');

//ADD PARTIALS
hbs.registerPartials(__dirname + '/views/partials');
//Static Content
app.use( express.static('public'));

app.get('/', (req, res) => { 

    res.render('home', {
        nombre: 'Franco Dominguez',
        titulo: 'Node - Express'
    });
})

app.get('/generic', (req, res)=>{
    res.render('generic',{
        nombre:'Franco Dominguez',
        titulo: 'Node - Express'
    });
});

app.get('/elements', (req, res) =>{
    res.render('elements', {
        nombre: 'Franco Dominguez',
        titulo: 'Node - Express'
    });
});


app.get('*', (req, res)=>{
    res.send('404 | Page Not Found')
})

//APP.LISTES IS A ARROW FUNCTION AND HIS FUNCTION IS SHOW THE PORT WE ARE USING
app.listen( port, () => {
    console.log(`Example app listening on port ${port}`)});
const request = require('request')
const express = require('express')
const path = require('path')
const  hbs  = require('express-handlebars');
const weather = require('./utils/weather/weather')

const app = express()

app.engine('hbs', hbs({extname: '.hbs'}))

const staticDirPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.set('views' , path.join(__dirname, '../templates/views'))
app.use(express.static(staticDirPath))


app.get('', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})


app.get('/weather', (req, res) => {
    if (!req.query.location) return res.send({error: 'Please provide a location'})
    weather(req.query.location, (error, data) => {
        if (error) return res.send({error})
        res.send({data})
    })
})

app.listen(3000)

const express = require('express')

//add the view engine
const expressHandlebars = require('express-handlebars')

const app =  express()

//consigure our express app to use handlebars
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}))

app.set('view engine', 'handlebars')

const port = process.env.port || 3000
// Routes go before 404 and 500
app.get('/',(req,res) => {
    res.render('home')
})

app.get('/about',(req,res) => {
    res.render('about')
})

app.get('/nightlife',(req,res) => {
    res.type('text/plain')
    res.send('Kolkata at night')
})


// Error handling -> app.use() basic express route
app.use((req, res) => {
    res.status(404)
    res.render('404')})

// Server Error 500
app.use((error,req,res,next) => {
    console.log(error.message)
    res.status(500)
    res.render('404')})

// Setup Listener
app.listen(port, () => {
    console.log(`Server started http://localhost:` + port)
    console.log('To close press Ctrl-C')
})
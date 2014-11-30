'use strict';
var express             = require('express')
var React               = require('react')
var exphbs              = require('express-handlebars')
var nodeJSX             = require('node-jsx').install()
var TypeAheadContainer  = React.createFactory(require('./components/typeAheadContainer'))
var app = express()

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/node_modules/react/dist'))
app.use(express.static(__dirname + '/node_modules/jquery/dist'))

var apiUrl = "https://public-api.wordpress.com/rest/v1/sites/en.blog.wordpress.com/posts/?number=10"
var markup = React.renderToString(TypeAheadContainer({ url: apiUrl }))

app.get('/', function(req, res){
  res.render('home', {
    markup: markup
  })
})

app.listen(3000)

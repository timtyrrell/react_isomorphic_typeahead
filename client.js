React = require('react')
TypeAheadContainer  = require('./components/typeAheadContainer')

var apiUrl = "https://public-api.wordpress.com/rest/v1/sites/en.blog.wordpress.com/posts/?number=10"
var typeAheadContainer = React.createFactory(TypeAheadContainer)
React.render(typeAheadContainer({url: apiUrl}), document.getElementById('container'))

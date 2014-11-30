React = require('react')
TypeAheadForm  = require('./typeAheadForm')
TypeAheadList  = require('./typeAheadList')

var TypeAheadContainer = React.createClass({
  getInitialState: function() {
    return {
      posts: []
    }
  },

  triggerSearch: function(searchTerm) {
    if (searchTerm.length > 1) {
      var apiUrl = this.props.url + '&search=' + searchTerm
      $.ajax({
        url: apiUrl,
        dataType: 'jsonp',
        type: 'GET',
        success: function(data) {
          this.setState({posts: data.posts})
        }.bind(this),
        error: function(xhr, status, err) {
          console.error("BAD")
        }.bind(this)
      });
    } else {
      this.setState({posts: [] })
    }
  },

  render: function() {
    return (
      <div className="TypeAhead">
        <TypeAheadForm onUserInput={this.triggerSearch}/>
        <TypeAheadList posts={this.state.posts} />
      </div>
    )
  }
})

module.exports = TypeAheadContainer

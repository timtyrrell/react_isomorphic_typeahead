React = require('react')

var TypeAheadList = React.createClass({
  render: function() {
    var postListItems = []
    if(this.props.posts){
      this.props.posts.forEach(function(post){
        postListItems.push(<li key={post.ID}>{post.title}</li>)
      })
    }

    return (
      <ol>
        {postListItems}
      </ol>
    )
  }
})

module.exports = TypeAheadList

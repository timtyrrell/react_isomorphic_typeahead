React = require('react')

var TypeAheadForm = React.createClass({
  handleChange: function() {
    this.props.onUserInput(
      this.refs.searchTermInput.getDOMNode().value
    )
  },

  componentDidMount: function() {
    $('input').focus()
  },

  render: function() {
    return (
      <form>
        <input
            type="text"
            placeholder="Search..."
            ref="searchTermInput"
            onChange={this.handleChange}
        />
      </form>
    )
  }
})

module.exports = TypeAheadForm

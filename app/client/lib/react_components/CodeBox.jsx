CodeBox = React.createClass({
  propTypes: {
    snippet: React.PropTypes.object
  },

  handleChange(event) {
    // console.log(event)
    // CodeSnippets.update({this.props.snippet, { $set: { original: this.props.snippet.value } } });
    return true;
  },

  getDefaultProps() {
    return {
      field: "original"
    }
  },

  getInitialState() {
    return {
      result: this.props.snippet[this.props.field]
    }
  },

  render() {
    return (
      <textarea className="codebox" rows="10" cols="20" value={this.state.result} onChange={this.handleChange} />
    )
  }
});

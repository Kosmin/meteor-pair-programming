CodeBox = React.createClass({
  propTypes: {
    snippet: React.PropTypes.object,
    field: React.PropTypes.string
  },

  handleChange(event) {
    updateQuery = {};
    updateQuery[this.props.field] = this.refs.snippet.value;

    CodeSnippets.update({_id: this.props.snippet._id}, {$set: updateQuery} );
    return true;
  },

  getDefaultProps() {
    return {
      field: "original"
    }
  },

  arrowClass() {
    if(this.props.field == "original") {
      return "fa fa-2x fa-arrow-circle-o-right";
    }
    else {
      return "fa fa-2x fa-arrow-circle-o-left"; 
    }
  },

  buttonContainerClass() {
    if(this.props.field == "original") {
      return "original-box-button-container";
    }
    else {
      return ""
    }
  },

  buttonAction() {
    if(this.props.field == "original") {
      
    }
    else {
      
    }
  },

  render() {
    return (
      <div>
        <textarea ref="snippet" 
        defaultValue={this.props.snippet[this.props.field]}
        className="codebox" rows="10" cols="20"
        onChange={this.handleChange} />
        <div className={this.buttonContainerClass}>
          <a onClick={this.buttonAction} className="button">
            <i className={this.arrowClass}></i>
          </a>
        </div>
      </div>
    )
  }
});

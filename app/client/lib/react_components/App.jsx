App = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      code_snippet: CodeSnippets.findOne({token: "f63k91"})
    }
  },

  renderCodeBoxes() {
    return (
      <div className="codeboxes-container">
        <CodeBox ref="codeBox1" snippet={this.data.code_snippet} field="original" />
        <CodeBox ref="codeBox2" snippet={this.data.code_snippet} field="suggestion" />
      </div>
    )
  },

  render() {
    return (
      <div className="container" ref="container">
        <header>
          <h1 className="heading">Meteor Pair Programming</h1>
        </header>

        {this.renderCodeBoxes()}
      </div>
    )
  }
});
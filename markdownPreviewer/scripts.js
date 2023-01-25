class MarkdownPreviewerProject extends React.Component {
    render () {
      return (
        <div className="container">
          <div className="row">
            <h1 className="text-center">Markdown Previewer</h1>
            <h5 className="text-center">Converting General Text Into Markdown Language</h5>
            <hr />
          </div>
          <I_O_Field />
        </div>
      )
    }
  }
  
  const text = `This is a paragraph
  
  **This is a bold text**
  
  > This is a block quote!
  
  # heading
  ## sub-heading
  - list item 1
  - list item 2
  - list item 3
  
  [Visit Website](https://saivalpadasu-4bddf.web.app/)
  
  This is an inline \`<p></p>\` element
  
  This is a block of code:
  
  \`\`\`
    let x = 1;
    let y = 2;
    let z = x + y;
  \`\`\`
  
  ![facebook](https://png.pngtree.com/element_our/sm/20180515/sm_5afaf0c4b6017.jpg)
  `
  
  class I_O_Field extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        initialInput: text
      };
      this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
      this.setState({
        initialInput: event.target.value
      });
    }
    
    render() {
      return (
        <div class="row">
          <div class="col-md-6">
            <h3 className="text-center">General Text Input</h3>
            <textarea id="editor" value={this.state.initialInput} type="text" className="form-control" onChange={this.handleChange}></textarea>
          </div>
          <div class="col-md-6">
            <h3 className="text-center">Markup Output</h3>
            <div id="preview" dangerouslySetInnerHTML={{__html: marked.parse(this.state.initialInput)}} />
          </div>
        </div>
      )
    }
  }
  
  ReactDOM.render(<MarkdownPreviewerProject />, document.getElementById('outputContainer'));
  
import React,{Component} from 'react';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {input_url: "", input_title: "", list: [{id:0, url:"https://santabarbaraca.com/content/uploads/2015/08/hiking-in-santa-barbara.jpg", title:"hiking"}]};
  }

  componentDidMount() {
    console.log(this.state.list);
  }
  
  handleInputUrlChange = e => {
    this.setState({input_url: e.target.value});
  }

  handleInputTitleChange = e => {
    this.setState({input_title: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    if(this.state.input_title !== '' || this.state.input_url !== '') {
      var pic = {id: this.state.list.length, url: this.state.input_url, title: this.state.input_title};
      this.setState({list: [...this.state.list, pic]});
    }
  }

  render() {
    return (
      <div className="outer">
        <form className="form" onSubmit={this.handleSubmit}>
          <div>
            <input className='url_input'
            type='text'
            placeholder="Enter URL"
            value={this.state.input_url} 
            onChange={this.handleInputUrlChange}/>
          </div>
          <div>
            <input className="inputtitle"
            type='text'
            placeholder="Title"
            value={this.state.input_title}
            onChange={this.handleInputTitleChange} />
            <button type="submit" className="button">New Post</button>
          </div>
        </form>
        <div>
          {this.state.list.map(picture => {
            return (
              <div className="picture" key={picture.id}>
                <div className="picTitle">{picture.title}</div>
                <img className="image" src={picture.url} alt={picture.url} />
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }))
          .catch(err => err);
  }

  componentWillMount() {
      this.callAPI();
  }

  render() {
    return(
      <div className="App">
        <p>Hello world from client!</p>
        <p className="App-intro">{this.state.apiResponse}</p>
        <Header/>
      </div>
    );
  }
}
export default App;

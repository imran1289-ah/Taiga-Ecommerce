import React, {Component} from 'react';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import SlideShow from './SlideShow';
import "./App.css";
import Types from './Types';
import Footer from './Footer';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './Login';

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
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ 
            /*<p className="App-intro">{this.state.apiResponse}</p>*/
            <><Header/><SlideShow/><Footer/></>
        } />
          <Route path="/login" element={<><Header/><Login/></>} />
        </Routes>
      </BrowserRouter>

    );
  }
}
export default App;

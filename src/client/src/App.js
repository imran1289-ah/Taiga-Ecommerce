import React, {Component} from 'react';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import SlideShow from './SlideShow';
import "./App.css";
import Types from './Types';
import Footer from './Footer';
import FurnitureTypes from './FurnitureTypes';
import BooksTypes from './BooksTypes';
import GroceryTypes from './GroceryTypes';
import ToysTypes from './ToysTypes';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './Login';
import Electronics_Types from './ElectronicsTypes';
import ElectronicsTypes from './ElectronicsTypes';
import ClothesTypes from './ClothesTypes';

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
            <><Header/><SlideShow/><Types/><Footer/></>
        } />
          <Route path="/login" element={<><Header/><Login/></>} />
          <Route path="/ElectronicsTypes" element={<><Header/><ElectronicsTypes/><Footer/></>}></Route>
          <Route path="/ClothesTypes" element={<><Header/><ClothesTypes/><Footer/></>}></Route>
          <Route path="/FurnitureTypes" element={<><Header/><FurnitureTypes/><Footer/></>}></Route>
          <Route path="/BooksTypes" element={<><Header/><BooksTypes/><Footer/></>}></Route>
          <Route path="/GroceryTypes" element={<><Header/><GroceryTypes/><Footer/></>}></Route>
          <Route path="/ToysTypes" element={<><Header/><ToysTypes/><Footer/></>}></Route>
        </Routes>
      </BrowserRouter>

    );
  }
}
export default App;

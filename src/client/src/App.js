import React, { Component } from 'react';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import SlideShow from './SlideShow';
import './App.css';
import Types from './Types';
import Footer from './Footer';
import Electronicslist from './Electronicslist';
import Clotheslist from './Clotheslist';
import Furniturelist from './Furniturelist';
import Bookslist from './Bookslist';
import Grocerylist from './Grocerylist';
import Toyslist from './Toyslist';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: '' };
  }

  callAPI() {
    fetch('http://localhost:9000/testAPI')
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }))
      .catch((err) => err);
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              /*<p className="App-intro">{this.state.apiResponse}</p>*/
              <>
                <Header />
                <SlideShow />
                <Types />
                <Footer />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Header />
                <Login />
              </>
            }
          />
          <Route
            path="/Electronicslist"
            element={
              <>
                <Header />

                <Electronicslist />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/Clotheslist"
            element={
              <>
                <Header />

                <Clotheslist />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/Furniturelist"
            element={
              <>
                <Header />

                <Furniturelist />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/Bookslist"
            element={
              <>
                <Header />
                <Bookslist />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/Grocerylist"
            element={
              <>
                <Header />
                <Grocerylist />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/Toyslist"
            element={
              <>
                <Header />
                <Toyslist />
                <Footer />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;

import React, { Component } from 'react';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import SlideShow from './SlideShow';
import './App.css';
import Types from './Types';
import Footer from './Footer';
import FurnitureTypes from './FurnitureTypes';
import BooksTypes from './BooksTypes';
import GroceryTypes from './GroceryTypes';
import ToysTypes from './ToysTypes';
import MainGameContent from './MainGameContent';
import MainPhoneContent from './MainPhoneContent';
import MainComputerContent from './MainComputerContent';
import MainMenClothesContent from './MainMenClothesContent';
import MainWomenClothesContent from './MainWomenClothesContent';
import MainKidsClothesContent from './MainKidsClothesContent';
import MainLivingFurnitureContent from './MainLivingFurnitureContent';
import MainBedroomFurnitureContent from './MainBedroomFurnitureContent';
import MainNovelsContent from './MainNovelsContent';
import MainTextbooksContent from './MainTextbooksContent';
import MainComicsContent from './MainComicsContent';
import MainFruitsContent from './MainFruitsContent';
import MainVegetablesContent from './MainVegetablesContent';
import MainSnacksContent from './MainSnacksContent';
import MainBoyToysContent from './MainBoyToysContent';
import MainGirlToysContent from './MainGirlToysContent';
import Electronicslist from './Electronicslist';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
//import Electronics_Types from "./ElectronicsTypes";
import ElectronicsTypes from './ElectronicsTypes';
import ClothesTypes from './ClothesTypes';

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
                
                <Electronicslist/>
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/ClothesTypes"
            element={
              <>
                <Header />
                <ClothesTypes />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/FurnitureTypes"
            element={
              <>
                <Header />
                <FurnitureTypes />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/BooksTypes"
            element={
              <>
                <Header />
                <BooksTypes />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/GroceryTypes"
            element={
              <>
                <Header />
                <GroceryTypes />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/ToysTypes"
            element={
              <>
                <Header />
                <ToysTypes />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/MainGameContent"
            element={
              <>
                <Header />
                <MainGameContent />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/MainPhoneContent"
            element={
              <>
                <Header />
                <MainPhoneContent />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/MainComputerContent"
            element={
              <>
                <Header />
                <MainComputerContent />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/MainMenClothesContent"
            element={
              <>
                <Header />
                <MainMenClothesContent />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/MainWomenClothesContent"
            element={
              <>
                <Header />
                <MainWomenClothesContent />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/MainKidsClothesContent"
            element={
              <>
                <Header />
                <MainKidsClothesContent />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/MainLivingFurnitureContent"
            element={
              <>
                <Header />
                <MainLivingFurnitureContent />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/MainBedroomFurnitureContent"
            element={
              <>
                <Header />
                <MainBedroomFurnitureContent />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/MainNovelsContent"
            element={
              <>
                <Header />
                <MainNovelsContent />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/MainTextbooksContent"
            element={
              <>
                <Header />
                <MainTextbooksContent />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/MainComicsContent"
            element={
              <>
                <Header />
                <MainComicsContent />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/MainFruitsContent"
            element={
              <>
                <Header />
                <MainFruitsContent />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/MainVegetablesContent"
            element={
              <>
                <Header />
                <MainVegetablesContent />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/MainSnacksContent"
            element={
              <>
                <Header />
                <MainSnacksContent />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/MainBoyToysContent"
            element={
              <>
                <Header />
                <MainBoyToysContent />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/MainGirlToysContent"
            element={
              <>
                <Header />
                <MainGirlToysContent />
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

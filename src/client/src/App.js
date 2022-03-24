import React, { Component } from 'react';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import SlideShow from './SlideShow';
import './App.css';
import Types from './Types';
import Footer from './Footer';
import Login from './Login';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Electronicslist from './Electronicslist';
import Clotheslist from './Clotheslist';
import Furniturelist from './Furniturelist';
import Bookslist from './Bookslist';
import Grocerylist from './Grocerylist';
import Toyslist from './Toyslist';
import SellerMenu from './SellerMenu';
import Cart from './Cart';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import AdminMenu from './AdminMenu';
import EditUser from './EditUser';
import ChangePassword from './ChangePassword';
import AddUser from './AddUser'
import FilterProducts from './FilterProducts';


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
                
                <h1 class="HomePageLists" >Electronics</h1>
                <Electronicslist />

                <h1 class="HomePageLists" >Clothes</h1>
                <Clotheslist />

                <h1 class="HomePageLists" >Furniture</h1>
                <Furniturelist />

                <h1 class="HomePageLists" >Books</h1>
                <Bookslist />

                <h1 class="HomePageLists" >Groceries</h1>
                <Grocerylist />

                <h1 class="HomePageLists" >Toys</h1>
                <Toyslist />
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
                <Footer />
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
          

          <Route path="/SellerMenu" element={<><Header/><SellerMenu/></>}></Route>
          <Route path="/Cart" element={<><Header/><Cart/></>}></Route>
          <Route path="/AddProduct" element={<><Header/><AddProduct/></>}></Route>
          <Route path="/EditProduct/" element={<><Header/><EditProduct/></>}></Route>

          <Route 
            path="/AdminMenu"
            element={
              <>
                <Header></Header>
                <AdminMenu></AdminMenu>
              </>
            }
           ></Route> 

          <Route 
            path="/EditUser/" 
            element={
              <>
                <Header/>
                <EditUser/>
              </>
            }>
          </Route>

          <Route 
            path="/ChangePassword"
            element={
              <>
                <Header/>
                <ChangePassword/>
              </>
            }>
          </Route>

          <Route 
            path="/AddUser"
            element={
              <>
                <Header/>
                <AddUser/>
              </>
            }>
          </Route>

          <Route
            path="/FilterProducts"
            element={
              <>
                <Header/>
                <FilterProducts/>
              </>
            }>
          </Route>

        </Routes>

        

      </BrowserRouter>
    );
  }
}
export default App;

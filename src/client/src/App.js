import React, { Component } from 'react';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import SlideShow from './SlideShow';
import './App.css';
import Types from './Types';
import Footer from './Footer';
import Login from './Common/Login';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Electronicslist from './ProductLists/Electronicslist';
import Clotheslist from './ProductLists/Clotheslist';
import Furniturelist from './ProductLists/Furniturelist';
import Bookslist from './ProductLists/Bookslist';
import Grocerylist from './ProductLists/Grocerylist';
import Toyslist from './ProductLists/Toyslist';
import SellerMenu from './SellerMenu';
import Cart from './Cart';
import History from './History';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import AdminMenu from './AdminMenu';
import ManageUserProfile from './Common/ManageUserProfile';
import EditUser from './EditUser';
import ChangePassword from './ChangePassword';
import ChangeMyPassword from './ChangeMyPassword';
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
                <Types id="Top" />
                
                <h1 id="Electronics" class="HomePageLists" >Electronics </h1>
                <a href='#top'><h1 class="Top">🔝   </h1></a>
                <Electronicslist />

                <h1 id="Clothes" class="HomePageLists" >Clothes</h1>
                <a href='#top'><h1 class="Top">🔝   </h1></a>
                <Clotheslist />

                <h1 id="Furniture" class="HomePageLists" >Furniture</h1>
                <a href='#top'><h1 class="Top">🔝   </h1></a>
                <Furniturelist />

                <h1 id="Books" class="HomePageLists" >Books</h1>
                <a href='#top'><h1 class="Top">🔝   </h1></a>
                <Bookslist />

                <h1 id="Groceries" class="HomePageLists" >Groceries</h1>
                <a href='#top'><h1 class="Top">🔝   </h1></a>
                <Grocerylist />

                <h1 id="Toys" class="HomePageLists" >Toys</h1>
                <a href='#top'><h1 class="Top">🔝   </h1></a>
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
          <Route path="/History" element={<><Header/><History/></>}></Route>
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
            path="/ManageUserProfile"
            element={
              <>
                <Header></Header>
                <ManageUserProfile></ManageUserProfile>
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
            path="/ChangeMyPassword"
            element={
              <>
                <Header/>
                <ChangeMyPassword/>
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

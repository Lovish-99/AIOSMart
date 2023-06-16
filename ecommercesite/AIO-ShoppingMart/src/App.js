import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Shop3 from "./containers/Shop3";
import Contact from "./containers/Contact";
import Appliances from './containers/Appliances';
import Register from './containers/Register';
import Login from './containers/Login';
import Logout from './containers/Logout';

import ProductScreen from './containers/ProducScreen';
import ProfilScreen from './containers/ProfilScreen';
import ShippinScreen from './containers/ShippinScreen';
import PaymenScreen from './containers/PaymenScreen';
import PlaceOrdeScreen from './containers/PlaceOrdeScreen';
import OrdeScreen from './containers/OrdeScreen';
import MobileScreen from './containers/MobilScreen';
import ClotScreen from './containers/ClotScreen';
import LaptoScreen from './containers/LaptoScreen';
import GrocerScreen from './containers/GrocerScreen';
import FurniturScreen from './containers/FurniturScreen';
import AppliancScreen from './containers/AppliancScreen';

import UserLisScreen from './containers/UserLisScreen';
import UserEdiScreen from './containers/UserEdiScreen';
import ProductLisScreen from './containers/ProductLisScreen';
import MobileLisScreen from './containers/MobileLisScreen';
import ApplianceLisScreen from './containers/ApplianceLisScreen';
import ClothLisScreen from './containers/ClothLisScreen';
import FurnitureLisScreen from './containers/FurnitureLisScreen';
import GroceryLisScreen from './containers/GroceryLisScreen';
import LaptopLisScreen from './containers/LaptopLisScreen';
import OrderLisScreen from './containers/OrderLisScreen';

import ProductEdiScreen from './containers/ProductEdiScreen';
import MobileEdiScreen from './containers/MobileEdiScreen';
import ClothEdiScreen from './containers/ClothEdiScreen';
import FurnitureEdiScreen from './containers/FurnitureEdiScreen';
import GroceryEdiScreen from './containers/GroceryEdiScreen';
import LaptopEdiScreen from './containers/LaptopEdiScreen';
import ApplianceEdiScreen from './containers/ApplianceEdiScreen';

import YourCart from './containers/YourCart';
import YourWishlist from './containers/YourWishlist';
import Mobile1 from "./containers/Mobile1";
import Clothes1 from "./containers/Clothes1";
import Laptop1 from "./containers/Laptop1";
import Grocery1 from "./containers/Grocery1";
import Furniture1 from './containers/Furniture1';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/shop3">
        <Shop3 />
      </Route>

      <Route path="/login">
        <Login/>
      </Route>

      <Route path="/logout">
        <Logout/>
      </Route>

      <Route path="/register">
        <Register/>
      </Route>

      <Route path="/profile">
        <ProfilScreen/>
      </Route>

      <Route path="/shipping">
        <ShippinScreen/>
      </Route>

      <Route path="/payment">
        <PaymenScreen/>
      </Route>

      <Route path="/placeorder">
        <PlaceOrdeScreen/>
      </Route>

      <Route path="/admin/userlist">
        <UserLisScreen/>
      </Route>

      <Route path="/admin/user/:userId/edit">
        <UserEdiScreen/>
      </Route>

      <Route path="/admin/productlist">
        <ProductLisScreen/>
      </Route>

      <Route path="/admin/mobilelist">
        <MobileLisScreen/>
      </Route>
      <Route path="/admin/appliancelist">
        <ApplianceLisScreen/>
      </Route>
      <Route path="/admin/clothlist">
        <ClothLisScreen/>
      </Route>
      <Route path="/admin/furniturelist">
        <FurnitureLisScreen/>
      </Route>
      <Route path="/admin/grocerylist">
        <GroceryLisScreen/>
      </Route>
      <Route path="/admin/laptoplist">
        <LaptopLisScreen/>
      </Route>

      <Route path="/admin/product/:productId/edit">
        <ProductEdiScreen/>
      </Route>

      <Route path="/admin/mobile/:productId/edit">
        <MobileEdiScreen/>
      </Route>

      <Route path="/admin/furniture/:productId/edit">
        <FurnitureEdiScreen/>
      </Route>

      <Route path="/admin/cloth/:productId/edit">
        <ClothEdiScreen/>
      </Route>

      <Route path="/admin/grocery/:productId/edit">
        <GroceryEdiScreen/>
      </Route>

      <Route path="/admin/laptop/:productId/edit">
        <LaptopEdiScreen/>
      </Route>

      <Route path="/admin/appliance/:productId/edit">
        <ApplianceEdiScreen/>
      </Route>

      <Route path="/admin/orderlist">
        <OrderLisScreen/>
      </Route>

      <Route path="/order/:orderId">
        <OrdeScreen/>
      </Route>
      
      <Route path="/product/:id" component={ProductScreen} />
      
      <Route path="/mobile/:id" component={MobileScreen} />\
      
      <Route path="/cloth/:id" component={ClotScreen} />
      
      <Route path="/laptop/:id" component={LaptoScreen} />
      
      <Route path="/grocery/:id" component={GrocerScreen} />
      
      <Route path="/furniture/:id" component={FurniturScreen} />

      <Route path="/appliance/:id" component={AppliancScreen} />

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/mobile1">
        <Mobile1 />
      </Route>

      <Route path="/laptop1">
        <Laptop1 />
      </Route>
      
      <Route path="/grocery1">
        <Grocery1 />
      </Route>
      
      <Route path="/clothes1">
        <Clothes1 />
      </Route>

      <Route path="/furniture1">
        <Furniture1 />
      </Route>

      <Route path="/appliances">
        <Appliances />
      </Route>

      <Route path="/cart/:productName?/:id?" component={YourCart} />
      
      <Route path="/wishlist/:productName?/:id?">
        <YourWishlist/>
      </Route>

    </Switch>
  );
}

export default App;

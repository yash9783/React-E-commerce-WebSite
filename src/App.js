
import './App.css';
import {Navbar} from './components/Navbar'
import { Home } from './components/Home';

import {Switch,Route} from 'react-router-dom';
import Products from './components/Products';
import LoadingBar from 'react-top-loading-bar';

import Product from './components/Product';
import Login from './Login';
import Cart from './components/Cart'
import { Reducer } from 'react';


function App() {
  return (
    <>
   
     <Navbar/>
     <LoadingBar
     color='#f11946'
     progress={100}
    />
     <Switch>
       <Route exact path='/' component={Home}/>
       <Route exact path='/products' component={Products}/>
       <Route exact path='/products/:id' component={Product}/>
       <Route exact path='/login' component={Login}/>
       <Route exact path='/cart' component={Cart}/>


     </Switch>
     
     

     </>
  );
}

export default App;

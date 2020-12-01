import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import MainPage from "./Components/MainPage/MainPage";
import CartPage from "./Components/CartPage/CartPage";

function App() {
     return (
         <div className="App">
                 <Switch>
                     <Route path={'/cart'} component={CartPage} />
                     <Route path={'/'} component={MainPage} />
                 </Switch>

             <footer />
         </div>
  );
}

export default App;

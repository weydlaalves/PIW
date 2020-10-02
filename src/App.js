import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CriarPostes from './paginas/CriarPostes';
import GaleriaPostes from './paginas/GaleriaPostes';

function App() {
  return (
  <div className= "app">
    <BrowserRouter>
      <Switch>
        <Route exact path ="/" component = {GaleriaPostes}></Route>
        <Route exact path = "/postar/" component = {CriarPostes}>
        </Route>
        <Route path ="*">
            <h1>Erro 404</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
  );
}
export default App;

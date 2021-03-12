import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Characters from './pages/characters';
import Episodes from './pages/episodes';
import Locations from './pages/locations';
import myWatchList from './pages/myWatchList';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Switch>
          <Route path={'/'} exact component={Characters}/>
          <Route path={'/episodes'}  component={Episodes}/>
          <Route path={'/locations'} component={Locations}/>
          <Route path={'/myWatchList'} component={myWatchList}/>
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;

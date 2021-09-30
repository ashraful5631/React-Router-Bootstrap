import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import About from './component/About/About';
import Notfound from './component/NotFound/Notfound';
import Resturent from './component/resturent/Resturent';
import Home from './component/HomeCompo/Home';
import Mel from './component/Mel/Mel';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className='App'>

      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/resturent'>
            <Resturent></Resturent>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/resturent/:melID'>
            <Mel></Mel>
          </Route>
          <Route path='*'>
            <Notfound></Notfound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';

import Search from './components/search/Search';
import Profile from './components/profile/Profile';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import DataProvider from './components/DataProvider';

function App() {

  return (
    <Router>
      <DataProvider>
        <Switch>
          <div>
            <Route component={Search} exact path="/"></Route>
            <Route path="/player/:att/:value" component={Profile}></Route>
          </div>
        </Switch>
      </DataProvider>
    </Router>
  );
}

export default App;

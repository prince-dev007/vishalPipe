import {Switch,Route} from 'react-router-dom';
import Login from './Components/Login/Login'
import Dashboard from './Components/Dashboard/Dashboard';
import NewOrder from './Components/NewOrder/NewOrder';
function App() {
  return (
    <>
  <Switch>
  <Route exact path="/" component={Login} />
  <Route exact path="/Dashboard" component={Dashboard} />
  <Route exact path="/NewOrder" component={NewOrder} />
    </Switch>
    </>
  );
}

export default App;

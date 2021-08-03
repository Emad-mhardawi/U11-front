import './App.css';
import { Switch, Route } from "react-router-dom";
import Layout from "./Containers/Layout";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/signup';
const App =()=> {
  return (
    <div className="App">
     <Switch>
      <Layout>
       <Route exact path='/' component={Home}/>
       <Route exact path='/login' component={Login}/>
       <Route exact path='/signup' component={Signup}/>
        
      </Layout>
    </Switch>
    </div>
  );
}

export default App;

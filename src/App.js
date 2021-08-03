import './App.css';
import { Switch, Route } from "react-router-dom";
import Layout from "./Containers/Layout";
import Home from './Pages/Home';
const App =()=> {
  return (
    <div className="App">
     <Switch>
      <Layout>
       <Route exact path='/' component={Home}/>
        
      </Layout>
    </Switch>
    </div>
  );
}

export default App;

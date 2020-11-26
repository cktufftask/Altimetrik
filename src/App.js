import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Registation from './registation';
import Dashboard from './dashboard';
import Login from './login';
import { Switch, Route, Link } from "react-router-dom";

 const  App = (props) => {
 
  return (
    <MuiThemeProvider>
        <Switch>
                <Route path="/" component={Login} exact />
                <Route exact path="/registation" component={Registation} />
                <Route exact path="/dashbord" component={Dashboard} />
            </Switch>

    </MuiThemeProvider>
  );
}


export default App;

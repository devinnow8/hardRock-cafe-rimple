import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../Components/Home/Home";

const App = () => {
  const isAuthenticated = true;

  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={SignIn} />
        <Route exact path="/signup" component={} /> */}
        <PrivateRoute
          path="/home"
          component={Home}
          isAuthenticated={isAuthenticated}
        />
      </Switch>
    </Router>
  );
};

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/signin" />
    }
  />
);

export default App;

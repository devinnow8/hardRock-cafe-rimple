import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import SignIn from "../Components/AUth/SignIn";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        {/* <Route exact path="/signup" component={SignUp} /> */}
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;

import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Discover from "./Components/Discover";
import Create from "./Components/Create";
import ChatDetails from "./Components/ChatDetails";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Sidebar />

      <Switch>
        <Route exact path="/" component={Discover} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/chatdetails" component={ChatDetails} />
      </Switch>
    </div>
  );
};

export default App;

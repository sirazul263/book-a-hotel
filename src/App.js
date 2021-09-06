import "./App.css";
import "./styles/style.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/pages/Login";
import NavigationBar from "./components/Shared/Navbar/NavigationBar";
import Footer from "./components/Shared/Footer/Footer";
import FooterBar from "./components/Shared/Footer/FooterBar";
import { createContext } from "react";
const searchBar = createContext();
function App() {
  return (
    <Router>
      <NavigationBar> </NavigationBar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
      </Switch>
      <Footer> </Footer>
      <FooterBar></FooterBar>
    </Router>
  );
}

export default App;

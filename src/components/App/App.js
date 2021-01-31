import { Navigation } from "../Navigation";
import { Login } from "../Header1/Login";
import { Slider } from "../Header1/Slider";
import { Card } from "../Header2";
import { FormSubmit } from "../Header3";

import { Provider } from "react-redux";

import "./App.css";
import store from "../../redux/store";

import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Provider store={store}>
            <div className="mainContainer">
              <div className="navigationContainer">
                <Navigation />
              </div>
              <div className="headerOneContainer">
                <Login />
                <Slider />
              </div>
              <div className="headerTwoContainer">
                <Card />
              </div>
              <div className="headerThreeContainer">
                <FormSubmit />
              </div>
              <div className="footer">
                <h1>Copyright &copy; 2021</h1>
              </div>
            </div>
          </Provider>
        </Switch>
      </Router>
    </>
  );
}

export default App;

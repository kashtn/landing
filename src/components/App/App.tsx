import { FC } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { PropsType } from "../../type";
import { Navigation } from "../Navigation/Navigation";
import { Login } from "../Header1/Login/Login";
import { Slider } from "../Header1/Slider/Slider";
import { Card } from "../Header2/Card";
import { FormSubmit } from "../Header3/FormSubmit";
import "./App.scss";
import store from "../../redux/store";

const App: FC<PropsType> = () => {
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
};

export default App;

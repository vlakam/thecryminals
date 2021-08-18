import { Fragment } from "react";

import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./screens/HomePage";
import Footer from "./components/Footer/Footer";
import Mint from "./screens/Mint";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact>
          <Header />
          <HomePage />
          <Footer />
        </Route>
        <Route path="/mint" exact>
          <Header mint={true} />
          <Mint />
          <Footer mint={true} />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;

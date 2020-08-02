import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "../components/Layout";
import BadgeNew from "../pages/BadgeNew";
import Badges from "../pages/Badges";
import notFound from "../pages/notFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/badgess" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route component={notFound}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

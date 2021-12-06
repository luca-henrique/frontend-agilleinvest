import React, { Suspense } from "react";

import { Switch, Route } from "react-router-dom";

import { ConnectedRouter } from "connected-react-router";

import Home from "~/pages/Home";

import SignIn from "~/pages/SignIn";

import SignUp from "~/pages/SignUp";
import SignUpStep01 from "~/pages/SignUp/ContinueSignUp";

import RecoveryAccount from "~/pages/RecoveryAccount";
import Dashboard from "~/pages/Dashboard";

import Admin from "~/pages/Administrador";
import AnaliseDocumentosPage from "~/pages/Administrador/AnaliseDocumentos/";

import Investidor from "~/pages/Vendedor";
import Vendedor from "~/pages/Investidor";

import history from "./history";

function Routes() {
  return (
    <Suspense fallback={<div>Loader</div>}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route component={Home} exact path="/" />

          <Route component={SignIn} exact path="/signin" />

          <Route component={SignUp} exact path="/signup" />

          <Route component={SignUpStep01} exact path="/signup-steps" />

          <Route component={Dashboard} exact path="/dashboard" />

          <Route component={Admin} exact path="/admin/dashboard" />
          <Route
            component={AnaliseDocumentosPage}
            exact
            path="/admin/analise-documentos"
          />

          <Route component={Investidor} exact path="/vendedor/dashboard/" />
          <Route component={Vendedor} exact path="/investidor/dashboard/" />

          <Route component={RecoveryAccount} exact path="/recovery" />
        </Switch>
      </ConnectedRouter>
    </Suspense>
  );
}

export default Routes;

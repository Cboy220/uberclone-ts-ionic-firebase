import { Redirect, Route, Switch } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

//Tabs
import RootTab from "./pages/RootTab/RootTab";
//
import HomeTab from "./pages/HomeTab/HomeTab";
import SearchTab from "./pages/SearchTab/SearchTab";
import ConfirmTab from "./pages/ConfirmTab/ConfirmTab";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.scss";

/**Mapbox-gl */
import "mapbox-gl/dist/mapbox-gl.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Switch >
        <Route exact={true} path="/home" component={HomeTab} />

        <Route exact={true} path="/search" component={SearchTab} />

        <Route exact={true} path="/confirm" component={ConfirmTab} />

        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/tabs" component={RootTab} />
        <Route
          exact={true}
          path="/"
          render={() => <Redirect to="/tabs/home" />}
        />
      </Switch>
    </IonReactRouter>
  </IonApp>
);

export default App;

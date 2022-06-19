import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { home, search, square } from "ionicons/icons";
import Home from "./pages/HomeTab/Home";
import Search from "./pages/HomeTab/Home";
import Tab3 from "./pages/Tab3/Tab3";

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
import RootTab from "./pages/RootTab/RootTab";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact={true} path="/home" component={Home} />

        <Route exact={true} path="/search" component={Search} />

        <Route exact={true} path="/tab3" component={Tab3} />

        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/tabs" component={RootTab} />
        <Route
          exact={true}
          path="/"
          render={() => <Redirect to="/tabs/home" />}
        />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

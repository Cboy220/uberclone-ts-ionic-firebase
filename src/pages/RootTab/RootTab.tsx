import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { search, map, checkmarkDone } from "ionicons/icons";
import HomeTab from "../HomeTab/HomeTab";
import SearchTab from "../SearchTab/SearchTab";
import ConfirmTab from "../ConfirmTab/ConfirmTab";

// import Tab1Detail from './Tab1Detail';

const RootTab: React.FC = () => (
  <IonTabs>
    <IonRouterOutlet>
      <Route path="/tabs/home" component={HomeTab} exact={true} />
      <Route path="/tabs/search" component={SearchTab} exact={true} />
      <Route path="/tabs/confirm" component={ConfirmTab} exact={true} />
      <Route
        path="/tabs"
        render={() => <Redirect to="/tabs/home" />}
        exact={true}
      />
      <Route
        path="/"
        render={() => <Redirect to="/tabs/home" />}
        exact={true}
      />
    </IonRouterOutlet>
    <IonTabBar slot="bottom">
      <IonTabButton tab="home" href="/tabs/home">
        <IonIcon icon={map} />
        <IonLabel>Home</IonLabel>
      </IonTabButton>
      <IonTabButton tab="search" href="/tabs/search">
        <IonIcon icon={search} />
        <IonLabel>Search</IonLabel>
      </IonTabButton>
      <IonTabButton tab="confirm" href="/tabs/confirm">
        <IonIcon icon={checkmarkDone} />
        <IonLabel>Confirm</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);

export default React.memo(RootTab);

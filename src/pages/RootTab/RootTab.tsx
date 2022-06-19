import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { search, map, personCircleOutline } from "ionicons/icons";
import Search from '../Search/Search';
import Home from '../HomeTab/Home';
import Tab3 from '../Tab3/Tab3';

// import Tab1Detail from './Tab1Detail';

const RootTab: React.FC = () => (
      <IonTabs>
        <IonRouterOutlet>
        <Route path="/tabs/home" component={Home} exact={true} />
          <Route path="/tabs/search" component={Search} exact={true} />
          <Route path="/tabs/tab3" component={Tab3} />
          <Route path="/tabs" render={() => <Redirect to="/tabs/home" />} exact={true} />
          <Route path="/" render={() => <Redirect to="/tabs/home" />} exact={true} />
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

          <IonTabButton tab="tab3" href="/tabs/tab3">
            <IonIcon icon={map} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>

      

   
        </IonTabBar>
      </IonTabs>
);

export default React.memo(RootTab);
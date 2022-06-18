import { IonContent, IonHeader, IonImg, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Search.scss';
import Map from '../../components/Map/Map';

const Search: React.FC = () => {
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      
        <Map name="Map"/>
            {/**Header */}
           <IonImg src={"https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655577547/FIXITAPP/ionic-app-images/header/fix__it__header__logo_t8mpen.svg"}/>
      {/**Action Btns */}
      {/**input btn */}
      </IonContent>
    </IonPage>
  );
};

export default Search;

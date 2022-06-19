import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './ConfirmTab.scss';
import Map from '../../components/Map/Map';

const ConfirmTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Confirm</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Confirm</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Map name={'map'}/>
      </IonContent>
    </IonPage>
  );
};

export default ConfirmTab;

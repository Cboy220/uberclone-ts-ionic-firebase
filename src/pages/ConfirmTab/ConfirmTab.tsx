import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./ConfirmTab.scss";
import Map from "../../components/Map/Map";
import { useEffect } from "react";

const ConfirmTab: React.FC = () => {
  const getCoordiantes = () => {
    const location = "Cairo";
    // Fetch Function
    const access_token = "access_token=";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1Ijoib21hcmFzaHplaW5ob205OCIsImEiOiJjbDRrMXY5c3MwN3ZpM2NxcHp3ZGVmN3ZyIn0.3Ziuh7Utama_wz_4s8qh2g",
        })
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  //call function with useEffect

  useEffect(() => {
    getCoordiantes();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Confirm</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/search" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Confirm</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Map name={"map"} />
        <IonGrid>
          {/**Worker Selector */}

          {/**Confirm Button */}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ConfirmTab;

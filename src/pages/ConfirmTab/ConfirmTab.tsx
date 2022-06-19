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
import { useEffect, useState } from "react";

const ConfirmTab: React.FC = () => {
  const [pickupCoordinates, setPickupCoordinates] = useState("");
  const [dropOffCoordinates, setDropOffCoordinates] = useState("");

  //get PickupCoordinates Start
  const getPickUpCoordinates = () => {
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
        console.log("Pick Up Coordinates:" + data.features[0].center);
      });
  };
  //get PickupCoordinates end

  // get DropOffCoordinates Start
  const getDropOffCoordinates = () => {
    const dropOff = "Alexandria";
    // Fetch Function
    const access_token = "access_token=";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropOff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1Ijoib21hcmFzaHplaW5ob205OCIsImEiOiJjbDRrMXY5c3MwN3ZpM2NxcHp3ZGVmN3ZyIn0.3Ziuh7Utama_wz_4s8qh2g",
        })
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Drop Off Coordinates:" + data.features[0].center);
      });
  };

  //call functions with useEffect

  useEffect(() => {
    getPickUpCoordinates();
    getDropOffCoordinates();
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

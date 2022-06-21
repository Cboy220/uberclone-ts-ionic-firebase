import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import React from "react";
import "./WorkerSelector.scss";

const WorkerSelector: React.FC = () => {
  return (
    <IonList>
      <IonItem>
        <IonLabel>Workers available</IonLabel>
        <IonSelect>
          <IonSelectOption value={"Plumber"}>Plumber</IonSelectOption>
          <IonSelectOption value={"Carpenter"}>Carpenter</IonSelectOption>
          <IonSelectOption value={"Electrician"}>Electrician</IonSelectOption>
          <IonSelectOption value={"Cable"}>Cable</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
  );
};

export default WorkerSelector;

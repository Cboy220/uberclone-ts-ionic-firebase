import {
  IonAvatar,
  IonContent,
  IonImg,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonRouterLink,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTitle,
  IonToggle,
} from "@ionic/react";
import React, { useState } from "react";
import "./WorkerSelector.scss";
// Fake api data to test out functionality for now
import workerList from "../../data/workerList";

const WorkerSelector: React.FC = () => {
  const [checked, setChecked] = useState(false);

  return (
    <IonList>
      {workerList.map((worker, index) => (
        <IonItem key={index}>
          <IonAvatar slot="start">
            <IonImg src={worker.imgUrl} />
          </IonAvatar>
          <IonText slot="start">
            <p>{worker.service}</p>
            <small className="worker__time">15 mins away</small>
          </IonText>
          <IonLabel>Checked: {JSON.stringify(checked)}</IonLabel>

          <IonToggle checked={checked} onIonChange={e => setChecked(e.detail.checked)} />

          <IonText slot="end">
            <p> Price $ </p>
          </IonText>
        </IonItem>
      ))}

      <IonItemDivider />
    </IonList>
  );
};

export default WorkerSelector;

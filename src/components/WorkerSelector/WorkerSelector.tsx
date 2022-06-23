import {
  IonAvatar,
  IonImg,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonRouterLink,
  IonSelect,
  IonSelectOption,
  IonText,
} from "@ionic/react";
import React from "react";
import "./WorkerSelector.scss";
// Fake api data to test out functionality for now
import workerList from "../../data/workerList";

const WorkerSelector: React.FC = () => {
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

import {
  IonAvatar,
  IonContent,
  IonImg,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonPage,
  IonRouterLink,
  IonSelect,
  IonSelectOption,
  IonText,
} from "@ionic/react";
import React from "react";
import "./WorkerSelector.scss";

const WorkerSelector: React.FC = () => {
  return (
    <IonList>
      <IonRouterLink>
        <IonItem>
          <IonAvatar slot="start">
            <IonImg src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655851971/FIXITAPP/ionic-app-images/WorkerSelector/electrician-svgrepo-com_w1mh7o.svg" />
          </IonAvatar>
          <IonText slot="start">
            <p>Electrician</p>
            <small className="worker__time">15 mins away</small>
          </IonText>

          <IonText slot="end">
            <p> Price $ </p>
          </IonText>
        </IonItem>
      </IonRouterLink>

      <IonItemDivider />

      <IonItem>
        <IonLabel>Workers available</IonLabel>
        <IonSelect>
          <IonSelectOption value={"Plumber"}>
            <IonText>Plumber</IonText>
            <IonAvatar>
              <IonImg src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655851971/FIXITAPP/ionic-app-images/WorkerSelector/electrician-svgrepo-com_w1mh7o.svg" />
            </IonAvatar>
          </IonSelectOption>
          <IonSelectOption value={"Carpenter"}>Carpenter</IonSelectOption>
          <IonSelectOption value={"Electrician"}>Electrician</IonSelectOption>
          <IonSelectOption value={"Cable"}>Cable</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
  );
};

export default WorkerSelector;

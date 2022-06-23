import {
  IonAvatar,
  IonImg,
  IonItem,
  IonItemDivider,
  IonList,
  IonText,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import "./WorkerSelector.scss";
// Fake api data to test out functionality for now
import workerList from "../../data/workerList";

interface MapsProps {
  dropOffCoordinates: string;
  pickupCoordinates: string;
}

const WorkerSelector: React.FC<MapsProps> = ({
  pickupCoordinates,
  dropOffCoordinates,
}) => {
  // Make Sure Maps props are passed here
  //console.log(pickupCoordinates,dropOffCoordinates)
  const [tripTime, setTripTime] = useState(0);

  useEffect(() => {
    //get trip time from map box api
    //2pickup coordinates and 2 points for the dropoff location [x]
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${
        [pickupCoordinates][0]
      },${[pickupCoordinates][1]};${[dropOffCoordinates][0]},${
        [dropOffCoordinates][1]
      }?access_token=pk.eyJ1Ijoib21hcmFzaHplaW5ob205OCIsImEiOiJjbDRrMXY5c3MwN3ZpM2NxcHp3ZGVmN3ZyIn0.3Ziuh7Utama_wz_4s8qh2g`
    );
  }, [dropOffCoordinates, pickupCoordinates]);

  const htt = `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropOffCoordinates[0]},${dropOffCoordinates[1]}?access_token=pk.eyJ1Ijoib21hcmFzaHplaW5ob205OCIsImEiOiJjbDRrMXY5c3MwN3ZpM2NxcHp3ZGVmN3ZyIn0.3Ziuh7Utama_wz_4s8qh2g`;
  console.log(`${htt}`);

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

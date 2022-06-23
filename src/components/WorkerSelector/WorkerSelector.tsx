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

const WorkerSelector: React.FC<MapsProps> = ({pickupCoordinates,dropOffCoordinates}) => {
  // Make Sure Maps	
  //console.log(pickupCoordinates,dropOffCoordinates)
  const [tripTime, setTripTime] = useState(0);

  useEffect(() => {
    const pickupdrive = `${pickupCoordinates[0]},${pickupCoordinates[1]}`
    const dropoffdrive = `${dropOffCoordinates[0]},${dropOffCoordinates[1]}`
    const acess_token = `?access_token=pk.eyJ1Ijoib21hcmFzaHplaW5ob205OCIsImEiOiJjbDRrMXY5c3MwN3ZpM2NxcHp3ZGVmN3ZyIn0.3Ziuh7Utama_wz_4s8qh2g`
    const htt = `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupdrive};${dropoffdrive}${acess_token}`;
    console.log(`${htt}`)
    
    //get trip time from map box api
    //2pickup coordinates and 2 points for the dropoff location [x]
    fetch(
      `${htt}`,

    );
  }, [pickupCoordinates,dropOffCoordinates]);



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

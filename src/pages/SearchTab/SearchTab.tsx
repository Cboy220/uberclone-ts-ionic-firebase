import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonItemDivider,
  IonPage,

  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  addCircleOutline,
  ellipsisHorizontalCircle,
  ellipsisHorizontalCircleOutline,
  star,
} from "ionicons/icons";
import "./SearchTab.scss";

//React imports
import React from "react";
import { useState } from "react";
//import { useRouter } from "../../utilities/useRouter/useRouter";

//React Router Dom
import { Link } from "react-router-dom";

interface MapsProps {
  name: string;
}

const SearchTab: React.FC<MapsProps> = (/*props*/) => {
  //debug router
  //const router = useRouter();
  //console.log(router);

  //debug props
  //console.log(props);

  const [homeAddrrQuery, setHomeAddrQuery] = useState("");
  const [workerAddrrQuery, setWorkerAddrQuery] = useState("");

  console.log(homeAddrrQuery, workerAddrrQuery);
  console.log(setHomeAddrQuery);
  console.log(setWorkerAddrQuery);

  const location = {
    pathname: `/tabs/confirm?pickup=${homeAddrrQuery}&dropoff=${workerAddrrQuery}`,
    state: {
      query: {
        pickup: homeAddrrQuery,
        dropoff: workerAddrrQuery,
      },
    },
    staticContext: true,
  };

  class LocationLink extends React.Component {
    render() {
      return (
        <Link to={location}>
          <IonButton expand="block" color={"dark"}>
            Confirm worker reservation
          </IonButton>
        </Link>
      );
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/home" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonItemDivider />
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol size="1">
              <IonIcon
                class="circle__ion__icon"
                icon={ellipsisHorizontalCircleOutline}
                size="small"
              />
              <br />
              <IonImg
                class="line__ion__icon"
                src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655633562/FIXITAPP/nextjs-app-images/search/1539792897_qyla5f.svg"
              />
              <br />
              <IonIcon
                icon={ellipsisHorizontalCircle}
                size="small"
                class="circle__ion__icon__success"
              />
            </IonCol>

            <IonCol size="10">
              <IonInput
                placeholder="Your home address"
                class="search__ion__input"
                value={homeAddrrQuery}
                onIonChange={(event: any) =>
                  setHomeAddrQuery(event.detail.value!)
                }
              />

              <IonInput
                placeholder="Workers location"
                class="search__ion__input"
                value={workerAddrrQuery}
                onIonChange={(event: any) =>
                  setWorkerAddrQuery(event.detail.value!)
                }
              />
            </IonCol>
            <IonCol size="1">
              <IonIcon icon={addCircleOutline} class="add__ion__icon" />
            </IonCol>
            <IonCol>
              <IonButton expand="block" color={"light"}>
                <IonIcon icon={star} />
                Saved Places
              </IonButton>
            </IonCol>
          </IonRow>
          {/**Confirm WorkerReservation Link */}
          <LocationLink />
          {/**Confirm WorkerReservation Link */}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SearchTab;

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
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  addCircleOutline,
  atCircle,
  ellipsisHorizontalCircle,
  ellipsisHorizontalCircleOutline,
  linkOutline,
  listOutline,
  tabletLandscape,
} from "ionicons/icons";
import ExploreContainer from "../../components/ExploreContainer/ExploreContainer";
import "./Search.scss";

const Search: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="home" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
        <IonIcon icon={addCircleOutline} size="large" slot="" />
          <IonRow>
            <IonInput placeholder="Where" class="search__ion__input" />
          </IonRow>
          <IonCol>
            <IonList>
              <IonIcon icon={ellipsisHorizontalCircleOutline} size="small" />
              <br />
              <IonImg
                class="search__ion__line__icon"
                src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655633562/FIXITAPP/nextjs-app-images/search/1539792897_qyla5f.svg"
              />
              <br />
              <IonIcon
                color={"success"}
                icon={ellipsisHorizontalCircle}
                size="small"
              />
            </IonList>
          </IonCol>

          <IonRow>
            <IonInput placeholder="Go to" class="search__ion__input" />
          </IonRow>
          <IonButton expand="block" color={"dark"}>
            Search
          </IonButton>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Search;

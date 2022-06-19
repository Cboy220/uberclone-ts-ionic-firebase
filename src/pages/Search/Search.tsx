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
  IonItem,
  IonItemDivider,
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
      <IonItemDivider />
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol size="1">
              <IonIcon icon={ellipsisHorizontalCircleOutline} size="small" />
              <br />
              <IonImg
                class="circle__ion__icon"
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
              />

              <IonInput
                placeholder="Workers location"
                class="search__ion__input"
              />
            </IonCol>
            <IonCol size="1">
              <IonIcon icon={addCircleOutline} class="add__ion__icon" />
            </IonCol>
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

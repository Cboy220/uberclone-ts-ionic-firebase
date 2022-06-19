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
  IonRouterLink,
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

const SearchTab: React.FC = () => {
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
              />

              <IonInput
                placeholder="Workers location"
                class="search__ion__input"
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
          <IonRouterLink href="/tabs/confirm">
            <IonButton expand="block" color={"dark"}>
              Confirm worker reservation
            </IonButton>
          </IonRouterLink>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SearchTab;

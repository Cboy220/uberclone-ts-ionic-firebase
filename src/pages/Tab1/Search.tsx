import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonItem,
  IonItemGroup,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Search.scss";
import Map from "../../components/Map/Map";

const Search: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Map name="Map" />
        {/**Header */}

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonImg
                src={
                  "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655577547/FIXITAPP/ionic-app-images/header/fix__it__header__logo_t8mpen.svg"
                }
                className="fixit__header__logo"
              />
            </IonCol>
            <IonCol>
              <IonText>
                <h4>Omar AbdElRahman</h4>
              </IonText>

              <IonAvatar security="" slot="">
                <IonImg
                  src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1653641529/personal_portofolio_assets_2022/pp_home_removedbg_g5eq7r.webp"
                  className="fixit__header__avatar"
                />
              </IonAvatar>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonButtons>
          <IonButton color={"success"}>Action Btn</IonButton>
          <IonButton color={"secondary"}>Action Btn</IonButton>
          <IonButton color={"icon-only"}>Action Btn</IonButton>
        </IonButtons>
        {/**Action Btns */}

        {/**input btn */}
      </IonContent>
    </IonPage>
  );
};

export default Search;

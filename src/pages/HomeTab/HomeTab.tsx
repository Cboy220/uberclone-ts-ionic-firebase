import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonItemDivider,
  IonPage,
  IonRouterLink,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./HomeTab.scss";
import Map from "../../components/Map/Map";

interface MapsProps {
  name: string;
  dropOffCoordinates: string;
  pickupCoordinates: string;
}

const HomeTab: React.FC<MapsProps> = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Map name={"map"} dropOffCoordinates={""} pickupCoordinates={""} />
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

        <IonButtons slot="">
          <IonGrid>
            <IonRow>
              <IonCol size="4">
                <IonRouterLink href="/tabs/search">
                  <IonAvatar>
                    <IonImg src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655585748/FIXITAPP/nextjs-app-images/ActionButtonImages/woker-avatar-male_mieyjc.svg" />
                  </IonAvatar>

                  <IonButton href="/tabs/search" color={"success"}>
                    <IonText>
                      <h5>Worker</h5>
                    </IonText>
                  </IonButton>
                </IonRouterLink>
              </IonCol>

              <IonCol size="4">
                <IonRouterLink href="/tabs/search">
                  <IonAvatar>
                    <IonImg src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655585697/FIXITAPP/nextjs-app-images/ActionButtonImages/worker-tool-search_au8m9f.svg" />
                  </IonAvatar>
                  <IonButton color={"secondary"}>
                    <IonText>
                      <h5>Profession</h5>
                    </IonText>
                  </IonButton>
                </IonRouterLink>
              </IonCol>
              <IonCol size="4">
                <IonRouterLink href="/tabs/search">
                  <IonAvatar>
                    <IonImg src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655623254/FIXITAPP/nextjs-app-images/ActionButtonImages/clock-svgrepo-com_b913bl.svg" />
                  </IonAvatar>
                  <IonButton color={"secondary"}>
                    <IonText>
                      <h5>Reserve</h5>
                    </IonText>
                  </IonButton>
                </IonRouterLink>
              </IonCol>

              <IonItemDivider />
              <IonCol>
                <IonRouterLink href="/tabs/search">
                  <IonButton
                    href="/tabs/search"
                    expand="block"
                    color={"primary"}
                  >
                    Where to?
                  </IonButton>
                </IonRouterLink>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonButtons>
        {/**Action Btns */}

        {/**input btn */}
      </IonContent>
    </IonPage>
  );
};

export default HomeTab;

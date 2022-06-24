import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
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
  pickupCoordinates: number[];
  dropOffCoordinates: number[];
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
        <Map
          name={"map"}
          dropOffCoordinates={[31.239661, 30.056156]}
          pickupCoordinates={[31.239661, 30.056156]}
        />
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
              <IonText class="ion-text-center">
                <h5>Omar AbdElRahman</h5>
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

        <IonGrid>
          <IonRow>
            <IonCol size="4">
              <IonRouterLink href="/tabs/search">
                <IonCard color={"dark"}>
                  <IonCardContent>
                    <IonText class="ion-text-center">
                      <h5>Worker</h5>
                    </IonText>
                    <IonAvatar slot="end">
                      <IonImg src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655585748/FIXITAPP/nextjs-app-images/ActionButtonImages/woker-avatar-male_mieyjc.svg" />
                    </IonAvatar>
                  </IonCardContent>
                </IonCard>
              </IonRouterLink>
            </IonCol>

            <IonCol size="4">
              <IonRouterLink href="/tabs/search">
                <IonCard color={"dark"}>
                  <IonCardContent>
                    <IonText class="ion-text-center">
                      <h5>Profession</h5>
                    </IonText>
                    <IonAvatar>
                      <IonImg src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655585697/FIXITAPP/nextjs-app-images/ActionButtonImages/worker-tool-search_au8m9f.svg" />
                    </IonAvatar>
                  </IonCardContent>
                </IonCard>
              </IonRouterLink>
            </IonCol>
            <IonCol size="4">
              <IonRouterLink href="/tabs/search">
                <IonCard color={"dark"}>
                  <IonCardContent>
                    <IonText class="ion-text-center">
                      <h5>Reserve</h5>
                    </IonText>
                    <IonAvatar class="ion-text-center">
                      <IonImg src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655623254/FIXITAPP/nextjs-app-images/ActionButtonImages/clock-svgrepo-com_b913bl.svg" />
                    </IonAvatar>
                  </IonCardContent>
                </IonCard>
              </IonRouterLink>
            </IonCol>

            <IonCol>
              <IonRouterLink href="/tabs/search">
                <IonButton href="/tabs/search" expand="full" color={"dark"}>
                  Where to?
                </IonButton>
              </IonRouterLink>
            </IonCol>
          </IonRow>
        </IonGrid>
        {/**Action Btns */}

        {/**input btn */}
      </IonContent>
    </IonPage>
  );
};

export default HomeTab;

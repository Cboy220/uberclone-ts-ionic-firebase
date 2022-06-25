import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonPage,
  IonRouterLink,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <IonPage>
      <IonContent fullscreen >
        <IonHeader>
          <IonToolbar>
            <IonTitle size={"large"}>Login</IonTitle>
          </IonToolbar>

          <IonGrid>
            <IonRow>
              <IonCol size="12">
                <IonImg
                src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655577547/FIXITAPP/ionic-app-images/header/fix__it__header__logo_t8mpen.svg"
                className="login__icon"
                />
              </IonCol>
              <IonCol size="12">
                <IonImg
                  src={
                    "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1656174907/FIXITAPP/ionic-app-images/Login%20and%20get%20started/undraw_under_construction_-46-pa_1_zkz0vc.svg"
                  }
                  class="login__svg"
                />
              </IonCol>

              <IonCol size="12">
                <IonButton color={"success"} expand={"block"}>
                  Sign in with Google
                </IonButton>
              </IonCol>

              <IonCol size="6">
                <IonRouterLink href="/forgotpassword">
                  Forgot Password ?
                </IonRouterLink>
              </IonCol>
              <IonCol size="6">
                <IonRouterLink href="/register">Register account</IonRouterLink>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Login;

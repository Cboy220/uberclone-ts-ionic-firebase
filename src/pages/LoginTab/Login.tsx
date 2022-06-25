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

const Login = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonTitle size={"large"}>Login</IonTitle>
          </IonToolbar>

          <IonGrid>
            <IonRow>
              <IonCol size="12">
                <IonImg
                  src={
                    "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1656172754/FIXITAPP/ionic-app-images/Login%20and%20get%20started/undraw_enter_uhqk_sgcssl.svg"
                  }
                />
              </IonCol>

              <IonCol size="12">
                <IonButton color={"danger"} expand={"block"}>
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

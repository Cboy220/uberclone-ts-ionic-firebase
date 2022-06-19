import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";
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
          <IonRow>
            <IonInput placeholder="Where" class="search__ion__input"/>
        
         
          </IonRow>
          
      <IonRow className="ion-items-self-end">
        <IonCol  offset="10" size-lg>
        <IonIcon
             icon={addCircleOutline}
             size="large"

             />
        </IonCol>
    
      </IonRow>

      
          <IonRow>
            <IonInput placeholder="Go to"  class="search__ion__input" />
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

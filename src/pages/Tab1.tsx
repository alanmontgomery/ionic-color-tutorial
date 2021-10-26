import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonButton color="alans-color">
          Button
        </IonButton>

        <IonItem>
          <IonLabel>Toggle</IonLabel>
          <IonToggle />
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

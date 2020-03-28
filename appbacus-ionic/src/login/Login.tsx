import { IonButtons, IonItemDivider, IonList, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption, IonIcon, IonNote, IonGrid, IonRow, IonCol, IonRange, IonInput, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import { sunny } from 'ionicons/icons';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';
import './Login.css';
// import './color1.css';
import { isNumber } from 'util';
// console.log(x)


const Login: React.FC<RouteComponentProps<{ name: string; }>> = ({ match }) => {
  const [text, setText] = useState<string>();
  const [text2, setText2] = useState<string>();
  const [number, setNumber] = useState<number>();


  return (
    <IonPage>
      <IonContent>
        <div className="animation-circle"><i></i><i></i><i></i></div>
        <IonGrid>
          <IonRow >
            <IonCol sizeLg="3" sizeXs="12"></IonCol>
            <IonCol sizeXs="12" sizeLg="6" className="text-center">
              <IonTitle className="font-size-title-login">🎓Appbacus</IonTitle>
              <IonList>
                <IonItem>
                  <IonInput value={text} placeholder="Nombre de usuario/email" onIonChange={e => setText(e.detail.value!)} clearInput></IonInput>
                </IonItem>
                <IonItem>
                  <IonInput value={text2} type={"password"} placeholder="Contraseña" onIonChange={e => setText2(e.detail.value!)}></IonInput>
                </IonItem>

                <IonButton expand={"block"} routerLink={"/before-to-use"}>Entrar</IonButton>


              </IonList>
            </IonCol>
            <IonCol sizeXs="12" sizeLg="3"></IonCol>
            <IonCol sizeXs="12" sizeLg="3"></IonCol>
            <IonCol sizeXs="12" sizeLg="3" className="text-center" >
              <IonItem routerLink="/lost-password">🤔 Olvido su contrasena?</IonItem>
            </IonCol>
            <IonCol sizeXs="12" sizeLg="3" className="text-center"><IonItem routerLink="/register">😁 Aun no tiene cuenta?</IonItem> </IonCol>
            <IonCol sizeXs="12" sizeLg="3"></IonCol>

          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default withRouter(Login);

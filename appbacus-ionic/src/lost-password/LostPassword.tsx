import { IonButtons, IonItemDivider, IonList, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption, IonIcon, IonNote, IonGrid, IonRow, IonCol, IonRange, IonInput, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import { sunny } from 'ionicons/icons';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';
import './LostPassword.css';
// import './color1.css';
import { isNumber } from 'util';
// console.log(x)


const Login: React.FC<RouteComponentProps<{ name: string; }>> = ({ match }) => {
  const [text, setText] = useState<string>();
  const [text2, setText2] = useState<string>();
  const [text_2, setText_2] = useState<string>();
  const [text_name, setTexName] = useState<string>();
  const [text_lastname, setTexLastName] = useState<string>();
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
                  <h3>Recibiras un correo para Recuperar tu contrasena</h3>
                </IonItem>
                <IonItem>
                  <IonInput value={text} placeholder="Ingrese email" type={"email"} onIonChange={e => setText(e.detail.value!)} clearInput required></IonInput>
                </IonItem>
                
                <IonButton expand={"block"} routerLink={"/abacos/Abaco"}>Enviar</IonButton>


              </IonList>
            </IonCol>
            <IonCol sizeXs="12" sizeLg="3"></IonCol>
            <IonCol sizeXs="12" sizeLg="3"></IonCol>
            <IonCol sizeXs="12" sizeLg="3" className="text-center" >
              <IonItem routerLink="/">🤔 Volver Atras</IonItem>
            </IonCol>
            <IonCol sizeXs="12" sizeLg="3" className="text-center"></IonCol>
            <IonCol sizeXs="12" sizeLg="3"></IonCol>

          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default withRouter(Login);

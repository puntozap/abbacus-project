import { IonButtons, IonItemDivider, IonList, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption, IonIcon, IonNote, IonGrid, IonRow, IonCol, IonRange, IonInput, IonButton, IonSlides, IonSlide, } from '@ionic/react';
import React, { useState } from 'react';
import { sunny } from 'ionicons/icons';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';
import step1 from "../assets/icon/step1.gif";
import step2 from "../assets/icon/step2.gif";
import step3 from "../assets/icon/step3.1.jpg";
import step0 from "../assets/icon/step0.gif";
import './SlidePostLogin.css';
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
  const slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  return (
    <IonPage>
      <IonContent>
        <div className="animation-circle"><i></i><i></i><i></i></div>
        <IonSlides pager={true} options={slideOpts}>
          <IonSlide>
            <IonGrid>
              <IonRow>
                <IonCol sizeLg="12" sizeXs="12"><h3>Paso 0</h3></IonCol>
                <IonCol sizeLg="12" sizeXs="12"><img width="20" src={step0} alt="" /></IonCol>
                <IonCol sizeLg="12" sizeXs="12">
                  <p>La aplicacion funciona si desliza tu dedo de arriba a abajo</p>
                  <p><IonButton>Desliza para continuar</IonButton></p>
                </IonCol>
              </IonRow>
            </IonGrid>

          </IonSlide>
          <IonSlide>
            <IonGrid>
              <IonRow>
                <IonCol sizeLg="12" sizeXs="12"><h3>Paso 1</h3></IonCol>
                <IonCol sizeLg="12" sizeXs="12"><img src={step1} alt="" /></IonCol>
                <IonCol sizeLg="12" sizeXs="12">
                  <p>En esta seccion debes tener tu nota previa que es el promedio de tus dos primeros parciales. seran notas del 10 al 20</p>
                  <p><IonButton>Desliza para continuar</IonButton></p>
                </IonCol>
              </IonRow>
            </IonGrid>

          </IonSlide>
          <IonSlide>
            <IonGrid>
              <IonRow>
                <IonCol sizeLg="12" sizeXs="12"><h3>Paso 2</h3></IonCol>
                <IonCol sizeLg="12" sizeXs="12"><img src={step2} alt="" /></IonCol>
                <IonCol sizeLg="12" sizeXs="12">
                  <p>Luego tenemos las posibles notas del examen final, comprenden notas del 1 al 20</p>
                  <p><IonButton>Desliza para continuar</IonButton></p>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonSlide>
          <IonSlide>
          <IonGrid>
              <IonRow>
                <IonCol sizeLg="12" sizeXs="12"><h3>Y para finalizar</h3></IonCol>
                <IonCol sizeLg="12" sizeXs="12"><img src={step3} alt="" /></IonCol>
                <IonCol sizeLg="12" sizeXs="12">
                  <p>Podras descubrir con cuanto dejaras tu materia. en este caso sale 13 puntos. por lo que de nota previa obtuviste 15 puntos y del posible examen final obtuviste 10</p>
                  
                </IonCol>
                <IonCol sizeLg="12" sizeXs="12"><IonButton  routerLink={"/abaco"}>Tocar para Finalizar</IonButton></IonCol>
                
                <IonCol sizeLg="12" sizeXs="12"><hr/></IonCol>
              </IonRow>
            </IonGrid>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default withRouter(Login);

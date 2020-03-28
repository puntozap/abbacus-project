import { IonButtons, IonItemDivider, IonList, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption, IonIcon, IonNote, IonGrid, IonRow, IonCol, IonRange } from '@ionic/react';
import React, { useState } from 'react';
import { sunny } from 'ionicons/icons';
import { RouteComponentProps } from 'react-router';
import x from '../abacus.json';
import ExploreContainer from '../components/ExploreContainer';
import './Abacos.css';
import { isNumber } from 'util';
// console.log(x)

import Menu from '../components/Menu';

const Page: React.FC<RouteComponentProps<{ name: string; }>> = ({ match }) => {
  const [selectedPage, setSelectedPage] = useState('');

  const [value, setValue] = useState(10);
  let [value2, setValue2] = useState(0);
  const [y] = useState(x) as any;

  const [rangeValue, setRangeValue] = useState<{
    lower: number;
    upper: number;
  }>({ lower: 0, upper: 0 });
  // function hola(){
  //   console.log("hola");
  // }
  function hola(value: any, valuex: any) {

    let note = y[value][value2];
    let unapproved = note < 10 ? "😔 Reprobado" : note >= 10 && note <= 12 ? '😃 Aprobado' : note >= 13 && note <= 16 ? '😁 Aprobado' : note == 17 ? '😆 Aprobado' : note == 18 ? '😅 Aprobado' : '😜 Aprobado';
    let classes = note < 10 ? "unapproved" : note >= 10 && note <= 12 ? 'approved' : note >= 13 && note <= 16 ? 'approved-2' : note == 17 ? 'approved-3' : note == 18 ? 'approved-4' : 'approved-5';
    let message = note < 10
      ? "Debes ir a reparación 😭 así que ¡A estudiar! No mereces estar celebrando. Ya veremos que pasa"
      :
      note >= 10 && note <= 12 ? 'Celebra con una cerveza🍻 pero sabes que no lo mereces'
        :
        note >= 13 && note <= 16 ? "Celebra con una cerveza🍻 lo mereces por ser parte del promedio, sin embargo, esto puede mejorar"
          :
          note == 17 ? "Vaya! Vaya!, nada mal. Celebra con una cerveza🍻🕺🏿💃🏽"
            :
            note == 18 ? "Excelente. 18 no lo saca cualquiera. Celebra con dos cervezas🍻🍻🕺🏿💃🏽 bebe con precaucion, tampoco es para tanto"
              :
              "Asi es que debe ser. llegar eximido siempre ¡Carajo! Celebra con tres cerveza🍻🍻🍻🕺🏿💃🏽 bebe con precaucion";
    // let classes="";
    return (
      <IonRow>
        <IonCol size="12" className={classes}>
          <IonLabel><span className="font-3em">{note} puntos</span> </IonLabel>
          <br />
          <IonLabel className="font-2em">{unapproved}</IonLabel>
          <br />
          <IonLabel>{message}<br />{'o simplemente haz lo que desees.'}</IonLabel>
        </IonCol>
      </IonRow>
    );
  }

  return (
    <IonPage>


      <IonContent>
        <div className="animation-circle"><i></i><i></i><i></i></div>

        <IonGrid>
          <IonRow>
            <IonCol sizeXs="12" sizeLg="12" className="text-center">
              <IonTitle className="font-size-title-login">🎓Appbacus</IonTitle>
            </IonCol>
            <IonCol sizeLg="1"></IonCol>
            <IonCol sizeLg="5" sizeXs="12" className="text-center">
              <h3>¿Cuál es mi nota previa? 🤔</h3>
              <IonRange pin={true} min={10} max={20} value={value} onIonChange={e => setValue(e.detail.value as number)} />

              <IonRow>
                <IonCol size="12" className={value < 10 ? "unapproved" : value >= 10 && value <= 12 ? "approved" : value >= 13 && value <= 16 ? "approved-2" : value == 17 ? "approved-3" : value == 18 ? "approved-4" : "approved-5"}>
                  <IonLabel>Llevo <span className="font-3em">{value}</span> puntos nota previa</IonLabel>
                  <br />
                  <IonLabel className="font-3em">{y[value]['percentage'] == 40 ? '😃' : y[value]['percentage'] == 60 ? '😁' : y[value]['percentage'] == 70 ? '😆' : y[value]['percentage'] == 80 ? '😅' : '😜'}</IonLabel>
                </IonCol>
              </IonRow>

            </IonCol>
            <IonCol sizeLg="5" sizeXs="12" className="text-center">
              <h3>¿Cuál es o será mi nota final? 🤔</h3>
              <IonRange pin={true} min={0} max={20} value={value2} onIonChange={e => setValue2(e.detail.value as number)} />
              <IonRow>
                <IonCol size="12" className={value2 < 10 ? "unapproved" : value2 >= 10 && value2 <= 12 ? "approved" : value2 >= 13 && value2 <= 16 ? "approved-2" : value2 == 17 ? "approved-3" : value2 == 18 ? "approved-4" : "approved-5"}>
                  <IonLabel>Saque <span className="font-3em">{value2}</span> puntos examen final</IonLabel>
                  <br />
                  <IonLabel className="font-3em {value2<10?'unapproved':''}">{value2 < 10 ? '😔' : y[value2]['percentage'] == 40 ? '😃' : y[value2]['percentage'] == 60 ? '😁' : y[value2]['percentage'] == 70 ? '😆' : y[value2]['percentage'] == 80 ? '😅' : '😜'}</IonLabel>
                </IonCol>
              </IonRow>
            </IonCol>
            <IonCol sizeLg="1"></IonCol>
            <IonCol sizeLg="1"></IonCol>
            <IonCol sizeLg="10" sizeXs="12" className="text-center">
              <h3>¿Cuál es o será la definitiva? 🤔</h3>
              {hola(value, value2) as any}
            </IonCol>
            <IonCol sizeLg="1"></IonCol>
          </IonRow>

        </IonGrid>
      </IonContent>



    </IonPage>
  );
};

export default Page;

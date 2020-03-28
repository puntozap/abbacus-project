import Menu from './components/Menu';
import Page from './pages/Page';
import Abaco from './abacos/Abacos';
import Register from './register/Register';
import Login from './login/Login';
import SlidePostLogin from './slide-post-login/SlidePostLogin';
import LostPassword from './lost-password/LostPassword';
import React, { useState } from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import { calendar, personCircle, map, informationCircle } from 'ionicons/icons';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {

  const [selectedPage, setSelectedPage] = useState('');

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <IonRouterOutlet id="main">
            <Route path="/" render={(props) => {//SlidePostLogin
              setSelectedPage(props.match.params.name);
              return <Login {...props} />;
            }} exact={true} />
            <Route path="/before-to-use" render={(props) => {//SlidePostLogin
              setSelectedPage(props.match.params.name);
              return <SlidePostLogin {...props} />;
            }} exact={true} />
            <Route path="/lost-password" render={(props) => {
              setSelectedPage(props.match.params.name);
              return <LostPassword {...props} />;
            }} exact={true} />
            <Route path="/register" render={(props) => {
              setSelectedPage(props.match.params.name);
              return <Register {...props} />;
            }} exact={true} />
            <Route path="/abaco" render={(props) => {
              setSelectedPage(props.match.params.name);
              return <Abaco {...props} />;
            }} exact={true} />
          </IonRouterOutlet>
          <Route path="/" render={() => <Redirect to="/" />} exact={true} />

        </IonSplitPane>
      </IonReactRouter>
      {/* <IonReactRouter>

        <IonSplitPane contentId="main">
          <Menu selectedPage={selectedPage} />
          <IonRouterOutlet id="main">
            
            <Route path="/abacos/:name" render={(props) => {
              setSelectedPage(props.match.params.name);
              return <Abaco {...props} />;
            }} exact={true} />
            <Route path="/page/:name" render={(props) => {
              setSelectedPage(props.match.params.name);
              return <Page {...props} />;
            }} exact={true} />
          </IonRouterOutlet>
          <Route path="/" render={() => <Redirect to="/abacos/Abaco" />} exact={true} />

        </IonSplitPane>
      </IonReactRouter> */}
    </IonApp>
  );
};

export default App;

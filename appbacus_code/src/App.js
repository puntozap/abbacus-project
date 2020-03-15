import React from 'react';
import logo from './logo.svg';
import './App.css';
import x from './abacus.json';
import 'bootstrap/dist/css/bootstrap.css';
import FormData from './formData/formData';

import { Button, Container, Col, Input, Row, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import InputRange from 'react-input-range';

import Slider from 'react-rangeslider'

// To include the default styles
import 'react-rangeslider/lib/index.css'

import { Facebook, Twitter } from 'react-sharingbuttons'
import 'react-sharingbuttons/dist/main.css'
// import {abacus} from './abacus.json';
var veamos = "";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: x,
      dato: "",
      previous: "",
      lastNote: "",
      todo2: "",
      value1: 10,
      value2: 0,
      value: 0,
      ok: 0
    }

    this.search = this.search.bind(this);

  }
 
  handleChangeStart = () => {

  };

  handleChange = value => {
    this.setState({
      value1: value
    })
  };
  handleChange2 = value => {
    this.setState({
      value2: value
    })
  };

  handleChangeComplete = () => {

  };
  
  search = e => {
    const url = 'https://puntozap.github.io/appbacus'
    const shareText = 'Calcula tu definitiva con AppBacus. App del Abaco de nota de la Universidad Catolica del Tachira';
    const previous = this.state.value1;
    const finalText = this.state.value2;
    const calification = this.state.todos[previous][finalText];
    const percentage = this.state.todos[previous]['percentage'];
    return (
      <Row>

        <Col lg={12} className={calification <= 9 ? 'bg-dark text-white p-1 rounded mr-1 ml-1' : calification == 21 ? 'bg-success text-white p-1 rounded mr-1 ml-1' : this.state.todos[calification]['percentage'] == 40 ? 'bg-secondary text-white p-1 rounded p-1 rounded mr-1 ml-1' : this.state.todos[calification]['percentage'] == 60 ? 'bg-primary text-white p-1 rounded p-1 rounded mr-1 ml-1' : this.state.todos[calification]['percentage'] == 70 ? 'bg-info text-white p-1 rounded p-1 rounded mr-1 ml-1' : this.state.todos[calification]['percentage'] == 80 ? 'bg-blue-hiperligth text-white p-1 rounded p-1 rounded mr-1 ml-1' : 'bg-success text-white p-1 rounded p-1 rounded mr-1 ml-1'}>

          <p className="display-3">
            <span className="fz-16">La definitiva es de </span>{calification < 10 ? '0' + calification : calification}<span className="fz-16"> puntos</span>
          </p>
          <p className="h2">{calification < 10 ? '😔 Reprobado' : calification >= 10 && calification <= 12 ? '😃 Aprobado' : calification >= 13 && calification <= 16 ? '😁 Aprobado' : calification == 17 ? '😆 Aprobado' : calification == 18 ? '😅 Aprobado' : '😜 Aprobado'}</p>
          <p className="">{calification < 10 ? 'Debes ir a reparación 😭 así que ¡A estudiar! No mereces estar celebrando. Ya veremos que pasa' : calification >= 10 && calification <= 12 ? 'Celebra con una cerveza🍻 pero sabes que no lo mereces':calification >= 13 && calification <= 16 ?"Celebra con una cerveza🍻 lo mereces por ser parte del promedio, sin embargo, esto puede mejorar":calification == 17 ?"Vaya! Vaya!, nada mal. Celebra con una cerveza🍻🕺🏿💃🏽":calification == 18 ?"Excelente. 18 no lo saca cualquiera. Celebra con dos cervezas🍻🍻🕺🏿💃🏽 bebe con precaucion, tampoco es para tanto":"Asi es que debe ser. llegar eximido siempre ¡Carajo! Celebra con tres cerveza🍻🍻🍻🕺🏿💃🏽 bebe con precaucion"} </p>
          {'o simplemente haz lo que desees.'}
          <p className="h4">{percentage}% <span> de porcentaje aplicable</span></p>
          <p>Comparte en<br/><Facebook url={url} shareText={shareText} />
          <Twitter url={url} shareText={shareText} /></p>
        </Col>
      </Row >
    );
  }
  render() {
    const { value1 } = this.state;
    const { value2 } = this.state;
    
    return (
      <div className="App">
        <Container className="pt-5 pb-5">
          <Row>


            <Col lg={12} >
              <p className="h2">🎓AppBacus</p>
            </Col>

            <Col lg={6} className="pb-5 pt-2">
              <label className="h5 pb-3">¿Cuál es mi nota previa? 🤔</label>
              <div className='slider-horizontal'>
                <Slider
                  min={10}
                  max={20}
                  value={value1}
                  onChangeStart={this.handleChangeStart}
                  onChange={this.handleChange}
                  onChangeComplete={this.handleChangeComplete}
                />
              </div>
              <Row>
                <Col lg={12} className={this.state.todos[value1]['percentage'] == 40 ? 'bg-secondary p-1 rounded mb-1 mt-5 mr-1 ml-1' : this.state.todos[value1]['percentage'] == 60 ? 'bg-primary p-1 rounded mb-1 mt-5 mr-1 ml-1' : this.state.todos[value1]['percentage'] == 70 ? 'bg-info p-1 rounded mb-1 mt-5 mr-1 ml-1' : this.state.todos[value1]['percentage'] == 80 ? 'bg-blue-hiperligth p-1 rounded mb-1 mt-5 mr-1 ml-1' : 'bg-success p-1 rounded mb-1 mt-5 mr-1 ml-1'}>
                  <p className="text-white display-3"><span className="fz-16">Llevo</span> {value1} <span className="fz-16">Puntos nota previa</span></p>
                  <p className="display-4">{this.state.todos[value1]['percentage'] == 40 ? '😃' : this.state.todos[value1]['percentage'] == 60 ? '😁' : this.state.todos[value1]['percentage'] == 70 ? '😆' : this.state.todos[value1]['percentage'] == 80 ? '😅' : '😜'}</p>
                </Col>
              </Row>
            </Col>
            <Col lg={6} className="pb-5 pt-2">
              <label className="h5 pb-3">¿Cuál es o será mi nota final? 🤔</label>
              <div className='slider-horizontal'>
                <Slider
                  min={0}
                  max={20}
                  value={value2}
                  onChangeStart={this.handleChangeStart}
                  onChange={this.handleChange2}
                  onChangeComplete={this.handleChangeComplete}
                />
              </div>
              <Row>
                <Col lg={12} className={value2 < 10 ? 'bg-dark rounded p-1 mb-1 mt-5 ml-2 mr-1' : this.state.todos[value2]['percentage'] == 40 ? 'bg-secondary p-1 rounded p-1 mb-1 mt-5 ml-2 mr-1' : this.state.todos[value2]['percentage'] == 60 ? 'bg-primary p-1 rounded p-1 mb-1 mt-5 ml-2 mr-1' : this.state.todos[value2]['percentage'] == 70 ? 'bg-info p-1 rounded p-1 mb-1 mt-5 ml-2 mr-1' : this.state.todos[value2]['percentage'] == 80 ? 'bg-blue-hiperligth p-1 rounded p-1 mb-1 mt-5 ml-2 mr-1' : 'bg-success p-1 rounded p-1 mb-1 mt-5 ml-2 mr-1'}><p className="text-white display-3"><span className="fz-16">Saqué</span> {value2 < 10 ? '0' + value2 : value2} <span className="fz-16">{value2 == 1 ? 'Punto' : 'Puntos'} nota final</span></p><p className="display-4">{value2 < 10 ? '😔' : this.state.todos[value2]['percentage'] == 40 ? '😃' : this.state.todos[value2]['percentage'] == 60 ? '😁' : this.state.todos[value2]['percentage'] == 70 ? '😆' : this.state.todos[value2]['percentage'] == 80 ? '😅' : '😜'}</p></Col>
              </Row>
            </Col>

            <Col lg={12}>
              <label className="h5 pb-3">¿Cuál es o será la definitiva? 🤔</label>

              {this.search()}

            </Col>
          </Row>
        </Container>
        <footer className="pb-5">🎓AppBacus sigue siendo desarrollado con 💗 por <a href="https://www.instagram.com/puntozap/" target="_blank">@Puntozap</a>. Since 2019</footer>
      </div>
    );
  }

}

export default App;

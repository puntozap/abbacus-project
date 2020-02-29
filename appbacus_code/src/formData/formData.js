import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Container, Col, Input, Row, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

class FormData extends React.Component {
    constructor(props){
        super(props);
 
        this.state = { value: 10 };
    }
    render() {
        // console.log(this.props.numbertext,"xxxx");
        return (
            <Card >
                <CardBody>
                    <form className="card-body" onSubmit={this.props.search}>
                        <CardTitle><strong>Abaco de Notas</strong></CardTitle>
                        <Input type="number" className="text-center border-0 display-4 " placeholder="Toca para Ingresar nota Previa. Ej: 15" title=" rango de Numeros a ingresar del 10 al 20" id="hola" name="previous" min="0" max="20" onChange={this.props.change} value={this.props.numbertext} />
                        <Input type="number" className="text-center border-0 display-4 " placeholder="Toca para Ingresar nota Previa. Ej: 15" title=" rango de Numeros a ingresar del 10 al 20" id="hola" name="lastNote" min="0" max="20" onChange={this.props.change} value={this.props.numbertext} />
                        <InputRange
                            maxValue={20}
                            minValue={10}
                            type="number"
                            value={this.state.value}
                            onChange={value => this.setState({ value })} />

                    </form>
                </CardBody>
            </Card>
        );
    }
}
export default FormData;
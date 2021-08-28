import { Component } from 'react';
import TableAir from '../../UI/TableAir';

const air_index = [
    { condition: '', color: '', desc: '' },
    { condition: 'Buena', color: '#4CAF50', desc: 'La calidad del aire es satisfactoria y la contaminación del aire presenta poco o ningún riesgo.' },
    { condition: 'Moderada', color: '#FFEB3B', desc: 'La calidad del aire es aceptable. Sin embargo, puede haber un riesgo para algunas personas, particularmente aquellas que son inusualmente sensibles a la contaminación del aire.' },
    { condition: 'Mala para grupos sensibles', color: '#FF9800', desc: 'Los miembros de grupos sensibles pueden experimentar efectos sobre la salud. Es menos probable que el público en general se vea afectado.' },
    { condition: 'Mala', color: '#F44336', desc: 'Algunos miembros del público en general pueden experimentar efectos sobre la salud; los miembros de grupos sensibles pueden experimentar efectos de salud más graves.' },
    { condition: 'Muy Mala', color: '#9C27B0', desc: 'Alerta de salud: el riesgo de efectos en la salud aumenta para todos.' },
    { condition: 'Peligrosa', color: '#D35400', desc: 'Advertencia de salud de condiciones de emergencia: todos tienen más probabilidades de verse afectados.' },
]

class AirQuality extends Component {
    render() {
        return (
            this.props.data.current ?
                <div className="container">
                    <div className="row">
                        <div className="card">
                            <div className="card-body">
                                <h3>{`Calidad del Aire hoy en ${this.props.data.location.name}`}</h3>
                                <br></br>
                                <div className="row">
                                    <div className="col-4" style={{ borderRight: '1px solid black' }}>
                                        <h4>{`Índice EPA: ${Object.entries(this.props.data.current.air_quality)[6][1]}`}</h4>
                                        <p className="">
                                            {`Condición: ${air_index[Object.entries(this.props.data.current.air_quality)[6][1]].condition}`}
                                        </p>
                                        <div style={{
                                            borderRadius: '50%',
                                            width: '25px',
                                            height: '25px',
                                            backgroundColor: `${air_index[Object.entries(this.props.data.current.air_quality)[6][1]].color}`
                                        }}>
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <h4>Descripción</h4>
                                        <p>{`${air_index[Object.entries(this.props.data.current.air_quality)[6][1]].desc}`}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="card">
                            <div className="card-body">
                                <h3>{`Contaminantes del Aire`}</h3>
                                <br></br>
                                <TableAir data={this.props.data.current}>

                                </TableAir>
                            </div>
                        </div>
                    </div>
                </div>
                :

                <div></div>
        );
    }
}

export default AirQuality
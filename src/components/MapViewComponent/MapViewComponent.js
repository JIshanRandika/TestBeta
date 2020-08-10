// import React from "react";
// import {
//     Row,Col,Container, Card
// } from "reactstrap";
// import { Form, Button } from 'react-bootstrap';
// import MapComponent from "../MapComponent/MapComponent.js";
//
//
// class VehicleViewComponent extends React.Component {
//     state = {};
//     render() {
//         let resumeData = this.props.resumeData;
//         return (
//             <>
//
//                 <Row style={{ backgroundColor:"#64a5e4"}}>
//                     <Col md="3" xs="12">
//                         asd
//                     </Col>
//                     <Col md="9" xs="12" style={{marginTop:"3px", backgroundColor:"#e2e4e1"}}>
//                         <div>
//                             <Row>
//                                 <div>
//                                     <p style={{fontSize: 20, marginTop:"10px", marginLeft:"30%", }} className="  font-weight-bold   ">
//                                         Map
//                                     </p>
//                                 </div>
//                             </Row>
//                             <Row>
//                         <MapComponent/>
//                             </Row>
//                         </div>
//                     </Col>
//                 </Row>
//             </>
//         );
//     }
// }
//
// export default VehicleViewComponent;


import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import SidebarComponent from '../sidebar/SidebarComponent';
import HeaderComponent from '../header/HeaderComponent';
import MapComponent from "../MapComponent/MapComponent.js";

// import './App.css';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        minHeight: '100vh'
    },
    content: {
        marginTop: 54
    },
    mainBlock: {
        backgroundColor: '#F7F8FC',
        padding: 30
    }
});

class MapViewComponent extends React.Component {

    state = { selectedItem: 'Map' };

    componentDidMount() {
        window.addEventListener('resize', this.resize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    resize = () => this.forceUpdate();

    render() {
        const { selectedItem } = this.state;
        return (
            <Row className={css(styles.container)}>
                <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} />
                <Column flexGrow={1} className={css(styles.mainBlock)}>
                    <HeaderComponent title={selectedItem} />
                    <div className={css(styles.content)}>
                        {/*<span>Content</span>*/}
                        <MapComponent/>
                    </div>
                </Column>
            </Row>
        );
    }
}

export default MapViewComponent;

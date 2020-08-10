import React from "react";
import {
    Row,Col,Container, Card
} from "reactstrap";
import { Form, Button } from 'react-bootstrap';



class VehicleViewComponent extends React.Component {
    state = {};
    render() {
        let resumeData = this.props.resumeData;
        return (
            <>
                <Row style={{ marginLeft:"5px",marginRight:"5px"}}>
                    <Col md="12" xs="12">
                        <Row>
                            <Col md="6" xs="12" className="columncenter">
                                <Button href="/numberofusers" className="my-4  shadow" style={{borderRadius:20, borderColor:"rgba(226,228,225,0.08)", backgroundColor:"rgb(255,255,255)",width:"80%"}}>
                                    <a className="font-weight-bold" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Number of Users</a>
                                </Button>
                            </Col>
                            <Col md="6" xs="12" className="columncenter">
                                <Button href="/locationreport" className="my-4  shadow" style={{borderRadius:20, borderColor:"rgba(226,228,225,0.08)", backgroundColor:"rgb(255,255,255)",width:"80%"}}>
                                    <a className="font-weight-bold" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Location</a>
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6" xs="12" className="columncenter">
                                <Button href="/sales" className="my-4  shadow" style={{borderRadius:20, borderColor:"rgba(226,228,225,0.08)", backgroundColor:"rgb(255,255,255)",width:"80%"}}>
                                    <a className="font-weight-bold" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Sales</a>
                                </Button>
                            </Col>
                            <Col md="6" xs="12" className="columncenter">
                                <Button href="/geozone" className="my-4  shadow" style={{borderRadius:20, borderColor:"rgba(226,228,225,0.08)", backgroundColor:"rgb(255,255,255)",width:"80%"}}>
                                    <a className="font-weight-bold" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Geozone</a>
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6" xs="12" className="columncenter">
                                <Button href="/overspeed" className="my-4  shadow" style={{borderRadius:20, borderColor:"rgba(226,228,225,0.08)", backgroundColor:"rgb(255,255,255)",width:"80%"}}>
                                    <a className="font-weight-bold" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Over Speed</a>
                                </Button>
                            </Col>
                            <Col md="6" xs="12" className="columncenter">
                                <Button href="/highestspeed" className="my-4  shadow" style={{borderRadius:20, borderColor:"rgba(226,228,225,0.08)", backgroundColor:"rgb(255,255,255)",width:"80%"}}>
                                    <a className="font-weight-bold" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Highest Speed</a>
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6" xs="12" className="columncenter">
                                <Button href="/totalideltime" className="my-4  shadow" style={{borderRadius:20, borderColor:"rgba(226,228,225,0.08)", backgroundColor:"rgb(255,255,255)",width:"80%"}}>
                                    <a className="font-weight-bold" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Total Idle Time</a>
                                </Button>
                            </Col>
                            <Col md="6" xs="12" className="columncenter">
                                <Button href="/totalnumberoftrips" className="my-4  shadow" style={{borderRadius:20, borderColor:"rgba(226,228,225,0.08)", backgroundColor:"rgb(255,255,255)",width:"80%"}}>
                                    <a className="font-weight-bold" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Total No Of Trip</a>
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6" xs="12" className="columncenter">
                                <Button href="/totaldistance" className="my-4  shadow" style={{borderRadius:20, borderColor:"rgba(226,228,225,0.08)", backgroundColor:"rgb(255,255,255)",width:"80%"}}>
                                    <a className="font-weight-bold" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Total Distance</a>
                                </Button>
                            </Col>
                            <Col md="6" xs="12" className="columncenter">
                                <Button href="/activityreport" className="my-4  shadow" style={{borderRadius:20, borderColor:"rgba(226,228,225,0.08)", backgroundColor:"rgb(255,255,255)",width:"80%"}}>
                                    <a className="font-weight-bold" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Active Reports</a>
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6" xs="12" className="columncenter">
                                <Button href="/fuelreport" className="my-4  shadow" style={{borderRadius:20, borderColor:"rgba(226,228,225,0.08)", backgroundColor:"rgb(255,255,255)",width:"80%"}}>
                                    <a className="font-weight-bold" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Fuel Report</a>
                                </Button>
                            </Col>
                            <Col md="6" xs="12" className="columncenter">
                                <Button href="/generalsummary" className="my-4  shadow" style={{borderRadius:20, borderColor:"rgba(226,228,225,0.08)", backgroundColor:"rgb(255,255,255)",width:"80%"}}>
                                    <a className="font-weight-bold" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>General Summary</a>
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </>
        );
    }
}

export default VehicleViewComponent;

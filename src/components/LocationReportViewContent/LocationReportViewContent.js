import React from "react";
import {
    Row,Col,Container, Card
} from "reactstrap";
import { Form, Button } from 'react-bootstrap';

import { TextArea } from 'semantic-ui-react'


class CustomerViewContent extends React.Component {

    render() {

        let resumeData = this.props.resumeData;
        return (
            <>

                <Row style={{ marginLeft:"5px",marginRight:"5px"}}>
                    <Col md="12" xs="12">
                        <Row>
                            <Col md="6" xs="12" className="icon-shape">
                                <Button className="my-3 mx-auto shadow" style={{borderRadius:20, borderColor:"rgba(226,228,225,0.08)", backgroundColor:"rgb(255,255,255)", width:"70%"}}>
                                    <a className="font-weight-bold" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Download Report</a>
                                </Button>
                            </Col>
                            <Col md="6" xs="12" className="icon-shape">
                                <Button className="my-3 mx-auto shadow" style={{borderRadius:20, borderColor:"rgba(226,228,225,0.08)", backgroundColor:"rgb(255,255,255)", width:"70%"}}>
                                    <a className="font-weight-bold" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Email the Report</a>
                                </Button>
                            </Col>

                        </Row>
                        <Row>
                            <div className="mx-auto mb-5" style={{ backgroundColor:"#feffff", width:"80%"}}>
                                <div className="mx-auto my-3" style={{ width:"80%"}}>
                                    <Row>
                                        <Col>

                                            <Row>
                                                <Col className="icon-shape" md="2" xs="2">
                                                    <a className="font-weight-bold" style={{fontSize: 15, color:"rgba(10,90,145,0.55)"}}>Location</a>
                                                </Col>
                                                <Col className="icon-shape" md="2" xs="2">
                                                    <a className="font-weight-bold" style={{fontSize: 15, color:"rgba(10,90,145,0.55)"}}>Cusomer ID</a>
                                                </Col>
                                                <Col className="icon-shape" md="2" xs="2">
                                                    <a className="font-weight-bold" style={{fontSize: 15, color:"rgba(10,90,145,0.55)"}}>Vehicle ID</a>
                                                </Col>
                                                <Col className="icon-shape" md="3" xs="3">
                                                    <a className="font-weight-bold" style={{fontSize: 15, color:"rgba(10,90,145,0.55)"}}>Mobile</a>
                                                </Col>
                                                <Col className="icon-shape" md="3" xs="3">
                                                    <a className="font-weight-bold" style={{fontSize: 15, color:"rgba(10,90,145,0.55)"}}>Email</a>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="columncenter" md="2" xs="2">
                                                    <a className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Kalutara</a>
                                                </Col>
                                                <Col className="columncenter" md="2" xs="2">
                                                    <a className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>C12354</a>
                                                </Col>
                                                <Col className="columncenter" md="2" xs="2">
                                                    <a className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>ND1234</a>
                                                </Col>
                                                <Col className="columncenter" md="3" xs="3">
                                                    <a className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>0715757700</a>
                                                </Col>
                                                <Col className="columncenter" md="3" xs="3">
                                                    <a className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>jishanrandika@gmail.com</a>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="columncenter" md="2" xs="2">
                                                    <a className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Kalutara</a>
                                                </Col>
                                                <Col className="columncenter" md="2" xs="2">
                                                    <a className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>C12354</a>
                                                </Col>
                                                <Col className="columncenter" md="2" xs="2">
                                                    <a className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>ND1234</a>
                                                </Col>
                                                <Col className="columncenter" md="3" xs="3">
                                                    <a className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>0715757700</a>
                                                </Col>
                                                <Col className="columncenter" md="3" xs="3">
                                                    <a className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>jishanrandika@gmail.com</a>
                                                </Col>
                                            </Row>


                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </>
        );
    }
}

export default CustomerViewContent;

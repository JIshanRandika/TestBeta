import React from "react";
import {
    Row,Col,Container, Card
} from "reactstrap";
import { Form, Button } from 'react-bootstrap';
import TableComponent from "../TableComponent/TableComponent.js";
import TotalUsersColumnChart from "../TotalUsersColumnChart/TotalUsersColumnChart.js";
import PremiumUserIncomePieChart from "../PremiumUserIncomePieChart/PremiumUserIncomePieChart.js";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor'

class VehicleViewComponent extends React.Component {
    state = {};
    render() {
        let resumeData = this.props.resumeData;
        return (
            <>

                <Row style={{ marginLeft:"5px",marginRight:"5px"}}>
                    <Col md="12" xs="12" >
                        <Row style={{marginTop:"5%"}}>
                            <Col md="1" xs="12">
                            </Col>
                            <Col md="2" xs="12">
                                <Card className="my-2 shadow rounded">
                                    <Container>
                                        <CountUp className="justify-content-center" end={20} redraw={true} >
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor className="justify-content-center" onChange={start} delayedCall>
                                                    <span ref={countUpRef}  className="font-weight-bold text-center "  style={{ color: "#f15e1f",fontSize: 20, marginLeft:"40%" }}/>
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        <p style={{fontSize: 14}} className="text-center">Number of<br/>Customer</p>
                                    </Container>
                                </Card>
                            </Col>
                            <Col md="2" xs="12">
                                <Card className="my-2 shadow rounded">
                                    <Container>
                                        <CountUp className="justify-content-center" end={18} redraw={true} >
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor className="justify-content-center" onChange={start} delayedCall>
                                                    <span ref={countUpRef}  className="font-weight-bold text-center "  style={{ color: "#f15e1f",fontSize: 20, marginLeft:"40%" }}/>
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        <p style={{fontSize: 14}} className="text-center">Number Of<br/>Devices</p>
                                    </Container>
                                </Card>
                            </Col>
                            <Col md="2" xs="12">
                                <Card className="my-2 shadow rounded">
                                    <Container>
                                        <CountUp className="justify-content-center" end={28} redraw={true} >
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor className="justify-content-center" onChange={start} delayedCall>
                                                    <span ref={countUpRef}  className="font-weight-bold text-center "  style={{ color: "#f15e1f",fontSize: 20, marginLeft:"40%" }}/>
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        <p style={{fontSize: 14}} className="text-center">Number Of<br/>Vehicles</p>
                                    </Container>
                                </Card>
                            </Col>
                            <Col md="2" xs="12">
                                <Card className="my-2 shadow rounded">
                                    <Container>
                                        <CountUp className="justify-content-center" end={6} redraw={true} >
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor className="justify-content-center" onChange={start} delayedCall>
                                                    <span ref={countUpRef}  className="font-weight-bold text-center "  style={{ color: "#f15e1f",fontSize: 20, marginLeft:"40%" }}/>
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        <p style={{fontSize: 14}} className="text-center">Not Allocated<br/> Devices</p>
                                    </Container>
                                </Card>
                            </Col>
                            <Col md="2" xs="12">
                                <Card className="my-2 shadow rounded">
                                    <Container>
                                        <CountUp className="justify-content-center" end={16} redraw={true} >
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor className="justify-content-center" onChange={start} delayedCall>
                                                    <span ref={countUpRef}  className="font-weight-bold text-center "  style={{ color: "#f15e1f",fontSize: 20, marginLeft:"40%" }}/>
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        <p style={{fontSize: 14}} className="text-center">Premium <br/> users</p>
                                    </Container>
                                </Card>
                            </Col>
                            <Col md="1" xs="12">
                            </Col>
                        </Row>
                        <Row style={{marginTop:"6%",marginBottom:"20%"}}>
                            <Col md="6" xs="12">
                                <Card className="my-2 shadow rounded" style={{width:"500px",height:"400px"}} >
                                    <TotalUsersColumnChart/>
                                </Card>
                            </Col>
                            <Col md="6" xs="12">
                                <Card className="my-2 shadow rounded" style={{width:"400px",height:"400px", marginLeft:"50px"}}>
                                    <PremiumUserIncomePieChart/>
                                </Card>
                            </Col>
                        </Row>
                        <Row>

                        </Row>
                    </Col>
                </Row>
            </>
        );
    }
}

export default VehicleViewComponent;

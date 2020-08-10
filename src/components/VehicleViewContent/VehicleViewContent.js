import React from "react";
import {
    Row,Col,Container, Card
} from "reactstrap";
import { Form, Button } from 'react-bootstrap';
import TableComponent from "../TableComponent/TableComponent.js";
import MapComponent from "../MapComponent/MapComponent.js";


import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {withStyles} from "@material-ui/core";
import {green} from "@material-ui/core/colors";
import VehicleTable from "../VehicleTable/VehicleTable";

const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

const Dateselecter = ({ value, onClick }) => (
    <button style={{width:"110px", height:"20px", borderColor:"rgb(255,255,255)", backgroundColor:"rgb(255,255,255)", marginLeft:"50px"}} className="example-custom-input font-weight-bold text-left" onClick={onClick}>
        {value}
    </button>
);


class VehicleViewComponent extends React.Component {
    state = {
        DateTo: new Date(),
        DateFrom: new Date()
    };

    DateTo = date => {
        this.setState({
            DateTo: date
        });
    };

    DateFrom = date => {
        this.setState({
            DateFrom: date
        });
    };
    render() {
        let resumeData = this.props.resumeData;
        return (
            <>

                <Row style={{ marginLeft:"5px",marginRight:"5px"}}>
                    <Col md="12" xs="12">
                            <Row>
                                <Col md="3" xs="12">
                                    <Card className="shadow" style={{width:"100%", height:"42px",borderRadius:10, marginTop:"20px"}}>
                                        <Row>
                                            <Col>
                                                <div style={{fontSize: 12, marginTop:"2px", marginBottom:"0px",marginLeft:"50px" }}>
                                                    Customer ID
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <input className="font-weight-bold" style={{fontSize: 12, marginTop:"0px", marginBottom:"1px",marginLeft:"50px",border:"none",width:"110px" }}></input>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                                <Col md="3" xs="12">
                                    <Card className="shadow" style={{width:"100%", height:"42px",borderRadius:10, marginTop:"20px"}}>
                                        <Row>
                                            <Col>
                                                <div style={{fontSize: 12, marginTop:"2px", marginBottom:"0px",marginLeft:"50px" }}>
                                                    Tracker IMB
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <input className="font-weight-bold" style={{fontSize: 12, marginTop:"0px", marginBottom:"1px",marginLeft:"50px",border:"none",width:"110px" }}></input>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                                <Col md="3" xs="12">
                                    <Card className="shadow" style={{width:"100%", height:"42px",borderRadius:10, marginTop:"20px"}}>
                                        <Row>
                                            <Col>
                                                <div style={{fontSize: 12, marginTop:"2px", marginBottom:"0px",marginLeft:"50px" }}>
                                                    Vehicle Reg ID
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <input className="font-weight-bold" style={{fontSize: 12, marginTop:"0px", marginBottom:"1px",marginLeft:"50px",border:"none",width:"110px" }}></input>
                                            </Col>
                                        </Row>
                                    </Card>

                                </Col>
                                <Col md="3" xs="12">
                                    <Card className="shadow" style={{width:"100%", height:"42px",borderRadius:10, marginTop:"20px"}}>
                                        <Row>
                                            <Col>
                                                <div style={{fontSize: 12, marginTop:"2px", marginBottom:"0px",marginLeft:"50px" }}>
                                                    Tracker Type
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <input className="font-weight-bold" style={{fontSize: 12, marginTop:"0px", marginBottom:"1px",marginLeft:"50px",border:"none",width:"110px" }}></input>
                                            </Col>
                                        </Row>
                                    </Card>

                                </Col>

                            </Row>


                        {/*===========*/}
                        <Row>
                            <Col md="3" xs="12">
                                <Card className="shadow" style={{width:"100%", height:"42px",borderRadius:10, marginTop:"20px"}}>
                                    <Row>
                                        <Col>
                                            <div style={{fontSize: 12, marginTop:"2px", marginBottom:"0px",marginLeft:"50px" }}>
                                                Sim ID
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <input className="font-weight-bold" style={{fontSize: 12, marginTop:"0px", marginBottom:"1px",marginLeft:"50px",border:"none",width:"110px" }}></input>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col md="3" xs="12">
                                <Card className="shadow" style={{width:"100%", height:"42px",borderRadius:10, marginTop:"20px"}}>
                                    <Row>
                                        <Col>
                                            <Row>
                                                <Col>
                                                    <div style={{fontSize: 12, marginTop:"2px", marginBottom:"0px",marginLeft:"50px" }}>
                                                        Type
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <input className="font-weight-bold" style={{fontSize: 12, marginTop:"0px", marginBottom:"1px",marginLeft:"50px",border:"none",width:"110px" }}></input>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col>
                                            <img
                                                // className=""
                                                style={{marginTop:"10px",marginLeft:"40px"}}
                                                alt="..."
                                                src={("img/Vehicle/car.png")}
                                                width="30px"
                                                height="30px"
                                            />
                                        </Col>
                                    </Row>


                                </Card>
                            </Col>
                            <Col md="3" xs="12">
                                <Card className="shadow" style={{width:"100%", height:"42px",borderRadius:10, marginTop:"20px"}}>
                                    <Row>
                                        <Col>
                                            <div style={{fontSize: 12, marginTop:"2px", marginBottom:"0px",marginLeft:"50px" }}>
                                                Group
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <input className="font-weight-bold" style={{fontSize: 12, marginTop:"0px", marginBottom:"1px",marginLeft:"50px",border:"none",width:"110px" }}></input>
                                        </Col>
                                    </Row>
                                </Card>

                            </Col>
                            <Col md="3" xs="12">
                                <Card className="shadow" style={{width:"100%", height:"42px",borderRadius:10, marginTop:"20px"}}>
                                    <Row>
                                        <Col>
                                            <div style={{fontSize: 12, marginTop:"2px", marginBottom:"0px",marginLeft:"50px" }}>
                                                Speed Limit(Kmph)
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <input className="font-weight-bold" style={{fontSize: 12, marginTop:"0px", marginBottom:"1px",marginLeft:"50px",border:"none",width:"110px" }}></input>
                                        </Col>
                                    </Row>
                                </Card>

                            </Col>

                        </Row>

                        {/*======================*/}
                        <Row>
                            <Col md="3" xs="12">
                                <Card className="shadow" style={{width:"100%", height:"42px",borderRadius:10, marginTop:"20px"}}>
                                    <Row>
                                        <Col>
                                            <div style={{fontSize: 12, marginTop:"2px", marginBottom:"0px",marginLeft:"50px" }}>
                                                Fuel Capacity(L)
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <input className="font-weight-bold" style={{fontSize: 12, marginTop:"0px", marginBottom:"1px",marginLeft:"50px",border:"none",width:"110px" }}></input>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col md="3" xs="12">
                                <Card className="shadow" style={{width:"100%", height:"42px",borderRadius:10, marginTop:"20px"}}>
                                    <Row>
                                        <Col>
                                            <div style={{fontSize: 12, marginTop:"2px", marginBottom:"0px",marginLeft:"50px" }}>
                                                Vehicle Make
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <input className="font-weight-bold" style={{fontSize: 12, marginTop:"0px", marginBottom:"1px",marginLeft:"50px",border:"none",width:"110px" }}></input>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col md="3" xs="12">
                                <Card className="shadow" style={{width:"100%", height:"42px",borderRadius:10, marginTop:"20px"}}>
                                    <Row>
                                        <Col className="">
                                            <div style={{fontSize: 12, marginTop:"10px", marginBottom:"0px",marginLeft:"40px", width:"50px" }}>
                                                Geozone
                                            </div>
                                        </Col>
                                        <Col className="mr-5">
                                            <Button className="" style={{fontSize: 8,borderRadius:10, borderColor:"rgb(10,90,145)", backgroundColor:"rgb(10,90,145)", width:"100px",marginTop:"8px"}}>
                                                Choose Geozone
                                            </Button>
                                        </Col>
                                    </Row>
                                    {/*<Row>*/}
                                    {/*    <Col>*/}
                                    {/*        <input className="font-weight-bold" style={{fontSize: 12, marginTop:"0px", marginBottom:"1px",marginLeft:"50px",border:"none",width:"110px" }}></input>*/}
                                    {/*    </Col>*/}
                                    {/*</Row>*/}
                                </Card>

                            </Col>
                            <Col md="3" xs="12">
                            </Col>

                        </Row>

                        <Container style={{marginTop:"5%" }} className=" ">
                            <Row className="">
                                <Col md="3" xs="6">
                                </Col>
                                <Col md="2" xs="6">
                                    <Button className="my-2"  style={{borderColor:"rgb(0,4,255)", backgroundColor:"rgb(0,4,255)",width:"80%"}}>
                                        Add
                                    </Button>
                                </Col>
                                <Col md="2" xs="6">
                                    <Button className="my-2" style={{borderColor:"rgb(106,162,70)", backgroundColor:"rgb(106,162,70)",width:"80%"}}>
                                        Update
                                    </Button>
                                </Col>
                                <Col md="2" xs="6">
                                    <Button className="my-2" style={{borderColor:"rgb(255,106,107)", backgroundColor:"rgb(255,106,107)",width:"80%"}}>
                                        Delete
                                    </Button>
                                </Col>
                                <Col md="3" xs="6">
                                </Col>
                            </Row>
                        </Container>



                            <Row style={{marginTop:"0%"}}>

                                <Container>
                                    <Row>
                                        <Col md="12" xs="12">
                                            <Card className="shadow pb-3" style={{}}>
                                                <Row style={{ marginTop:"10px"}}>
                                                    <Col md="2" xs="12">
                                                        <div style={{fontSize: 15, marginTop:"5px", marginBottom:"3px",marginLeft:"45px" }}>
                                                            Vehicle Table
                                                        </div>
                                                    </Col>
                                                    <Col md="6" xs="12">
                                                    </Col>
                                                    <Col md="4" xs="12">
                                                        <Card className="shadow" style={{width:"80%", height:"32px",borderRadius:10, marginRight:"20px"}}>

                                                            <Row>
                                                                <Col>
                                                                    <img
                                                                        className="icon-shape mx-auto"
                                                                        // style={{marginLeft:"25px",marginTop:"10px"}}
                                                                        alt="..."
                                                                        src={("img/search.png")}
                                                                        width="40px"
                                                                        height="40px"
                                                                    />
                                                                </Col>
                                                                <Col>
                                                                    <input className="font-weight-bold" style={{fontSize: 12, marginTop:"4px", marginBottom:"1px",marginLeft:"-82px",width:"150%",border:"none" }}></input>
                                                                </Col>
                                                            </Row>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md="12" xs="12" style={{marginTop:"10px"}}>
                                                        <VehicleTable/>
                                                    </Col>
                                                </Row>

                                            </Card>
                                        </Col>
                                    </Row>
                                </Container>
                            </Row>
                    </Col>
                </Row>
            </>
        );
    }
}

export default VehicleViewComponent;

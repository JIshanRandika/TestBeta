import React from "react";
import {
    Row,Col,Container, Card
} from "reactstrap";
import { Form, Button } from 'react-bootstrap';
import DateRangePicker from '../DateRangePicker/DateRangePicker.js';
// import { Checkbox, CheckboxGroup } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';


import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {withStyles} from "@material-ui/core";
import {green} from "@material-ui/core/colors";

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
    <button style={{width:"200px", height:"20px", borderColor:"rgb(255,255,255)", backgroundColor:"rgb(255,255,255)", marginLeft:"50px"}} className="example-custom-input font-weight-bold text-left" onClick={onClick}>
        {value}
    </button>
);


class GeneralSummaryViewContent extends React.Component {
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
                            <div className="mx-auto" style={{ backgroundColor:"#feffff", width:"80%"}}>
                                <div className="mx-auto my-3" style={{ width:"80%"}}>
                                    <Row>
                                        <Col>
                                            <Row>
                                                <Col md="6" xs="12">
                                                    <Card className="shadow" style={{width:"100%", height:"42px",borderRadius:10, marginTop:"20px"}}>
                                                        <Row>
                                                            <Col>
                                                                <div style={{fontSize: 12, marginTop:"2px", marginBottom:"0px",marginLeft:"50px" }}>
                                                                    From
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col>

                                                                <DatePicker
                                                                    selected={this.state.DateFrom}
                                                                    onChange={this.DateFrom}
                                                                    style={{border:"none",}}
                                                                    isClearable
                                                                    placeholderText="From"
                                                                    customInput={<Dateselecter />}
                                                                />
                                                                {/*<input className="font-weight-bold" style={{fontSize: 12, marginTop:"0px", marginBottom:"1px",marginLeft:"35px",border:"none",width:"70%" }}></input>*/}
                                                            </Col>
                                                        </Row>
                                                    </Card>
                                                </Col>
                                                <Col md="6" xs="12">
                                                    <Card className="shadow" style={{width:"100%", height:"42px",borderRadius:10, marginTop:"20px"}}>
                                                        <Row>
                                                            <Col>
                                                                <div style={{fontSize: 12, marginTop:"2px", marginBottom:"0px",marginLeft:"50px" }}>
                                                                    To
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col>

                                                                <DatePicker
                                                                    selected={this.state.DateTo}
                                                                    onChange={this.DateTo}
                                                                    style={{border:"none",}}
                                                                    isClearable
                                                                    placeholderText="From"
                                                                    customInput={<Dateselecter />}
                                                                />
                                                                {/*<input className="font-weight-bold" style={{fontSize: 12, marginTop:"0px", marginBottom:"1px",marginLeft:"35px",border:"none",width:"70%" }}></input>*/}
                                                            </Col>
                                                        </Row>
                                                    </Card>
                                                </Col>




                                                {/*<Card className="mt-4 mx-auto shadow" style={{borderRadius:20, borderColor:"rgba(226,228,225,0.08)", backgroundColor:"rgb(255,255,255)", width:"70%"}}>*/}
                                                {/*    <DateRangePicker/>*/}
                                                {/*</Card>*/}
                                            </Row>
                                            <Row>
                                                <Col className="icon-shape" md="12" xs="12">


                                                    <div className="">
                                                        {/*<Checkbox> Select All Data</Checkbox>*/}
                                                        <FormControlLabel
                                                            control={<GreenCheckbox  name="checkedG" />}
                                                            label="Select All Data"
                                                        />
                                                    </div>
                                                </Col>
                                            </Row>

                                            {/*<Row>*/}
                                            {/*    <Card className="mt-4 mx-auto shadow" style={{borderRadius:20, borderColor:"rgba(226,228,225,0.08)", backgroundColor:"rgb(255,255,255)", width:"70%"}}>*/}
                                            {/*        <DateRangePicker/>*/}
                                            {/*    </Card>*/}
                                            {/*</Row>*/}
                                            {/*<Row>*/}
                                            {/*    <Col className="icon-shape" md="12" xs="12">*/}
                                            {/*        <div className="">*/}
                                            {/*            <Checkbox> Select All Data</Checkbox>*/}
                                            {/*        </div>*/}
                                            {/*    </Col>*/}
                                            {/*</Row>*/}
                                            <Row>
                                                <Col className="icon-shape" md="12" xs="12">
                                                    <p className="font-weight-bold icon-shape" style={{fontSize: 15, color:"rgba(255,147,0,0.78)"}}>2020/01/01</p>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col md="8" xs="12">
                                                    <p className="font-weight-bold" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Today Active Users</p>
                                                </Col>
                                                <Col md="4" xs="12">
                                                    <p className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>16</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="8" xs="12">
                                                    <p className="font-weight-bold" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Today New Users</p>
                                                </Col>
                                                <Col md="4" xs="12">
                                                    <p className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>16</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="8" xs="12">
                                                    <p className="font-weight-bold" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Max Distance Vehicle</p>
                                                </Col>
                                                <Col md="4" xs="12">
                                                    <p className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>ND1234(10000Km)</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="8" xs="12">
                                                    <p className="font-weight-bold" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Max Fuel Consumption Vehicle</p>
                                                </Col>
                                                <Col md="4" xs="12">
                                                    <p className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>ND1234(1000L)</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="8" xs="12">
                                                    <p className="font-weight-bold" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Average Highest Speed Vehicle</p>
                                                </Col>
                                                <Col md="4" xs="12">
                                                    <p className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>ND1234(100kmph)</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="8" xs="12">
                                                    <p className="font-weight-bold" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Max Idle Time Vehicle</p>
                                                </Col>
                                                <Col md="4" xs="12">
                                                    <p className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>ND1234(58hr 26min)</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="8" xs="12">
                                                    <p className="font-weight-bold" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Max No of Vehicle Geozone</p>
                                                </Col>
                                                <Col md="4" xs="12">
                                                    <p className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Kalutara</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="8" xs="12">
                                                    <p className="font-weight-bold" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Min No of Vehicle Geozone</p>
                                                </Col>
                                                <Col md="4" xs="12">
                                                    <p className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Galle</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="8" xs="12">
                                                    <p className="font-weight-bold" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Number of Renewal Devices</p>
                                                </Col>
                                                <Col md="4" xs="12">
                                                    <p className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>1253</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="8" xs="12">
                                                    <p className="font-weight-bold" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Maximum Number of Trips</p>
                                                </Col>
                                                <Col md="4" xs="12">
                                                    <p className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>ND1234(80)</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="8" xs="12">
                                                    <p className="font-weight-bold" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Sales</p>
                                                </Col>
                                                <Col md="4" xs="12">
                                                    <p className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>120214LKR</p>
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

export default GeneralSummaryViewContent;

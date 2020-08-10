import React from "react";
import {
    Row,Col,Container, Card
} from "reactstrap";
import { Form, Button } from 'react-bootstrap';
import DateRangePicker from '../DateRangePicker/DateRangePicker.js';
// import { Checkbox, CheckboxGroup } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import TextField from "@material-ui/core/TextField/TextField";


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
    <button style={{width:"110px", height:"20px", borderColor:"rgb(255,255,255)", backgroundColor:"rgb(255,255,255)", marginLeft:"50px"}} className="example-custom-input font-weight-bold text-left" onClick={onClick}>
        {value}
    </button>
);

class FuelReportContent extends React.Component {
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
                                                    <p className="font-weight-bold" style={{fontSize: 15, color:"rgba(10,90,145,0.78)"}}></p>
                                                </Col>
                                                <Col md="2" xs="12">
                                                    <p className="font-weight-bold" style={{fontSize: 15, color:"rgba(10,90,145,0.55)"}}>Vehicle ID</p>
                                                </Col>
                                                <Col md="2" xs="12">
                                                    <p className="font-weight-bold" style={{fontSize: 15, color:"rgba(10,90,145,0.55)"}}>Amount(L)</p>
                                                </Col>
                                                <Col md="2" xs="12">
                                                    <p className="font-weight-bold" style={{fontSize: 15, color:"rgba(10,90,145,0.55)"}}>Cost(LKR)</p>
                                                </Col>
                                            </Row>



                                            <Row>
                                                <Col md="6" xs="12">
                                                    <p className="font-weight-bold" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Maximum Fuel Consumption-last 24hr</p>
                                                </Col>
                                                <Col md="2" xs="12">
                                                    <p className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>ND1234</p>
                                                </Col>
                                                <Col md="2" xs="12">
                                                    <p className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>16</p>
                                                </Col>
                                                <Col md="2" xs="12">
                                                    <p className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>200</p>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col md="6" xs="12">
                                                    <p className="font-weight-bold" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Minimum Fuel Consumption-last 24hr</p>
                                                </Col>
                                                <Col md="2" xs="12">
                                                    <p className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>ND1234</p>
                                                </Col>
                                                <Col md="2" xs="12">
                                                    <p className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>16</p>
                                                </Col>
                                                <Col md="2" xs="12">
                                                    <p className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>200</p>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col md="6" xs="12">
                                                    <p className="font-weight-bold" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Maximum Fuel Consumption-last 7 days</p>
                                                </Col>
                                                <Col md="2" xs="12">
                                                    <p className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>ND1234</p>
                                                </Col>
                                                <Col md="2" xs="12">
                                                    <p className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>16</p>
                                                </Col>
                                                <Col md="2" xs="12">
                                                    <p className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>200</p>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col md="6" xs="12">
                                                    <p className="font-weight-bold" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Minimum Fuel Consumption-last 7 days</p>
                                                </Col>
                                                <Col md="2" xs="12">
                                                    <p className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>ND1234</p>
                                                </Col>
                                                <Col md="2" xs="12">
                                                    <p className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>16</p>
                                                </Col>
                                                <Col md="2" xs="12">
                                                    <p className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>200</p>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col md="6" xs="12">
                                                    <p className="font-weight-bold" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Maximum Fuel Consumption-last 30 days</p>
                                                </Col>
                                                <Col md="2" xs="12">
                                                    <p className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>ND1234</p>
                                                </Col>
                                                <Col md="2" xs="12">
                                                    <p className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>16</p>
                                                </Col>
                                                <Col md="2" xs="12">
                                                    <p className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>200</p>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col md="6" xs="12">
                                                    <p className="font-weight-bold" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Minimum Fuel Consumption-last 30 days</p>
                                                </Col>
                                                <Col md="2" xs="12">
                                                    <p className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>ND1234</p>
                                                </Col>
                                                <Col md="2" xs="12">
                                                    <p className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>16</p>
                                                </Col>
                                                <Col md="2" xs="12">
                                                    <p className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>200</p>
                                                </Col>
                                            </Row>


                                        </Col>
                                    </Row>


                                    <Row>
                                        <Col md="4" xs="12">
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
                                        <Col md="4" xs="12">
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
                                                    </Col>
                                                </Row>
                                            </Card>
                                        </Col>
                                        <Col md="4" xs="12">
                                            <Card className="shadow" style={{width:"100%", height:"42px",borderRadius:10, marginTop:"20px"}}>
                                                <Row>
                                                    <Col>
                                                        <div style={{fontSize: 12, marginTop:"2px", marginBottom:"0px",marginLeft:"50px" }}>
                                                            Vehicle ID
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
                                    {/*    <Col className="icon-shape" md="6" xs="12">*/}
                                    {/*        <div className="icon-shape">*/}
                                    {/*            <Checkbox> Select All Data</Checkbox>*/}
                                    {/*        </div>*/}
                                    {/*    </Col>*/}
                                    {/*    <Col className="icon-shape" md="6" xs="12">*/}
                                    {/*        <form  noValidate autoComplete="off" style={{fontSize: 15,}}>*/}
                                    {/*            <TextField id="standard-basic" label="Vehicle ID" />*/}
                                    {/*        </form>*/}
                                    {/*    </Col>*/}
                                    {/*</Row>*/}
                                    <Row>
                                        <Col>
                                            <Row>
                                                <Col className="icon-shape" md="4" xs="4">
                                                    <a className="font-weight-bold" style={{fontSize: 15, color:"rgba(10,90,145,0.55)"}}>Date</a>
                                                </Col>
                                                <Col className="icon-shape" md="4" xs="4">
                                                    <a className="font-weight-bold" style={{fontSize: 15, color:"rgba(10,90,145,0.55)"}}>Amount</a>
                                                </Col>
                                                <Col className="icon-shape" md="4" xs="4">
                                                    <a className="font-weight-bold" style={{fontSize: 15, color:"rgba(10,90,145,0.55)"}}>Cost(LKR)</a>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="columncenter" md="4" xs="4">
                                                    <a className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>2020/01/01</a>
                                                </Col>
                                                <Col className="columncenter" md="4" xs="4">
                                                    <a className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>16</a>
                                                </Col>
                                                <Col className="columncenter" md="4" xs="4">
                                                    <a className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>16</a>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="columncenter" md="4" xs="4">
                                                    <a className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>2020/01/01</a>
                                                </Col>
                                                <Col className="columncenter" md="4" xs="4">
                                                    <a className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>16</a>
                                                </Col>
                                                <Col className="columncenter" md="4" xs="4">
                                                    <a className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>16</a>
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

export default FuelReportContent;

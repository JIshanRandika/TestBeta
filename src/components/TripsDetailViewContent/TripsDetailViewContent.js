import React from "react";
import {
    Row,Col,Container, Card
} from "reactstrap";
import { Form, Button } from 'react-bootstrap';
import DateRangePicker from '../DateRangePicker/DateRangePicker.js';
// import { Checkbox, CheckboxGroup } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
// import './NumberOfUsersViewContent.css'

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

class TripsDetailViewContent extends React.Component {
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
                                                <Col md="8" xs="12">
                                                    <p className="font-weight-bold" style={{fontSize: 15, color:"rgba(255,76,182,0.78)"}}>Trip1 (Kalutara to Kandy)</p>
                                                </Col>
                                                <Col md="4" xs="12">
                                                    {/*<p className="" style={{fontSize: 15, color:"rgba(255,76,182,0.55)"}}>12350</p>*/}
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col md="8" xs="12">
                                                    <p className="font-weight-bold" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Mileage</p>
                                                </Col>
                                                <Col md="4" xs="12">
                                                    <p className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>20Km</p>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col md="8" xs="12">
                                                    <p className="font-weight-bold" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Heighest Speed</p>
                                                </Col>
                                                <Col md="4" xs="12">
                                                    <p className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>20Kmph</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="8" xs="12">
                                                    <p className="font-weight-bold" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Average Speed</p>
                                                </Col>
                                                <Col md="4" xs="12">
                                                    <p className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>20Kmph</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="8" xs="12">
                                                    <p className="font-weight-bold" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Idle Time</p>
                                                </Col>
                                                <Col md="4" xs="12">
                                                    <p className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>20hr 20min</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="8" xs="12">
                                                    <p className="font-weight-bold" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Total Time</p>
                                                </Col>
                                                <Col md="4" xs="12">
                                                    <p className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>20hr 20min</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="8" xs="12">
                                                    <p className="font-weight-bold" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Start Time</p>
                                                </Col>
                                                <Col md="4" xs="12">
                                                    <p className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>20:14:26</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="8" xs="12">
                                                    <p className="font-weight-bold" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>End Time</p>
                                                </Col>
                                                <Col md="4" xs="12">
                                                    <p className="" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>20:14:26</p>
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

export default TripsDetailViewContent;

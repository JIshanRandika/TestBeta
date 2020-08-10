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
    <button style={{width:"150px", height:"20px", borderColor:"rgb(255,255,255)", backgroundColor:"rgb(255,255,255)", marginLeft:"-55%"}} className="example-custom-input font-weight-bold text-left" onClick={onClick}>
        {value}
    </button>
);

class ActivityReportViewContent extends React.Component {
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
                    <Col md="12" xs="12" >
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
                        {/*<Row>*/}
                        {/*    <Card className="mt-4 mx-auto shadow" style={{borderRadius:20, borderColor:"rgba(226,228,225,0.08)", backgroundColor:"rgb(255,255,255)"}}>*/}
                        {/*        <DateRangePicker/>*/}
                        {/*    </Card>*/}

                        {/*</Row>*/}

                        <Row>
                            <Col md="6" xs="12" className="columncenter">
                                <Card className="shadow" style={{width:"72%", height:"42px",borderRadius:10, marginTop:"20px"}}>
                                    <Row>
                                        <Col>
                                            <div style={{fontSize: 12, marginTop:"2px", marginBottom:"0px",marginLeft:"-60%" }}>
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
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col md="6" xs="12" className="columncenter">
                                <Card className="shadow" style={{width:"72%", height:"42px",borderRadius:10, marginTop:"20px"}}>
                                    <Row>
                                        <Col>
                                            <div style={{fontSize: 12, marginTop:"2px", marginBottom:"0px",marginLeft:"-65%" }}>
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

                        </Row>

                        <Row>

                            <div className="mx-auto mb-5" style={{ backgroundColor:"#feffff", width:"80%"}}>

                            </div>
                        </Row>
                    </Col>
                </Row>
            </>
        );
    }
}

export default ActivityReportViewContent;

import React from "react";
import {
    Row,Col,Container, Card
} from "reactstrap";
import { Form, Button } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { TextArea } from 'semantic-ui-react'

const Dateselecter = ({ value, onClick }) => (
    <button style={{width:"150px", height:"20px", borderColor:"rgb(255,255,255)", backgroundColor:"rgb(255,255,255)", marginLeft:"25px"}} className="example-custom-input font-weight-bold text-left" onClick={onClick}>
        {value}
    </button>
);

class PaymentsViewContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.name === 'isGoing' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }


    state = {
        PckagePaymentTo: new Date(),
        PckagePaymentFrom: new Date()
    };

    PckagePaymentTo = date => {
        this.setState({
            PckagePaymentTo: date
        });
    };

    PckagePaymentFrom = date => {
        this.setState({
            PckagePaymentFrom: date
        });
    };
    render() {



        let resumeData = this.props.resumeData;
        return (
            <>

                <Row style={{ marginLeft:"5px",marginRight:"5px"}}>
                    <Col md="12" xs="12">

                        <Row>
                            <p style={{fontSize: 15, marginTop:"10px", marginLeft:"5%", }} className="  font-weight-bold   ">
                                Common Subscription Period
                            </p>
                        </Row>
                        <Row>
                            <Col md="12" xs="12" className="columncenter">
                                <Card className="my-2 pb-3 pt-4 shadow rounded" style={{width:"80%"}}>
                                    <Row>
                                        <Col md="2" xs="12" >
                                        </Col>
                                        <Col md="4" xs="12" >
                                            <p style={{fontSize: 15, marginTop:"10px", marginLeft:"5%",color:"rgba(0,64,255,0.55)" }} className="  font-weight-bold   ">
                                                Silver Package
                                            </p>
                                        </Col>
                                        <Col md="4" xs="12" style={{marginBottom:"10px"}}>
                                                {/*<TextField id="standard-basic" label="Number of dates" />*/}
                                            <Card className="shadow" style={{width:"100%", height:"42px",borderRadius:10,}}>
                                                <Row>
                                                    <Col>
                                                        <div style={{fontSize: 12, marginTop:"2px", marginBottom:"0px",marginLeft:"-65px" }}>
                                                            Number of Dates
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <input className="font-weight-bold" style={{fontSize: 12, marginTop:"0px", marginBottom:"1px",marginLeft:"35px",border:"none",width:"70%" }}></input>
                                                    </Col>
                                                </Row>
                                            </Card>
                                        </Col>
                                        <Col md="2" xs="12" >
                                        </Col>

                                    </Row>

                                    <Row>
                                        <Col md="2" xs="12" >
                                        </Col>
                                        <Col md="4" xs="12" >
                                            <p style={{fontSize: 15, marginTop:"10px", marginLeft:"5%",color:"rgba(0,64,255,0.55)" }} className="  font-weight-bold   ">
                                                Silver Package
                                            </p>
                                        </Col>
                                        <Col md="4" xs="12" style={{marginBottom:"10px"}}>
                                            {/*<TextField id="standard-basic" label="Number of dates" />*/}
                                            <Card className="shadow" style={{width:"100%", height:"42px",borderRadius:10,}}>
                                                <Row>
                                                    <Col>
                                                        <div style={{fontSize: 12, marginTop:"2px", marginBottom:"0px",marginLeft:"-65px" }}>
                                                            Number of Dates
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <input className="font-weight-bold" style={{fontSize: 12, marginTop:"0px", marginBottom:"1px",marginLeft:"35px",border:"none",width:"70%" }}></input>
                                                    </Col>
                                                </Row>
                                            </Card>
                                        </Col>
                                        <Col md="2" xs="12" >
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col md="2" xs="12" >
                                        </Col>
                                        <Col md="4" xs="12" >
                                            <p style={{fontSize: 15, marginTop:"10px", marginLeft:"5%",color:"rgba(0,64,255,0.55)" }} className="  font-weight-bold   ">
                                                Silver Package
                                            </p>
                                        </Col>
                                        <Col md="4" xs="12" >
                                            {/*<TextField id="standard-basic" label="Number of dates" />*/}
                                            <Card className="shadow" style={{width:"100%", height:"42px",borderRadius:10,}}>
                                                <Row>
                                                    <Col>
                                                        <div style={{fontSize: 12, marginTop:"2px", marginBottom:"0px",marginLeft:"-65px" }}>
                                                            Number of Dates
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <input className="font-weight-bold" style={{fontSize: 12, marginTop:"0px", marginBottom:"1px",marginLeft:"35px",border:"none",width:"70%" }}></input>
                                                    </Col>
                                                </Row>
                                            </Card>
                                        </Col>
                                        <Col md="2" xs="12" >
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col md="5" xs="12" >
                                        </Col>
                                        <Col md="5" xs="12">

                                        </Col>
                                        <Col md="2" xs="12" >
                                            <Button className="my-3 " style={{borderColor:"rgb(255,99,84)", backgroundColor:"rgb(255,99,84)"}}>
                                                Save
                                            </Button>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>


                        <Row>
                            <p style={{fontSize: 15, marginTop:"10px", marginLeft:"5%", }} className="  font-weight-bold   ">
                                Subscription Period According to Customer
                            </p>
                        </Row>


                        <Row>
                            <Col md="5" xs="12" >
                                {/*<Card className="my-2 shadow rounded " style={{marginLeft:"25%",marginRight:"100px" }}>*/}
                                {/*    <Container>*/}
                                {/*        <form  noValidate autoComplete="off" style={{fontSize: 15, marginTop:"10px", marginBottom:"5%", }}>*/}
                                {/*            <TextField id="standard-basic" label="Customer ID" />*/}
                                {/*        </form>*/}
                                {/*    </Container>*/}
                                {/*</Card>*/}

                                <Card className="shadow" style={{width:"220px", height:"52px",borderRadius:10, marginLeft:"95px", marginBottom:"5px", marginTop:"10px"}}>
                                    <Row>
                                        <Col>
                                            <div style={{fontSize: 12, marginTop:"2px", marginBottom:"0px",marginLeft:"45px" }}>
                                                Customer ID
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>

                                        <Col>

                                            <input className="font-weight-bold" style={{fontSize: 12, marginTop:"4px", marginBottom:"1px",marginLeft:"45px",width:"120px" ,border:"none"}}></input>
                                        </Col>
                                        <Col style={{marginRight:"-70px",marginTop:"-10px"}}>
                                            <img
                                                className="icon-shape"
                                                style={{marginRight:"-25px"}}
                                                alt="..."
                                                src={("img/search.png")}
                                                width="50px"
                                                height="50px"
                                            />
                                        </Col>
                                    </Row>
                                </Card>

                            </Col>
                            <Col md="5" xs="12">

                            </Col>
                            <Col md="2" xs="12" >
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12" xs="12" className="columncenter">
                                <Card className="my-2 pb-3 pt-4 shadow rounded" style={{width:"80%"}}>
                                    <Row>
                                        <Col md="4" xs="12" >
                                            <p style={{fontSize: 15, marginTop:"10px", marginLeft:"5%",color:"rgba(255,0,84,0.55)" }} className="  font-weight-bold   ">
                                                Package Payment
                                            </p>
                                        </Col>
                                        <Col md="4" xs="12" >
                                            {/*<TextField id="standard-basic" label="From" />*/}
                                            <Card className="shadow" style={{width:"100%", height:"42px",borderRadius:10,}}>
                                                <Row>
                                                    <Col>
                                                        <div style={{fontSize: 12, marginTop:"2px", marginBottom:"0px",marginLeft:"-95px" }}>
                                                            From
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>

                                                        <DatePicker
                                                            selected={this.state.PckagePaymentFrom}
                                                            onChange={this.PckagePaymentFrom}
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
                                        <Col md="4" xs="12" >
                                            {/*<TextField id="standard-basic" label="To" />*/}

                                            <Card className="shadow" style={{width:"100%", height:"42px",borderRadius:10, marginLeft:"-20px"}}>
                                                <Row>
                                                    <Col>
                                                        <div style={{fontSize: 12, marginTop:"2px", marginBottom:"0px",marginLeft:"-95px" }}>
                                                            To
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>

                                                        <DatePicker
                                                            selected={this.state.PckagePaymentTo}
                                                            onChange={this.PckagePaymentTo}
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
                                    </Row>
                                    <Row>
                                        <Col md="4" xs="12" >
                                            <p style={{fontSize: 15, marginTop:"10px", marginLeft:"5%",color:"rgba(0,64,255,0.55)" }} className="  font-weight-bold   ">
                                                Tk100
                                            </p>
                                        </Col>
                                        <Col md="4" xs="12" >
                                            {/*<TextField id="standard-basic" label="From" />*/}
                                            <Card className="shadow" style={{width:"100%", height:"42px",borderRadius:10, marginTop:"10px"}}>
                                                <Row>
                                                    <Col>
                                                        <div style={{fontSize: 12, marginTop:"2px", marginBottom:"0px",marginLeft:"-95px" }}>
                                                            From
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>

                                                        <DatePicker
                                                            selected={this.state.PckagePaymentFrom}
                                                            onChange={this.PckagePaymentFrom}
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
                                        <Col md="4" xs="12" >
                                            {/*<TextField id="standard-basic" label="To" />*/}
                                            <Card className="shadow" style={{width:"100%", height:"42px",borderRadius:10, marginLeft:"-20px", marginTop:"10px"}}>
                                                <Row>
                                                    <Col>
                                                        <div style={{fontSize: 12, marginTop:"2px", marginBottom:"0px",marginLeft:"-95px" }}>
                                                            To
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>

                                                        <DatePicker
                                                            selected={this.state.PckagePaymentTo}
                                                            onChange={this.PckagePaymentTo}
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
                                    </Row>
                                    <Row>
                                        <Col md="4" xs="12" >
                                            <p style={{fontSize: 15, marginTop:"10px", marginLeft:"5%",color:"rgba(0,64,255,0.55)" }} className="  font-weight-bold   ">
                                                G05 Payment
                                            </p>
                                        </Col>
                                        <Col md="4" xs="12" >
                                            {/*<TextField id="standard-basic" label="From" />*/}
                                            <Card className="shadow" style={{width:"100%", height:"42px",borderRadius:10, marginTop:"10px"}}>
                                                <Row>
                                                    <Col>
                                                        <div style={{fontSize: 12, marginTop:"2px", marginBottom:"0px",marginLeft:"-95px" }}>
                                                            From
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>

                                                        <DatePicker
                                                            selected={this.state.PckagePaymentFrom}
                                                            onChange={this.PckagePaymentFrom}
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
                                        <Col md="4" xs="12" >
                                            {/*<TextField id="standard-basic" label="To" />*/}
                                            <Card className="shadow" style={{width:"100%", height:"42px",borderRadius:10, marginLeft:"-20px", marginTop:"10px"}}>
                                                <Row>
                                                    <Col>
                                                        <div style={{fontSize: 12, marginTop:"2px", marginBottom:"0px",marginLeft:"-95px" }}>
                                                            To
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>

                                                        <DatePicker
                                                            selected={this.state.PckagePaymentTo}
                                                            onChange={this.PckagePaymentTo}
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
                                    </Row>

                                    <Row>
                                        <Col md="5" xs="12" >
                                        </Col>
                                        <Col md="5" xs="12">

                                        </Col>
                                        <Col md="2" xs="12" >
                                            <Button className="my-3 " style={{borderColor:"rgb(255,99,84)", backgroundColor:"rgb(255,99,84)"}}>
                                                Save
                                            </Button>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </>
        );
    }
}

export default PaymentsViewContent;

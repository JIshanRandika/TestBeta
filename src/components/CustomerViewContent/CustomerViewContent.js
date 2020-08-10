import React from "react";
import {
    Row,Col,Container, Card
} from "reactstrap";
import { Form, Button } from 'react-bootstrap';
import TableComponent from "../TableComponent/TableComponent.js";
import CustomerViewTab from "../CustomerViewTab/CustomerViewTab.js";
import {Toggle} from "rsuite";
import UserTable from "../UserTable/UserTable";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";

import Checkbox from '@material-ui/core/Checkbox';
import {green} from "@material-ui/core/colors";
import {withStyles} from "@material-ui/core";
import CustomerTable from "../CustomerTable/CustomerTable.js";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './CustomerViewContent.css'


const GreenCheckbox = withStyles({
    root: {
        // color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Checkbox style={{marginLeft:"0px"}} color="default" {...props} />);

class CustomerViewContent extends React.Component {
    state = {};
    render() {
        let resumeData = this.props.resumeData;
        return (
            <>

                <Row style={{ marginLeft:"5px",marginRight:"5px"}}>
                    <Col md="12" xs="12" >
                        <Row >
                            <Col md="2" xs="12" >
                            </Col>
                            <Col md="4" xs="12" className="mb-3">
                                <Card className="shadow" style={{width:"100%", height:"42px",borderRadius:10,}}>
                                    <Row>
                                        <Col>
                                            <div style={{fontSize: 12, marginTop:"2px", marginBottom:"0px",marginLeft:"45px" }}>
                                                First Name
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <input className="font-weight-bold" style={{fontSize: 12, marginTop:"0px", marginBottom:"1px",marginLeft:"45px",border:"none",width:"70%" }}></input>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col md="4" xs="12" className="mb-3">
                                <Card className="shadow" style={{width:"100%", height:"42px",borderRadius:10,}}>
                                    <Row>
                                        <Col>
                                            <div style={{fontSize: 12, marginTop:"2px", marginBottom:"0px",marginLeft:"45px" }}>
                                                Last Name
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <input className="font-weight-bold" style={{fontSize: 12, marginTop:"0px", marginBottom:"1px",marginLeft:"45px",border:"none",width:"70%" }}></input>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col md="2" xs="12" >
                            </Col>
                        </Row>


                        <Row >
                            <Col md="2" xs="12" >
                            </Col>
                            <Col md="4" xs="12" className="mb-3">
                                <Card className="shadow" style={{width:"100%", height:"42px",borderRadius:10,}}>
                                    <Row>
                                        <Col>
                                            <div style={{fontSize: 12, marginTop:"2px", marginBottom:"0px",marginLeft:"45px" }}>
                                                Package
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <input className="font-weight-bold" style={{fontSize: 12, marginTop:"0px", marginBottom:"1px",marginLeft:"45px",border:"none",width:"70%" }}></input>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col md="4" xs="12" className="mb-3">
                                <Card className="shadow" style={{width:"100%", height:"42px",borderRadius:10,}}>

                                    {/*<input value={this.state.phone} country={'lk'} className="font-weight-bold" style={{fontSize: 12,border:"none",width:"70%" }}></input>*/}

                                    <PhoneInput
                                        className="shadow"
                                        country={'lk'}
                                        buttonStyle={{border:"none",height:"42px",borderRadius:10,}}
                                        value={this.state.phone}
                                        placeholder="Enter the mobile number"
                                        inputStyle={{border:"none",width:"100%", height:"42px",borderRadius:10,}}
                                        // autoFormat={false}
                                        onChange={phone => this.setState({ phone })}

                                    />

                                    {/*<Row>*/}
                                    {/*    <Col>*/}
                                    {/*        <div style={{fontSize: 12, marginTop:"2px", marginBottom:"0px",marginLeft:"45px" }}>*/}
                                    {/*            Mobile*/}
                                    {/*        </div>*/}
                                    {/*    </Col>*/}
                                    {/*</Row>*/}
                                    {/*<Row>*/}
                                    {/*    <Col>*/}
                                    {/*        <input className="font-weight-bold" style={{fontSize: 12, marginTop:"0px", marginBottom:"1px",marginLeft:"45px",border:"none",width:"70%" }}></input>*/}
                                    {/*    </Col>*/}
                                    {/*</Row>*/}
                                </Card>
                            </Col>
                            <Col md="2" xs="12" >
                            </Col>
                        </Row>

                        <Row >
                            <Col md="2" xs="12" >
                            </Col>
                            <Col md="4" xs="12" className="mb-3">
                                <Row>
                                    <Col>
                                        <p style={{fontSize: 15, marginTop:"0px", marginLeft:"90px", }} className="  font-weight-bold   ">
                                            Individual
                                        </p>
                                    </Col>
                                    <Col>
                                        <Toggle size="sm" />
                                    </Col>
                                </Row>



                            </Col>
                            <Col md="4" xs="12" className="mb-3">

                                <Row>
                                    <Col>
                                        <p style={{fontSize: 15, marginTop:"0px", marginLeft:"90px", }} className="  font-weight-bold   ">
                                            Corporate
                                        </p>
                                    </Col>
                                    <Col>
                                        <Toggle size="sm" />
                                    </Col>
                                </Row>


                            </Col>
                            <Col md="2" xs="12" >
                            </Col>
                        </Row>

                        <Row >
                            <Col md="2" xs="12" >
                            </Col>
                            <Col md="4" xs="12" className="mb-3">
                                <Card className="shadow" style={{width:"100%", height:"42px",borderRadius:10,}}>
                                    <Row>
                                        <Col>
                                            <div style={{fontSize: 12, marginTop:"2px", marginBottom:"0px",marginLeft:"45px" }}>
                                                Email
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <input type="Email" className="font-weight-bold" style={{fontSize: 12, marginTop:"0px", marginBottom:"1px",marginLeft:"45px",border:"none",width:"70%" }}></input>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col md="4" xs="12" className="mb-3">
                                <Card className="shadow" style={{width:"100%", height:"42px",borderRadius:10,}}>
                                    <Row>
                                        <Col>
                                            <div style={{fontSize: 12, marginTop:"2px", marginBottom:"0px",marginLeft:"45px" }}>
                                                Address
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <input type="Address" className="font-weight-bold" style={{fontSize: 12, marginTop:"0px", marginBottom:"1px",marginLeft:"45px",border:"none",width:"70%" }}></input>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col md="2" xs="12" >
                            </Col>
                        </Row>


                        <Row >
                            <Col md="2" xs="12" >
                            </Col>
                            <Col md="4" xs="12" className="mb-3">
                                <Card className="shadow" style={{width:"100%", height:"42px",borderRadius:10,}}>
                                    <Row>
                                        <Col>
                                            <div style={{fontSize: 12, marginTop:"2px", marginBottom:"0px",marginLeft:"45px" }}>
                                                Password
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <input type="Email" className="font-weight-bold" style={{fontSize: 12, marginTop:"0px", marginBottom:"1px",marginLeft:"45px",border:"none",width:"70%" }}></input>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col md="4" xs="12" className="mb-3">
                                <Card className="shadow" style={{width:"100%", height:"42px",borderRadius:10,}}>
                                    <Row>
                                        <Col>
                                            <div style={{fontSize: 12, marginTop:"2px", marginBottom:"0px",marginLeft:"45px" }}>
                                                Customer ID
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <input type="Address" className="font-weight-bold" style={{fontSize: 12, marginTop:"0px", marginBottom:"1px",marginLeft:"45px",border:"none",width:"70%" }}></input>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col md="2" xs="12" >
                            </Col>
                        </Row>

                        <Container style={{marginTop:"0%" }} className=" ">
                            <Row className="">
                                <Col md="3" xs="6">
                                </Col>
                                <Col md="2" xs="6">
                                    <Button className="my-2"  style={{borderColor:"rgb(0,4,255)", backgroundColor:"rgb(0,4,255)",width:"80%"}}>
                                        Register
                                    </Button>
                                </Col>
                                <Col md="2" xs="6">
                                    <Button className="my-2" style={{borderColor:"rgb(136,38,162)", backgroundColor:"rgb(136,38,162)",width:"80%"}}>
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
                                                <Col md="1" xs="12" style={{ marginTop:"8px"}}>
                                                    <div className="font-weight-bold" style={{fontSize: 13, marginTop:"5px", marginBottom:"3px",marginLeft:"25px",width:"100px" }}>
                                                        Customer Table
                                                    </div>
                                                </Col>
                                                <Col md="1" xs="12" style={{ marginTop:"8px"}}>

                                                    <div style={{width:"1px",height:"30px",borderColor:"rgb(0,0,0)", backgroundColor:"rgb(0,0,0)",marginLeft:"40px"}}>
                                                    </div>
                                                </Col>
                                                <Col md="1" xs="12" style={{ marginTop:"8px"}}>
                                                    <a href="/premiumuser">
                                                    <div style={{fontSize: 13, marginTop:"5px", marginBottom:"3px",marginLeft:"-30px",width:"140px", color:"rgb(0,0,0)" }}>
                                                        View Premium User List
                                                    </div>
                                                    </a>
                                                </Col>
                                                <Col md="2" xs="12" style={{ marginTop:"5px"}}>
                                                </Col>
                                                <Col md="1" xs="12" style={{ marginTop:"5px"}}>
                                                    <Row>
                                                        <Col>
                                                            <div className="font-weight-bold" style={{fontSize: 13, marginTop:"10px", marginBottom:"3px",marginLeft:"0px",width:"100px" }}>
                                                                Name
                                                            </div>
                                                        </Col>
                                                        <Col>
                                                            <FormControlLabel
                                                                control={<GreenCheckbox  name="checkedG" />}
                                                            />
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col md="1" xs="12" style={{ marginTop:"5px"}}>
                                                    <Row>
                                                        <Col>
                                                            <div className="font-weight-bold" style={{fontSize: 13, marginTop:"10px", marginBottom:"3px",marginLeft:"-10px",width:"100px" }}>
                                                                Address
                                                            </div>
                                                        </Col>
                                                        <Col>
                                                            <FormControlLabel
                                                                control={<GreenCheckbox  name="checkedG" />}
                                                            />
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col md="1" xs="12" style={{ marginTop:"5px"}}>
                                                    <Row>
                                                        <Col>
                                                            <div className="font-weight-bold" style={{fontSize: 13, marginTop:"10px", marginBottom:"3px",marginLeft:"-11px",width:"100px" }}>
                                                                Package
                                                            </div>
                                                        </Col>
                                                        <Col>
                                                            <FormControlLabel
                                                                control={<GreenCheckbox  name="checkedG" />}
                                                            />
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col md="4" xs="12" style={{ marginTop:"5px"}}>
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
                                                    <CustomerTable/>
                                                </Col>
                                            </Row>

                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </Row>




                        {/*<CustomerViewTab/>*/}
                    </Col>
                </Row>
            </>
        );
    }
}

export default CustomerViewContent;

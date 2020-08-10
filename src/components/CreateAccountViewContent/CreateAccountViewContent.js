import React from "react";
import {
    Row,Col,Container, Card
} from "reactstrap";
import { Form, Button,InputGroup,FormControl } from 'react-bootstrap';
// import './AdminViewContent.css'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import UserTable from "../UserTable/UserTable";

class CreateAccountViewContent extends React.Component {
    state = {};
    render() {
        let resumeData = this.props.resumeData;
        return (
            <>

                <Row style={{ marginLeft:"5px",marginRight:"5px"}}>
                    <Col md="12" xs="12">
                        <Row>
                            <img
                                className="icon-shape mx-auto"
                                // style={{marginLeft:"25px",marginTop:"10px"}}
                                alt="..."
                                src={("img/Customer/test.jpg")}
                                width="150px"
                                height="150px"
                            />
                        </Row>

                        <Row >
                            <Col md="2" xs="12" >
                            </Col>
                            <Col md="4" xs="12" className="mb-3 columncenter">
                                <Card className="shadow" style={{width:"350px", height:"52px",borderRadius:10, marginTop:"20px"}}>
                                    <Row>
                                        <Col>
                                            <img
                                                // className=""
                                                style={{marginLeft:"-65px",marginTop:"10px"}}
                                                alt="..."
                                                src={("img/Customer/profile.png")}
                                                width="30px"
                                                height="30px"
                                            />
                                        </Col>
                                        <Col>
                                            <Row>
                                                <Col>
                                                    <div style={{fontSize: 12, marginTop:"5px", marginBottom:"0px",marginLeft:"-300px" }}>
                                                        Name
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <input className="font-weight-bold" style={{fontSize: 12, marginTop:"0px", marginBottom:"1px",marginLeft:"-110%",border:"none",width:"140%" }}></input>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col md="4" xs="12" className="mb-3 columncenter">
                                <Card className="shadow" style={{width:"350px", height:"52px",borderRadius:10, marginTop:"20px"}}>
                                    <Row>
                                        <Col>
                                            <img
                                                // className=""
                                                style={{marginLeft:"-65px",marginTop:"10px"}}
                                                alt="..."
                                                src={("img/Customer/password.png")}
                                                width="30px"
                                                height="30px"
                                            />
                                        </Col>
                                        <Col>
                                            <Row>
                                                <Col>
                                                    <div style={{fontSize: 12, marginTop:"5px", marginBottom:"0px",marginLeft:"-300px" }}>
                                                        Password
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <input className="font-weight-bold" style={{fontSize: 12, marginTop:"0px", marginBottom:"1px",marginLeft:"-110%",border:"none",width:"140%" }}></input>
                                                </Col>
                                            </Row>
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
                            <Col md="4" xs="12" className="mb-3 columncenter">
                                <Card className="shadow" style={{width:"350px", height:"52px",borderRadius:10, marginTop:"20px"}}>
                                    <Row>
                                        <Col>
                                            <img
                                                // className=""
                                                style={{marginLeft:"-65px",marginTop:"10px"}}
                                                alt="..."
                                                src={("img/Customer/mail.png")}
                                                width="30px"
                                                height="30px"
                                            />
                                        </Col>
                                        <Col>
                                            <Row>
                                                <Col>
                                                    <div style={{fontSize: 12, marginTop:"5px", marginBottom:"0px",marginLeft:"-300px" }}>
                                                        Email
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <input type="Email" className="font-weight-bold" style={{fontSize: 12, marginTop:"0px", marginBottom:"1px",marginLeft:"-110%",border:"none",width:"140%" }}></input>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col md="4" xs="12" className="mb-3 columncenter">
                                <Card className="shadow" style={{width:"350px", height:"52px",borderRadius:10, marginTop:"20px"}}>
                                    <Row>
                                        <Col>
                                            <img
                                                // className=""
                                                style={{marginLeft:"-65px",marginTop:"10px"}}
                                                alt="..."
                                                src={("img/Customer/mobile.png")}
                                                width="30px"
                                                height="30px"
                                            />
                                        </Col>
                                        <Col>
                                            <Row>
                                                <Col>
                                                    <div style={{fontSize: 12, marginTop:"5px", marginBottom:"0px",marginLeft:"-300px" }}>
                                                        Mobile
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <input type="Mobile" className="font-weight-bold" style={{fontSize: 12, marginTop:"0px", marginBottom:"1px",marginLeft:"-110%",border:"none",width:"140%" }}></input>
                                                </Col>
                                            </Row>
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
                            <Col md="8" xs="12" className="mb-3 columncenter">
                                <Card className="shadow" style={{width:"50%", height:"42px",borderRadius:10,}}>
                                    <Row>
                                        <Col>
                                            <div style={{fontSize: 12, marginTop:"2px", marginBottom:"0px",marginLeft:"-40%" }}>
                                                User ID
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <input  className="font-weight-bold" style={{fontSize: 12, marginTop:"0px", marginBottom:"1px",marginLeft:"45px",border:"none",width:"70%" }}></input>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col md="2" xs="12" >
                            </Col>
                        </Row>
                        <Row style={{marginLeft:"40%"}} className="columncenter">
                            <RadioGroup row aria-label="position" name="position" defaultValue="top" >
                                <FormControlLabel value="asd" control={<Radio color="primary" />} label="Admin" />
                                <FormControlLabel value="end" control={<Radio color="primary" />} label="View Access" />
                            </RadioGroup>
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
                                                <Col md="2" xs="12">
                                                    <div style={{fontSize: 15, marginTop:"5px", marginBottom:"3px",marginLeft:"45px" }}>
                                                        User Table
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
                                                    <UserTable/>
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

export default CreateAccountViewContent;

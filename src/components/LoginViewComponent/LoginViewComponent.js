import React from "react";
import {
    Row,Col,Container, Card
} from "reactstrap";
import { Form, Button,InputGroup,FormControl } from 'react-bootstrap';
import windowSize from 'react-window-size';


class LoginViewComponent extends React.Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <>








                {/*<div style={{width:"100px",height:window.innerHeight, borderColor:"rgb(255,106,107)", backgroundColor:"rgb(255,106,107)"}}>*/}
                {/*</div>*/}


                <Row>
                   <Col md="4" xs="12">
                       <img
                           // className=""
                           style={{height:window.innerHeight}}
                           alt="..."
                           src={("img/loginimage.JPG")}
                           width="500px"
                           height="100%"
                       />
                   </Col>
                    <Col md="8" xs="12" style={{ backgroundColor:"#ffffff"}}>

                        {/*<Row style={{height:"200px"}}>*/}

                        {/*</Row>*/}
                        <div className="" style={{height:window.innerHeight}}>
                        <Row className="columncenter" style={{height:window.innerHeight, marginLeft:"25%"}}>
                            <Col>
                                <Row>
                                    <Col className="columncenter">
                                        <p style={{fontSize: 24, marginTop:"10px", marginLeft:"0%", }} className="  font-weight-bold columncenter ">
                                            WELCOME TO BETA BRIDGES
                                        </p>
                                    </Col>

                                </Row>
                                <Row>
                                    {/*<Col md="4" xs="4">*/}
                                    {/*</Col>*/}
                                    <Col md="12" xs="12" className="columncenter" style={{marginTop:"30px",}}>
                                        <p style={{fontSize: 15, marginTop:"10px", marginLeft:"0%", color: "rgb(188,188,191)"}} className="  font-weight-bold columncenter ">
                                            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR<br/>
                                            ADIPSCING, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET<br/>
                                            DOLORE MAGNA ALIQUA. UT
                                        </p>
                                    </Col>
                                    {/*<Col md="4" xs="4">*/}
                                    {/*</Col>*/}
                                </Row>
                                <Row style={{marginTop:"30px",}}>
                                    <Col>
                                        <Row >
                                            <Col className="columncenter">
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
                                                                User ID
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <input className="font-weight-bold" style={{fontSize: 12, marginTop:"0px", marginBottom:"1px",marginLeft:"-75%",border:"none",width:"140%" }}></input>
                                                        </Col>
                                                    </Row>
                                                    </Col>
                                                    </Row>
                                                </Card>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col className="columncenter">
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
                                                                    <div style={{fontSize: 12, marginTop:"5px", marginBottom:"0px",marginLeft:"-290px" }}>
                                                                        Password
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <input type="password" className="font-weight-bold" style={{fontSize: 12, marginTop:"0px", marginBottom:"1px",marginLeft:"-75%",border:"none",width:"140%" }}></input>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                </Card>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col className="columncenter">
                                                <Button href="/dashboard" className="my-4  shadow" style={{borderRadius:20, borderColor:"rgba(226,228,225,0.08)", backgroundColor:"rgb(255,255,255)",width:"350px"}}>
                                                    <a className="font-weight-bold" style={{fontSize: 20, color:"rgba(0,64,255,0.55)"}}>Login</a>
                                                </Button>
                                            </Col>
                                        </Row>





                                    </Col>
                                </Row>

                            </Col>

                        </Row>
                        </div>
                        {/*<Row style={{height:"200px"}}>*/}

                        {/*</Row>*/}























                    </Col>
                </Row>
            </>
        );
    }
}

export default LoginViewComponent;

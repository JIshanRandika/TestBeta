import React from "react";
import {
    Row,Col,Container, Card
} from "reactstrap";
import { Form, Button,InputGroup,FormControl } from 'react-bootstrap';
import './AdminViewContent.css'

class AdminViewContent extends React.Component {
    state = {};
    render() {
        let resumeData = this.props.resumeData;
        return (
            <>
                <Row >
                    <Col md="12" xs="12">
                        <Row style={{height:"200px"}}>

                        </Row>
                        <Row style={{height:""}} >
                            <Col>


                                <Row style={{marginTop:"",}}>
                                    <Col>

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
                                                                        Name
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
                                                                src={("img/Customer/mail.png")}
                                                                width="30px"
                                                                height="30px"
                                                            />
                                                        </Col>
                                                        <Col>
                                                            <Row>
                                                                <Col>
                                                                    <div style={{fontSize: 12, marginTop:"5px", marginBottom:"0px",marginLeft:"-290px" }}>
                                                                        Email
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <input type="email" className="font-weight-bold" style={{fontSize: 12, marginTop:"0px", marginBottom:"1px",marginLeft:"-75%",border:"none",width:"140%" }}></input>
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
                                                                src={("img/Customer/mobile.png")}
                                                                width="30px"
                                                                height="30px"
                                                            />
                                                        </Col>
                                                        <Col>
                                                            <Row>
                                                                <Col>
                                                                    <div style={{fontSize: 12, marginTop:"5px", marginBottom:"0px",marginLeft:"-280px" }}>
                                                                        Mobile
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <input type="mobile" className="font-weight-bold" style={{fontSize: 12, marginTop:"0px", marginBottom:"1px",marginLeft:"-75%",border:"none",width:"140%" }}></input>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                </Card>
                                            </Col>
                                        </Row>



                                        <Row style={{marginTop:"20px"}}>
                                            <Col md="3" xs="12">
                                            </Col>
                                            <Col md="3" xs="12" className="columncenter">
                                                <Button className="my-3 mx-4" style={{borderRadius:10, borderColor:"rgb(56,0,252)", backgroundColor:"rgb(56,0,252)", width:"40%"}}>
                                                    Save
                                                </Button>
                                            </Col>
                                            <Col md="3" xs="12" className="columncenter">
                                                <Button className="my-3 mx-4" style={{borderRadius:10, borderColor:"rgb(255,99,84)", backgroundColor:"rgb(255,99,84)", width:"40%"}}>
                                                    Cancel
                                                </Button>
                                            </Col>
                                            <Col md="3" xs="12">
                                            </Col>

                                        </Row>





                                    </Col>
                                </Row>

                            </Col>

                        </Row>
                        <Row style={{height:"200px"}}>

                        </Row>



                    </Col>
                </Row>







                {/*    /!*<Col md="12" xs="12" style={{ backgroundColor:"#e2e4e1"}}>*!/*/}
{/*                    <Card className="mx-auto my-auto shadow rounded">*/}
{/*<Row>*/}
{/*                    <img*/}
{/*                        className="icon-shape mx-auto"*/}
{/*                        // style={{marginLeft:"25px",marginTop:"10px"}}*/}
{/*                        alt="..."*/}
{/*                        src={("img/Customer/test.jpg")}*/}
{/*                        width="120px"*/}
{/*                        height="120px"*/}
{/*                    />*/}
{/*</Row>*/}
{/*                        <div style={{marginLeft:"25px",marginRight:"25px", marginTop:"10px",marginBottom:"25px"}}>*/}
{/*                        /!*<Row>*!/*/}
{/*                        <InputGroup className="mb-3" >*/}
{/*                            <InputGroup.Prepend>*/}
{/*                                <Button variant="outline-secondary"><img*/}
{/*                                    // style={{marginLeft:"25px",marginTop:"10px"}}*/}
{/*                                    alt="..."*/}
{/*                                    src={("img/Customer/profile.png")}*/}
{/*                                    width="20px"*/}
{/*                                    height="20px"*/}
{/*                                /></Button>*/}
{/*                            </InputGroup.Prepend>*/}
{/*                            <FormControl aria-describedby="basic-addon1" placeholder="Name"/>*/}
{/*                        </InputGroup>*/}

{/*                        <InputGroup className="mb-3" controlId="formBasicEmail">*/}
{/*                            <InputGroup.Prepend>*/}
{/*                                <Button variant="outline-secondary"><img*/}
{/*                                    // style={{marginLeft:"25px",marginTop:"10px"}}*/}
{/*                                    alt="..."*/}
{/*                                    src={("img/Customer/mail.png")}*/}
{/*                                    width="20px"*/}
{/*                                    height="20px"*/}
{/*                                /></Button>*/}
{/*                            </InputGroup.Prepend>*/}
{/*                            <FormControl type="email" aria-describedby="basic-addon1" placeholder="Email"/>*/}
{/*                        </InputGroup>*/}
{/*                        <InputGroup className="" controlId="formBasicEmail">*/}
{/*                            <InputGroup.Prepend>*/}
{/*                                <Button variant="outline-secondary"><img*/}
{/*                                    // style={{marginLeft:"25px",marginTop:"10px"}}*/}
{/*                                    alt="..."*/}
{/*                                    src={("img/Customer/mobile.png")}*/}
{/*                                    width="20px"*/}
{/*                                    height="20px"*/}
{/*                                /></Button>*/}
{/*                            </InputGroup.Prepend>*/}
{/*                            <FormControl type="email" aria-describedby="basic-addon1" placeholder="Mobile"/>*/}
{/*                        </InputGroup>*/}
{/*                        </div>*/}
{/*                        <Row style={{marginTop:"20px", marginBottom:"20px"}} className="icon-shape mx-auto">*/}
{/*                            <Col>*/}
{/*                                <Button  style={{borderColor:"rgb(0,64,255)", backgroundColor:"rgb(0,64,255)", width:"80px"}} href="/cart">*/}
{/*                                    Save*/}
{/*                                </Button>*/}
{/*                            </Col>*/}
{/*                            <Col>*/}
{/*                                <Button  style={{borderColor:"rgb(255,106,107)", backgroundColor:"rgb(255,106,107)", width:"80px"}} href="/buynow">*/}
{/*                                    Cancel*/}
{/*                                </Button>*/}
{/*                            </Col>*/}
{/*                        </Row>*/}

{/*                    </Card>*/}
{/*                    /!*</Col>*!/*/}
{/*                </Row>*/}
            </>
        );
    }
}

export default AdminViewContent;

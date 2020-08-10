import React from "react";
import {
    Row,Col,Container, Card
} from "reactstrap";
import { Form, Button } from 'react-bootstrap';
import TextField from "@material-ui/core/TextField/TextField";



class GroupsViewContent extends React.Component {
    state = {};
    render() {
        let resumeData = this.props.resumeData;
        return (
            <>
                <Row style={{ marginLeft:"5px",marginRight:"5px"}}>
                    <Col md="12" xs="12" >
                        <Row>
                            <Col md="5" xs="12">
                                <Row>
                                    <Col md="4" xs="4" >
                                        <p style={{fontSize: 15, marginTop:"30px", marginLeft:"5%",color:"rgba(0,64,255,0.58)" }} className="  font-weight-bold   ">
                                            G1234 Group
                                        </p>
                                    </Col>
                                    <Col md="4" xs="4">

                                        <Card className="shadow" style={{width:"120px", height:"52px",borderRadius:10, marginLeft:"-28px", marginBottom:"5px"}}>
                                            <Row>
                                                <Col>
                                                    <div style={{fontSize: 12, marginTop:"2px", marginBottom:"0px",marginLeft:"15px" }}>
                                                        Group ID
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>

                                                <Col>
                                                    {/*,border:"none"*/}
                                                    <input className="font-weight-bold" style={{fontSize: 12, marginTop:"4px", marginBottom:"1px",marginLeft:"5px",width:"80px" ,border:"none"}}></input>
                                                </Col>
                                                <Col style={{marginRight:"-10px",marginTop:"-10px"}}>
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
                                    <Col md="4" xs="4">
                                        <Card className="shadow" style={{width:"120px", height:"52px",borderRadius:10, marginLeft:"-28px", marginBottom:"5px"}}>
                                            <Row>
                                                <Col>
                                                    <div style={{fontSize: 12, marginTop:"2px", marginBottom:"0px",marginLeft:"15px" }}>
                                                        Customer ID
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>

                                                <Col>

                                                    <input className="font-weight-bold" style={{fontSize: 12, marginTop:"4px", marginBottom:"1px",marginLeft:"5px",width:"80px" ,border:"none"}}></input>
                                                </Col>
                                                <Col style={{marginRight:"-10px",marginTop:"-10px"}}>
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
                                </Row>

                                <Row>
                                    <Card className="" style={{marginBottom:"5%",marginLeft:"4%",marginRight:"4%",height:"600px",width:"100%" }}>

                                    </Card>
                                </Row>
                            </Col>


                            <Col md="2" xs="12">
                                <div className="" style={{marginTop:"100%"}}>
                                <Row>
                                <Button className="mx-auto my-2 " style={{borderColor:"rgb(15,0,255)", backgroundColor:"rgb(15,0,255)", width:"80px"}}>
                                    Add
                                </Button>
                                </Row>
                                <Row>
                                <Button className="mx-auto my-2" style={{borderColor:"rgb(255,99,84)", backgroundColor:"rgb(255,99,84)", width:"80px"}}>
                                    Remove
                                </Button>
                                </Row>
                                </div>
                            </Col>


                            <Col md="5" xs="12">










                                <Row>
                                    <Col md="4" xs="4" >
                                        <p style={{fontSize: 15, marginTop:"30px", marginLeft:"5%",color:"rgba(0,64,255,0.58)" }} className="  font-weight-bold   ">
                                            Vehicles
                                        </p>
                                    </Col>
                                    <Col md="4" xs="4">


                                    </Col>
                                    <Col md="4" xs="4">
                                        <Card className="shadow" style={{width:"120px", height:"52px",borderRadius:10, marginLeft:"-28px", marginBottom:"5px"}}>
                                            <Row>
                                                <Col>
                                                    <div style={{fontSize: 12, marginTop:"2px", marginBottom:"0px",marginLeft:"15px" }}>
                                                        Vehicle ID
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>

                                                <Col>

                                                    <input className="font-weight-bold" style={{fontSize: 12, marginTop:"4px", marginBottom:"1px",marginLeft:"5px",width:"80px" ,border:"none"}}></input>
                                                </Col>
                                                <Col style={{marginRight:"-10px",marginTop:"-10px"}}>
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
                                </Row>





                                <Row>
                                    <Card className="" style={{marginBottom:"5%",marginLeft:"4%",marginRight:"4%",height:"600px",width:"100%" }}>

                                    </Card>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </>
        );
    }
}

export default GroupsViewContent;

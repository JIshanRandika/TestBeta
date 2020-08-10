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

const GreenCheckbox = withStyles({
    root: {
        // color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Checkbox style={{marginLeft:"0px"}} color="default" {...props} />);

class PremiumUserViewContent extends React.Component {
    state = {};
    render() {
        let resumeData = this.props.resumeData;
        return (
            <>

                <Row style={{ marginLeft:"5px",marginRight:"5px"}}>
                    <Col md="12" xs="12" >





                        <Row style={{marginTop:"0%"}}>

                            <Container>
                                <Row>
                                    <Col md="12" xs="12">
                                        <Card className="shadow pb-3" style={{}}>
                                            <Row style={{ marginTop:"10px"}}>
                                                <Col md="1" xs="12" style={{ marginTop:"8px"}}>
                                                    <a href="/customer">
                                                    <div  style={{fontSize: 13, marginTop:"5px", marginBottom:"3px",marginLeft:"25px",width:"100px", color:"rgb(0,0,0)" }}>
                                                        Customer Table
                                                    </div>
                                                    </a>
                                                </Col>
                                                <Col md="1" xs="12" style={{ marginTop:"8px"}}>
                                                    <div style={{width:"1px",height:"30px",borderColor:"rgb(0,0,0)", backgroundColor:"rgb(0,0,0)",marginLeft:"40px"}}>
                                                    </div>
                                                </Col>
                                                <Col md="1" xs="12" style={{ marginTop:"8px"}}>
                                                    <div className="font-weight-bold" style={{fontSize: 13, marginTop:"5px", marginBottom:"3px",marginLeft:"-30px",width:"140px" }}>
                                                        View Premium User List
                                                    </div>
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

export default PremiumUserViewContent;

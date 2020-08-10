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

import { TextArea } from 'semantic-ui-react'

const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);


class CustomerViewContent extends React.Component {



    render() {


        // const handleChange = (event) => {
        //     setState({ ...state, [event.target.name]: event.target.checked });
        // };


        let resumeData = this.props.resumeData;
        return (
            <>

                <Row style={{ marginLeft:"5px",marginRight:"5px"}}>
                    <Col md="12" xs="12">

                        <Row>
                                <p style={{fontSize: 15, marginTop:"10px", marginLeft:"5%", }} className="  font-weight-bold   ">
                                    Auto generated messages
                                </p>
                        </Row>
                        <Row>
                            <Col md="6" xs="12" style={{paddingLeft:"140px", marginTop:"20px"}}>
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
                                            <input className="font-weight-bold" style={{fontSize: 12, marginTop:"0px", marginBottom:"1px",marginLeft:"45px",border:"none",width:"70%" }}></input>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col md="6" xs="12" style={{paddingLeft:"150px", marginTop:"20px"}}>

                                <FormControlLabel
                                    control={<GreenCheckbox  name="checkedG" />}
                                    label="Send to All Customers"
                                />

                            </Col>

                        </Row>
                        <Row style={{paddingLeft:"120px", marginTop:"20px"}}>
                            {/*<Col md="4" xs="6">*/}
                                <Button className="my-3 mx-4"  style={{borderRadius:10, borderColor:"rgb(255,183,16)", backgroundColor:"rgb(255,183,16)"}}>
                                    Payment Confirmation
                                </Button>
                            {/*</Col>*/}
                            {/*<Col md="4" xs="6">*/}
                                <Button className="my-3 mx-4" style={{borderRadius:10, borderColor:"rgb(255,99,84)", backgroundColor:"rgb(255,99,84)"}}>
                                    Late Payment
                                </Button>
                            {/*</Col>*/}
                            {/*<Col md="4" xs="6">*/}
                                <Button className="my-3 mx-4" style={{borderRadius:10, borderColor:"rgb(92,235,255)", backgroundColor:"rgb(92,235,255)"}}>
                                    Package Payment Reminder
                                </Button>
                            {/*</Col>*/}
                        </Row>
                        <Row>
                            <p style={{fontSize: 15, marginTop:"10px", marginLeft:"5%", }} className="  font-weight-bold   ">
                                Special messages
                            </p>
                        </Row>
                        <Row>
                            <Form className="mx-auto" style={{marginTop:"10px"}}>
                                <TextArea placeholder='Write your message' style={{ minHeight: 300, width:700}} />
                            </Form>
                        </Row>


                        <Row>
                            <Col md="6" xs="12" style={{paddingLeft:"140px", marginTop:"20px"}}>
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
                                            <input className="font-weight-bold" style={{fontSize: 12, marginTop:"0px", marginBottom:"1px",marginLeft:"45px",border:"none",width:"70%" }}></input>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col md="6" xs="12" style={{paddingLeft:"150px", marginTop:"20px"}}>

                                <FormControlLabel
                                    control={<GreenCheckbox  name="checkedG" />}
                                    label="Send to All Customers"
                                />

                            </Col>



                        </Row>

                        <Row>
                            <Col md="9" xs="12">
                            </Col>
                            <Col md="3" xs="12">
                                <Button className="my-3 mx-4" style={{borderRadius:10, borderColor:"rgb(255,99,84)", backgroundColor:"rgb(255,99,84)"}}>
                                    Send
                                </Button>
                            </Col>
                        </Row>


                        {/*<Row>*/}


                        {/*    <Col md="5" xs="12" >*/}
                        {/*        <Card className="my-2 shadow rounded" style={{marginLeft:"20%",marginRight:"100px" }}>*/}
                        {/*            <Container>*/}
                        {/*                <form  noValidate autoComplete="off" style={{fontSize: 15, marginTop:"10px", marginBottom:"5%", }}>*/}
                        {/*                    <TextField id="standard-basic" label="Customer ID" />*/}
                        {/*                </form>*/}
                        {/*            </Container>*/}
                        {/*        </Card>*/}
                        {/*    </Col>*/}
                        {/*    <Col md="5" xs="12">*/}


                        {/*        /!*<label className="mx-auto" style={{marginTop:"20px"}}>*!/*/}
                        {/*        /!*    /!*<div style={{fontSize: 15, marginTop:"20px", marginLeft:"", }} className="  font-weight-bold   ">*!/*!/*/}
                        {/*        /!*    Send to All Customers*!/*/}
                        {/*        /!*    /!*</div>*!/*!/*/}
                        {/*        /!*    <input*!/*/}
                        {/*        /!*        style={{marginLeft:"10px", }}*!/*/}
                        {/*        /!*        name="isGoing"*!/*/}
                        {/*        /!*        type="checkbox"*!/*/}
                        {/*        /!*        checked={this.state.isGoing}*!/*/}
                        {/*        /!*        onChange={this.handleInputChange} />*!/*/}
                        {/*        /!*</label>*!/*/}
                        {/*    </Col>*/}
                        {/*    <Col md="2" xs="12" >*/}
                        {/*        <Button className="my-3 " style={{borderColor:"rgb(255,99,84)", backgroundColor:"rgb(255,99,84)"}}>*/}
                        {/*            Send*/}
                        {/*        </Button>*/}
                        {/*    </Col>*/}

                        {/*</Row>*/}
                    </Col>
                </Row>
            </>
        );
    }
}

export default CustomerViewContent;

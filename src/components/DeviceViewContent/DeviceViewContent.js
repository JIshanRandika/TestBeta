import React from "react";
import {
    Row,Col,Container,
} from "reactstrap";
import { Form, Button,InputGroup,FormControl,ButtonGroup,Table,Card } from 'react-bootstrap';
import TableComponent from "../TableComponent/TableComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faList, faEdit, faTrash, faArrowAltCircleUp} from '@fortawesome/free-solid-svg-icons'
// import Toggle from 'react-bootstrap-toggle';
// import Toggle from 'react-toggle'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Switch from "react-switch";
import { Checkbox, CheckboxGroup } from 'rsuite';
import { Toggle } from 'rsuite';
// import { Switch } from 'antd';
import 'rsuite/dist/styles/rsuite-default.css';
import {withStyles} from "@material-ui/core";
import {green} from "@material-ui/core/colors";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import DeviceTable from "../DeviceTable/DeviceTable";


const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

class DeviceViewContent extends React.Component {
    // constructor() {
        // super();

        // this.state = { toggleActive: false };
        // this.onToggle = this.onToggle.bind(this);
    // }
    //
    // onToggle() {
    //     this.setState({ toggleActive: !this.state.toggleActive });
    // }
    constructor() {
        super();
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.setState({ checked });
    }
    render() {
        // const [formats, setFormats] = React.useState(() => ['bold', 'italic']);
        //
        // const handleFormat = (event, newFormats) => {
        //     setFormats(newFormats);
        // };
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
                                                Device Name
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
                                                Device Port
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

                        <Row >
                            <Col md="2" xs="12" >
                            </Col>
                            <Col md="4" xs="12" className="mb-3">
                                <Card className="shadow" style={{width:"100%", height:"42px",borderRadius:10,}}>
                                    <Row>
                                        <Col>
                                            <div style={{fontSize: 12, marginTop:"2px", marginBottom:"0px",marginLeft:"45px" }}>
                                                Device Price
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
                                                Device ID
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
                                                Date
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
                                                Sim ID
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
                                                Allocate
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
                                                Vehicle Reg ID
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


                    <Row style={{marginTop:"0%"}}>
                        {/*<Container className="mx-6" style={{marginRight:"10%", marginLeft:"10%" }}>*/}

                        {/*    <Row>*/}
                        {/*        <Col md="6" xs="12">*/}
                        {/*            <Form.Row style={{paddingTop: "20px"}}>*/}
                        {/*                <Col md="12" xs="12" >*/}
                        {/*                    <Form.Group controlId="">*/}
                        {/*                        <Form.Label>DeviceName</Form.Label>*/}
                        {/*                        <Form.Control placeholder="" />*/}
                        {/*                    </Form.Group>*/}
                        {/*                </Col>*/}
                        {/*            </Form.Row>*/}
                        {/*        </Col>*/}
                        {/*        <Col md="6" xs="12">*/}
                        {/*            <Form.Row style={{paddingTop: "20px"}}>*/}
                        {/*                <Col md="12" xs="12" >*/}
                        {/*                    <Form.Group controlId="">*/}
                        {/*                        <Form.Label>Device Port</Form.Label>*/}
                        {/*                        <Form.Control placeholder="" />*/}
                        {/*                    </Form.Group>*/}
                        {/*                </Col>*/}
                        {/*            </Form.Row>*/}
                        {/*        </Col>*/}
                        {/*    </Row>*/}


                        {/*    <Row>*/}
                        {/*        <Col md="6" xs="12">*/}
                        {/*            <Form.Row style={{paddingTop: "20px"}}>*/}
                        {/*                <Col md="12" xs="12" >*/}
                        {/*                    <Form.Group controlId="">*/}
                        {/*                        <Form.Label>DevicePrice(LKR)</Form.Label>*/}
                        {/*                        <Form.Control placeholder="" />*/}
                        {/*                    </Form.Group>*/}
                        {/*                </Col>*/}
                        {/*            </Form.Row>*/}
                        {/*        </Col>*/}
                        {/*        <Col md="6" xs="12">*/}
                        {/*            <Form.Row style={{paddingTop: "20px"}}>*/}
                        {/*                <Col md="12" xs="12" >*/}
                        {/*                    <Form.Group controlId="">*/}
                        {/*                        <Form.Label>Device QTY</Form.Label>*/}
                        {/*                        <Form.Control placeholder="" />*/}
                        {/*                    </Form.Group>*/}
                        {/*                </Col>*/}
                        {/*            </Form.Row>*/}
                        {/*        </Col>*/}
                        {/*    </Row>*/}

                        {/*    <Row>*/}
                        {/*        <Col md="6" xs="12">*/}
                        {/*            <Form.Row style={{paddingTop: "20px"}}>*/}
                        {/*                <Col md="12" xs="12" >*/}
                        {/*                    <Form.Group controlId="">*/}
                        {/*                        <Form.Label>Allocate</Form.Label>*/}
                        {/*                        <Form.Control placeholder="" />*/}
                        {/*                    </Form.Group>*/}
                        {/*                </Col>*/}
                        {/*            </Form.Row>*/}
                        {/*        </Col>*/}
                        {/*    </Row>*/}

                        {/*</Container>*/}
                        <Container style={{marginTop:"0%" }} className=" ">
                            <Row className="">
                                <Col md="3" xs="6">
                                </Col>
                                <Col md="2" xs="6">
                                    <Button className="my-2"  style={{borderColor:"rgb(0,4,255)", backgroundColor:"rgb(0,4,255)",width:"80%"}}>
                                        Add
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


                        <Container>
                            <Row>
                                <Col md="12" xs="12">
                                    <Card className="shadow pb-3" style={{}}>
                                        <Row style={{ marginTop:"10px"}}>
                                            <Col md="2" xs="12">
                                                <div style={{fontSize: 15, marginTop:"5px", marginBottom:"3px",marginLeft:"45px" }}>
                                                    Device Table
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
                                                <DeviceTable/>
                                            </Col>
                                        </Row>

                                    </Card>
                                </Col>
                            </Row>
                        </Container>

















                        {/*<Container style={{marginTop:"5%", marginBottom:"10%" }} className=" ">*/}
                        {/*    <section className="section section-lg">*/}
                        {/*        <Container>*/}
                        {/*            /!*<label>*!/*/}
                        {/*            /!*    <Switch width={25} height={10}  onChange={this.handleChange} checked={this.state.checked} />*!/*/}
                        {/*            /!*</label>*!/*/}
                        {/*            <Card>*/}
                        {/*                <Card.Header className={"border border-dark bg-dark text-white"}>Device Table</Card.Header>*/}
                        {/*                <Card.Body>*/}
                        {/*                    <Table>*/}
                        {/*                        <thead>*/}
                        {/*                        <tr>*/}
                        {/*                            <th>Device Id</th>*/}
                        {/*                            <th>Device Name</th>*/}
                        {/*                            <th>Device Port</th>*/}
                        {/*                            <th>Device Price</th>*/}
                        {/*                            <th>Device Qty</th>*/}
                        {/*                            <th>Active/Deactive</th>*/}
                        {/*                            <th>Allocate</th>*/}
                        {/*                            <th>Action</th>*/}
                        {/*                        </tr>*/}
                        {/*                        </thead>*/}
                        {/*                        <tbody>*/}

                        {/*                                    <tr >*/}
                        {/*                                        <td>Ab1234</td>*/}
                        {/*                                        <td>Tk100</td>*/}
                        {/*                                        <td>8080</td>*/}
                        {/*                                        <td>123LKR</td>*/}
                        {/*                                        <td>6</td>*/}
                        {/*                                        <td>*/}
                        {/*                                            <Switch width={35} height={15}  onChange={this.handleChange} checked={this.state.checked} />*/}
                        {/*                                        </td>*/}
                        {/*                                        <td>pending</td>*/}
                        {/*                                        <td>*/}
                        {/*                                            <ButtonGroup>*/}
                        {/*                                                <Button size="sm" variant="outline-success" ><FontAwesomeIcon icon={faArrowAltCircleUp}/></Button>*/}
                        {/*                                                <Button size="sm" variant="outline-primary" ><FontAwesomeIcon icon={faEdit}/></Button>*/}
                        {/*                                                <Button size="sm" variant="outline-danger" ><FontAwesomeIcon icon={faTrash}/></Button>*/}
                        {/*                                            </ButtonGroup>*/}
                        {/*                                        </td>*/}
                        {/*                                    </tr>*/}


                        {/*                        </tbody>*/}


                        {/*                    </Table>*/}
                        {/*                </Card.Body>*/}
                        {/*            </Card>*/}
                        {/*        </Container>*/}
                        {/*    </section>*/}

                        {/*</Container>*/}
                    </Row>
                    </Col>
                </Row>
            </>
        );
    }
}

export default DeviceViewContent;

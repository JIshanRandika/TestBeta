import React from "react";
import {
    Row,Col,Container, Card
} from "reactstrap";
import { Form, Button } from 'react-bootstrap';
import TextField from "@material-ui/core/TextField/TextField";

import ZTesting from "../ZTesting/ZTesting.js";
import {Checkbox, Toggle} from "rsuite";



class GroupsViewContent extends React.Component {
    state = {};
    render() {
        let resumeData = this.props.resumeData;
        return (
            <>
                <Row style={{ marginLeft:"5px",marginRight:"5px"}}>



                </Row>
            </>
        );
    }
}

export default GroupsViewContent;

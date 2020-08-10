import React from "react";
import {
    Row,Col,Container, Card
} from "reactstrap";
import { Form, Button,InputGroup,FormControl } from 'react-bootstrap';
import Toolbar from "@material-ui/core/Toolbar";
// import { useHistory } from "react-router-dom";

class TrafficReportViewContent extends React.Component {
    state = {};
    render() {
        let resumeData = this.props.resumeData;
        // let history = useHistory();
        return (
            <>

                <Row style={{ marginLeft:"5px",marginRight:"5px"}}>
                    {/*<ons-toolbar>*/}
                    {/*    <div className="left">*/}
                    {/*        <ons-back-button>Back</ons-back-button>*/}
                    {/*    </div>*/}
                    {/*</ons-toolbar>*/}
                </Row>
            </>
        );
    }
}

export default TrafficReportViewContent;

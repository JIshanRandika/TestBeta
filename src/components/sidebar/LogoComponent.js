import React from 'react';
import { Row,Column } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import Logo from '../../assets/icon-logo';
import {
    Container, Card
} from "reactstrap";
import {Button} from "react-bootstrap";

const styles = StyleSheet.create({
    container: {
        marginLeft: 32,
        marginRight: 32
    },
    title: {
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 19,
        lineHeight: '24px',
        letterSpacing: '0.4px',
        color: '#A4A6B3',
        opacity: 0.7,
        marginLeft: 12
    }
});

function LogoComponent() {
    return (
        <Row className={css(styles.container)} horizontal="center" vertical="center">
            {/*<Logo />*/}
            {/*<span className={css(styles.title)}>Beta Bridge</span>*/}


            <a href="https://betabridges.com/" target="_blank">
            <img
                className="mx-auto"
                // style={{marginLeft:"25px",marginTop:"10px"}}
                alt="..."
                src={("img/logo.png")}
                width="100px"
                height="80px"

            />
            </a>


            {/*<Card className="shadow" style={{width:"180px"}}>*/}
            {/*    <Row>*/}
            {/*    <img*/}
            {/*        className="icon-shape mx-auto"*/}
            {/*        // style={{marginLeft:"25px",marginTop:"10px"}}*/}
            {/*        alt="..."*/}
            {/*        src={("img/Customer/test.jpg")}*/}
            {/*        width="65px"*/}
            {/*        height="70px"*/}
            {/*    />*/}
            {/*    </Row>*/}
            {/*    <Row className="columncenter mx-auto">*/}
            {/*        <a className="font-weight-bold mb-2" style={{fontSize: 15, color:"rgba(0,64,255,0.55)"}}>Super Admin</a>*/}
            {/*    </Row>*/}
            {/*</Card>*/}


        </Row>

    );
}

export default LogoComponent;

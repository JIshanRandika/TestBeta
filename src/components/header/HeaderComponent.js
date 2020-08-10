import React from 'react';
import { string } from 'prop-types';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import IconSearch from '../../assets/icon-search';
import IconBellNew from '../../assets/icon-bell-new';
import {
    Container, Card
} from "reactstrap";
const styles = StyleSheet.create({
    avatar: {
        height: 35,
        width: 35,
        borderRadius: 50,
        marginLeft: 14,
        border: '1px solid #DFE0EB',
    },
    container: {
        height: 40
    },
    cursorPointer: {
        cursor: 'pointer'
    },
    name: {
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 14,
        lineHeight: '20px',
        textAlign: 'right',
        letterSpacing: 0.2,
        '@media (max-width: 768px)': {
            display: 'none'
        }
    },
    separator: {
        borderLeft: '1px solid #DFE0EB',
        marginLeft: 32,
        marginRight: 32,
        height: 32,
        width: 2,
        '@media (max-width: 768px)': {
            marginLeft: 12,
            marginRight: 12
        }
    },
    title: {
        fontFamily: '',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: '30px',
        letterSpacing: 0.3,
        '@media (max-width: 768px)': {
            marginLeft: 36
        },
        '@media (max-width: 468px)': {
            fontSize: 20
        }
    },
    iconStyles: {
        cursor: 'pointer',
        marginLeft: 25,
        '@media (max-width: 768px)': {
            marginLeft: 12
        }
    }
});

function HeaderComponent(props) {
    const { icon, title, ...otherProps } = props;
    return (
        <Row style={{ marginLeft:"30px",marginRight:"30px", marginTop:"20px"}} className={css(styles.container)} vertical="center" horizontal="space-between" {...otherProps}>
            <span className={css(styles.title)}>{title}</span>
            <Row vertical="center">
                <div className={css(styles.iconStyles)}>
                    {/*<IconSearch />*/}
                    <div className="columncenter shadow" style={{backgroundColor:'rgba(255,255,255,0.69)',width:"25px",height:"25px",borderRadius:"50%"}}>
                        <img
                            className="mx-auto columncenter"
                            // style={{marginLeft:"25px",marginTop:"10px"}}
                            alt="..."
                            src={("img/arrowleft.png")}
                            width="10px"
                            height="10px"
                        />
                    </div>
                </div>
                <div className={css(styles.iconStyles)}>
                    <a href="/notification">
                    {/*<IconBellNew />*/}
                    <div className="columncenter" style={{backgroundColor:'rgba(0,64,255,0.69)',width:"25px",height:"25px",borderRadius:"50%"}}>
                        <img
                            className="mx-auto columncenter"
                            // style={{marginLeft:"25px",marginTop:"10px"}}
                            alt="..."
                            src={("img/bell.png")}
                            width="10px"
                            height="10px"
                        />
                    </div>
                    </a>
                </div>
                {/*<div className={css(styles.separator)}></div>*/}
                {/*<Row vertical="center" >*/}
                {/*    <span className={css(styles.name, styles.cursorPointer)}>Germán Llorente</span>*/}
                {/*    <a href="/admin">*/}
                {/*    <img src="https://avatars3.githubusercontent.com/u/21162888?s=460&v=4" alt="avatar" className={css(styles.avatar, styles.cursorPointer)} />*/}
                {/*    </a>*/}
                {/*</Row>*/}
            </Row>
        </Row>
    );
}

HeaderComponent.propTypes = {
    title: string
};

export default HeaderComponent;

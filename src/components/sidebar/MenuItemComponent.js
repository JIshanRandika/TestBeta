import React from 'react';
import { bool, func, string } from 'prop-types';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import {faArrowAltCircleUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const styles = StyleSheet.create({
    activeBar: {
        height: 56,
        width: 3,
        backgroundColor: '#DDE2FF',
        position: 'absolute',
        left: 0
    },
    activeContainer: {
        backgroundColor: 'rgba(221,226,255, 0.08)'
    },
    activeTitle: {
        color: 'rgba(0,64,255,0.69)'
    },
    container: {
        height: 56,
        cursor: 'pointer',
        ':hover': {
            backgroundColor: 'rgba(221,226,255, 0.08)'
        },
        paddingLeft: 32,
        paddingRight: 32
    },
    title: {
        fontFamily: '',
        fontSize: 16,
        lineHeight: '20px',
        letterSpacing: '0.2px',
        color: '#000000',
        marginLeft: 24
    }
});

function MenuItemComponent(props) {
    const { content, active, icon, title, ...otherProps } = props;
    const Icon = icon;
    return (
       <a href={content}> <Row className={css(styles.container, active && styles.activeContainer)} vertical="center" {...otherProps}>
            {active && <div className={css(styles.activeBar)}></div>}
           {/*<FontAwesomeIcon icon={Icon}/>*/}
            {/*<Icon fill={active && "#DDE2FF"} opacity={!active && "0.4"} />*/}
           <img
               style={{marginLeft:"-15px",marginRight:"13px"}}
               alt="..."
               src={(Icon)}
               width="20px"
               height="20px"
           />
            <span className={css(styles.title, active && styles.activeTitle)}>{title}</span>
        </Row></a>
    );
}

MenuItemComponent.propTypes = {
    active: bool,
    icon: func,
    title: string
};

export default MenuItemComponent;

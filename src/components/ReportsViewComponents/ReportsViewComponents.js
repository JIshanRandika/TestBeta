import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import SidebarComponent from '../sidebar/SidebarComponent';
import HeaderComponent from '../header/HeaderComponent';
import ReportsViewContent from "../ReportsViewContent/ReportsViewContent.js";

// import './App.css';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        minHeight: '100vh'
    },
    content: {
        marginTop: 54
    },
    mainBlock: {
        backgroundColor: '#e2e4e1',
        borderWidth:'10px',
        borderStyle:'solid',
        borderColor:'rgba(0,64,255,0.69)'
    }
});

class ReportsViewComponents extends React.Component {

    state = { selectedItem: 'Reports' };

    componentDidMount() {
        window.addEventListener('resize', this.resize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    resize = () => this.forceUpdate();

    render() {
        const { selectedItem } = this.state;
        return (
            <Row className={css(styles.container)}>
                <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} />
                <Column flexGrow={1} className={css(styles.mainBlock)}>
                    <HeaderComponent title={selectedItem} />
                    <div className={css(styles.content)}>
                        {/*<span>Content</span>*/}
                        <ReportsViewContent/>
                    </div>
                </Column>
            </Row>
        );
    }
}

export default ReportsViewComponents;
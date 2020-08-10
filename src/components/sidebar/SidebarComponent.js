import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import LogoComponent from './LogoComponent';
import ProfileComponent from './ProfileComponent';
import MenuItemComponent from './MenuItemComponent';
import IconOverview from '../../assets/icon-overview.js';
import IconTickets from '../../assets/icon-tickets.js';
import IconIdeas from '../../assets/icon-ideas.js';
import IconContacts from '../../assets/icon-contacts';
import IconAgents from '../../assets/icon-agents';
import IconArticles from '../../assets/icon-articles';
import IconSettings from '../../assets/icon-settings';
import IconSubscription from '../../assets/icon-subscription';
import IconBurger from '../../assets/icon-burger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faList, faEdit, faTrash, faArrowAltCircleUp} from '@fortawesome/free-solid-svg-icons'
import './CSS.css';
import { Sidenav, Dropdown,Nav,Icon } from 'rsuite';

const styles = StyleSheet.create({
    burgerIcon: {
        cursor: 'pointer',
        position: 'absolute',
        left: 24,
        top: 34
    },
    container: {
        width: 255,
        height:'100%',
        paddingTop: 32,
        // height: 'calc(100% - 32px)',
        backgroundColor: '#e2e4e1',
        borderWidth:'10px',
        borderStyle:'solid',
        borderColor:'rgba(0,64,255,0.69)'
    },
    containerMobile: {
        transition: 'left 0.5s, right 0.5s',
        position: 'absolute',
        width: 255,
        height: 'calc(100% - 32px)',
        zIndex: 901
    },
    mainContainer: {
        backgroundColor: '#e2e4e1',
        height: '100%',
        minHeight: '100vh'
    },
    mainContainerMobile: {
        position: 'absolute',
        width: '100vw',
        minWidth: '100%',
        top: 0,
        left: 0
    },
    menuItemList: {
        marginTop: 52
    },
    outsideLayer: {
        position: 'absolute',
        width: '100vw',
        minWidth: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,.50)',
        zIndex: 900
    },
    separator: {
        borderTop: '2px solid #000000',
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06
    },
    hide: {
        left: -255
    },
    show: {
        left: 0
    }
});

class SidebarComponent extends React.Component {

    state = { expanded: false };

    onItemClicked = (item) => {
        this.setState({ expanded: false });
        return this.props.onChange(item);
    }

    isMobile = () => window.innerWidth <= 768;

    toggleMenu = () => this.setState(prevState => ({ expanded: !prevState.expanded }));

    renderBurger = () => {
        return <div onClick={this.toggleMenu} className={css(styles.burgerIcon)}>
            <IconBurger />
        </div>
    }

    render() {
        const { expanded } = this.state;
        const isMobile = this.isMobile();
        return (
            <div style={{ position: 'relative' }}>
                <Row className={css(styles.mainContainer)} breakpoints={{ 768: css(styles.mainContainerMobile) }}>
                    {(isMobile && !expanded) && this.renderBurger()}
                    <Column className={css(styles.container)} breakpoints={{ 768: css(styles.containerMobile, expanded ? styles.show : styles.hide) }}>
                        <LogoComponent />
                        <div style={{ paddingBottom:"-80px" }} className={css(styles.separator)}></div>
                        <ProfileComponent/>
                        <div className={css(styles.separator)}></div>

                        <Column className={css(styles.menuItemList)}>

                            <div style={{ width: "100%",backgroundColor: '#e2e4e1', }}>
                                <Sidenav>
                                    <Sidenav.Body style={{backgroundColor: '#e2e4e1', }}>
                                        <MenuItemComponent
                                            content={'/dashboard'}
                                            title="Dashboard" icon={'img/Sidebar/dashboard.png'}
                                            onClick={() => this.onItemClicked('Dashboard')}
                                            active={this.props.selectedItem === 'Dashboard'}
                                        />
                                        <MenuItemComponent
                                            content={'/device'}
                                            title="Device" icon={'img/Sidebar/devices.png'}
                                            onClick={() => this.onItemClicked('Device')}
                                            active={this.props.selectedItem === 'Device'} />
                                        <MenuItemComponent
                                            content={'/map'}
                                            title="Map" icon={'img/Sidebar/map.png'}
                                            onClick={() => this.onItemClicked('Map')}
                                            active={this.props.selectedItem === 'Map'} />
                                        <MenuItemComponent
                                            content={'/vehicle'}
                                            title="Vehicle" icon={'img/Sidebar/vehicle.png'}
                                            onClick={() => this.onItemClicked('Vehicle')}
                                            active={this.props.selectedItem === 'Vehicle'} />
                                        <MenuItemComponent
                                            content={'/mail'}
                                            title="Mail" icon={'img/Sidebar/mail.png'}
                                            onClick={() => this.onItemClicked('Mail')}
                                            active={this.props.selectedItem === 'Mail'} />
                                        <MenuItemComponent
                                            content={'/reports'}
                                            title="Reports" icon={'img/Sidebar/reports.png'}
                                            onClick={() => this.onItemClicked('Reports')}
                                            active={this.props.selectedItem === 'Reports'} />
                                        <MenuItemComponent
                                            content={'/groups'}
                                            title="Groups" icon={'img/Sidebar/groups.png'}
                                            onClick={() => this.onItemClicked('Groups')}
                                            active={this.props.selectedItem === 'Groups'} />
                                        <MenuItemComponent
                                            content={'/payments'}
                                            title="Payments" icon={'img/Sidebar/payment.png'}
                                            onClick={() => this.onItemClicked('Payments')}
                                            active={this.props.selectedItem === 'Payments'} />

                                        <Dropdown title="User Accounts" icon={<Icon icon="magic" />} >
                                            <MenuItemComponent
                                                content={'/customer'}
                                                title="Customer" icon={'img/Sidebar/customer.png'}
                                                onClick={() => this.onItemClicked('Customer')}
                                                active={this.props.selectedItem === 'Customer'}
                                            />
                                            <MenuItemComponent
                                                content={'/createaccount'}
                                                title="Admin & View" icon={'img/Sidebar/createAccount.png'}
                                                onClick={() => this.onItemClicked('Create Account')}
                                                active={this.props.selectedItem === 'Create Account'} />
                                        </Dropdown>
                                        <div className={css(styles.separator)}></div>
                                        <MenuItemComponent
                                            content={'/trafficreport'}
                                            title="Traffic Report" icon={'img/Sidebar/trafficReport.png'}
                                            onClick={() => this.onItemClicked('Traffic Report')}
                                            active={this.props.selectedItem === 'Traffic Report'} />
                                        <MenuItemComponent
                                            content={'/'}
                                            title="Logout" icon={'img/Sidebar/logout.png'}
                                            onClick={() => this.onItemClicked('Logout')}
                                            active={this.props.selectedItem === 'Logout'} />

                                        {/*<Nav>*/}
                                        {/*    <Nav.Item  icon={<Icon icon="dashboard" />}>*/}
                                        {/*        Dashboard*/}
                                        {/*    </Nav.Item>*/}
                                        {/*    <Nav.Item eventKey="2" icon={<Icon icon="group" />}>*/}
                                        {/*        User Group*/}
                                        {/*    </Nav.Item>*/}
                                        {/*    <Dropdown title="Advanced" icon={<Icon icon="magic" />}>*/}
                                        {/*        <Dropdown.Item >Geo</Dropdown.Item>*/}
                                        {/*        <Dropdown.Item >Devices</Dropdown.Item>*/}
                                        {/*        <Dropdown.Item >Loyalty</Dropdown.Item>*/}
                                        {/*        <Dropdown.Item eventKey="3-4">Visit Depth</Dropdown.Item>*/}
                                        {/*    </Dropdown>*/}
                                        {/*    <Dropdown*/}
                                        {/*        eventKey="4"*/}
                                        {/*        title="Settings"*/}
                                        {/*        icon={<Icon icon="gear-circle" />}*/}
                                        {/*    >*/}
                                        {/*        <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>*/}
                                        {/*        <Dropdown.Item eventKey="4-2">Channels</Dropdown.Item>*/}
                                        {/*        <Dropdown.Item eventKey="4-3">Versions</Dropdown.Item>*/}
                                        {/*        <Dropdown.Menu eventKey="4-5" title="Custom Action">*/}
                                        {/*            <Dropdown.Item eventKey="4-5-1">Action Name</Dropdown.Item>*/}
                                        {/*            <Dropdown.Item eventKey="4-5-2">Action Params</Dropdown.Item>*/}
                                        {/*        </Dropdown.Menu>*/}
                                        {/*    </Dropdown>*/}
                                        {/*</Nav>*/}
                                    </Sidenav.Body>
                                </Sidenav>
                            </div>

















                            {/*<MenuItemComponent*/}
                            {/*    content={'/dashboard'}*/}
                            {/*    title="Dashboard" icon={'img/Sidebar/dashboard.png'}*/}
                            {/*    onClick={() => this.onItemClicked('Dashboard')}*/}
                            {/*    active={this.props.selectedItem === 'Dashboard'}*/}
                            {/*/>*/}
                            {/*<MenuItemComponent*/}
                            {/*    content={'/customer'}*/}
                            {/*    title="Customer" icon={'img/Sidebar/customer.png'}*/}
                            {/*    onClick={() => this.onItemClicked('Customer')}*/}
                            {/*    active={this.props.selectedItem === 'Customer'}*/}
                            {/*/>*/}
                            {/*<MenuItemComponent*/}
                            {/*    content={'/device'}*/}
                            {/*    title="Device" icon={'img/Sidebar/devices.png'}*/}
                            {/*    onClick={() => this.onItemClicked('Device')}*/}
                            {/*    active={this.props.selectedItem === 'Device'} />*/}
                            {/*<MenuItemComponent*/}
                            {/*    content={'/map'}*/}
                            {/*    title="Map" icon={'img/Sidebar/map.png'}*/}
                            {/*    onClick={() => this.onItemClicked('Map')}*/}
                            {/*    active={this.props.selectedItem === 'Map'} />*/}
                            {/*<MenuItemComponent*/}
                            {/*    content={'/vehicle'}*/}
                            {/*    title="Vehicle" icon={'img/Sidebar/vehicle.png'}*/}
                            {/*    onClick={() => this.onItemClicked('Vehicle')}*/}
                            {/*    active={this.props.selectedItem === 'Vehicle'} />*/}
                            {/*<MenuItemComponent*/}
                            {/*    content={'/mail'}*/}
                            {/*    title="Mail" icon={'img/Sidebar/mail.png'}*/}
                            {/*    onClick={() => this.onItemClicked('Mail')}*/}
                            {/*    active={this.props.selectedItem === 'Mail'} />*/}
                            {/*<MenuItemComponent*/}
                            {/*    content={'/reports'}*/}
                            {/*    title="Reports" icon={'img/Sidebar/reports.png'}*/}
                            {/*    onClick={() => this.onItemClicked('Reports')}*/}
                            {/*    active={this.props.selectedItem === 'Reports'} />*/}
                            {/*<MenuItemComponent*/}
                            {/*    content={'/groups'}*/}
                            {/*    title="Groups" icon={'img/Sidebar/groups.png'}*/}
                            {/*    onClick={() => this.onItemClicked('Groups')}*/}
                            {/*    active={this.props.selectedItem === 'Groups'} />*/}
                            {/*<div className={css(styles.separator)}></div>*/}
                            {/*<MenuItemComponent*/}
                            {/*    content={'/createaccount'}*/}
                            {/*    title="Create Account" icon={'img/Sidebar/createAccount.png'}*/}
                            {/*    onClick={() => this.onItemClicked('Create Account')}*/}
                            {/*    active={this.props.selectedItem === 'Create Account'} />*/}



                            {/*<MenuItemComponent*/}
                            {/*    content={'/trafficreport'}*/}
                            {/*    title="Traffic Report" icon={'img/Sidebar/trafficReport.png'}*/}
                            {/*    onClick={() => this.onItemClicked('Traffic Report')}*/}
                            {/*    active={this.props.selectedItem === 'Traffic Report'} />*/}
                            {/*<MenuItemComponent*/}
                            {/*    content={'/'}*/}
                            {/*    title="Logout" icon={'img/Sidebar/logout.png'}*/}
                            {/*    onClick={() => this.onItemClicked('Logout')}*/}
                            {/*    active={this.props.selectedItem === 'Logout'} />*/}
                        </Column>
                    </Column>
                    {isMobile && expanded && <div className={css(styles.outsideLayer)} onClick={this.toggleMenu}></div>}
                </Row>
            </div>
        );
    };
}

export default SidebarComponent;

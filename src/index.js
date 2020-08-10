import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'rsuite/dist/styles/rsuite-default.css';


import VehicleView from "./views/VehicleView.js";
import MapView from "./views/MapView.js";
import DashboardView from "./views/DashboardView.js";
import AdminView from "./views/AdminView.js";
import DeviceView from "./views/DeviceView.js";
import CustomerView from "./views/CustomerView.js";
import LoginView from "./views/LoginView.js";
import MailView from "./views/MailView.js";
import ReportsView from "./views/ReportsView.js";
import GroupsView from "./views/GroupsView.js";
import NotificationView from "./views/NotificationView.js";
import CreateAccountView from "./views/CreateAccountView.js";
import TrafficReportView from "./views/TrafficReportView.js";
import NumberOfUsersView from "./views/NumberOfUsersView.js";
import LocationViewReport from "./views/LocationViewReport.js";
import SalesView from "./views/SalesView.js";
import GeozoneReportView from "./views/GeozoneReportView.js";
import OverSpeedView from "./views/OverSpeedView.js";
import HighestSpeedView from "./views/HighestSpeedView.js";
import TotalIdleTimeView from "./views/TotalIdleTimeView.js";
import TotalNumberOfTripsView from "./views/TotalNumberOfTripsView.js";
import TotalDistanceView from "./views/TotalDistanceView.js";
import ActivityReportView from "./views/ActivityReportView.js";
import FuelReportView from "./views/FuelReportView.js";
import GeneralSummaryView from "./views/GeneralSummaryView.js";
import PaymentsView from "./views/PaymentsView.js";
import TripsDetailView from "./views/TripsDetailView.js";
import PremiumUserView from "./views/PremiumUserView.js";






import App from './App';



ReactDOM.render(

    <BrowserRouter>
        <Switch>
            <Route path="/" exact render={props => <LoginView {...props} />} />

            <Route path="/vehicle" exact render={props => <VehicleView {...props} />} />
            <Route path="/map" exact render={props => <MapView {...props} />} />
            <Route path="/dashboard" exact render={props => <DashboardView {...props} />} />
            <Route path="/admin" exact render={props => <AdminView {...props} />} />
            <Route path="/device" exact render={props => <DeviceView {...props} />} />
            <Route path="/customer" exact render={props => <CustomerView {...props} />} />
            <Route path="/mail" exact render={props => <MailView {...props} />} />
            <Route path="/reports" exact render={props => <ReportsView {...props} />} />
            <Route path="/groups" exact render={props => <GroupsView {...props} />} />
            <Route path="/notification" exact render={props => <NotificationView {...props} />} />
            <Route path="/createaccount" exact render={props => <CreateAccountView {...props} />} />
            <Route path="/trafficreport" exact render={props => <TrafficReportView {...props} />} />
            <Route path="/payments" exact render={props => <PaymentsView {...props} />} />
            <Route path="/premiumuser" exact render={props => <PremiumUserView {...props} />} />

            <Route path="/numberofusers" exact render={props => <NumberOfUsersView {...props} />} />
            <Route path="/locationreport" exact render={props => <LocationViewReport {...props} />} />
            <Route path="/sales" exact render={props => <SalesView {...props} />} />
            <Route path="/geozone" exact render={props => <GeozoneReportView {...props} />} />
            <Route path="/overspeed" exact render={props => <OverSpeedView {...props} />} />
            <Route path="/highestspeed" exact render={props => <HighestSpeedView {...props} />} />
            <Route path="/totalideltime" exact render={props => <TotalIdleTimeView {...props} />} />
            <Route path="/totalnumberoftrips" exact render={props => <TotalNumberOfTripsView {...props} />} />
            <Route path="/totaldistance" exact render={props => <TotalDistanceView {...props} />} />
            <Route path="/activityreport" exact render={props => <ActivityReportView {...props} />} />
            <Route path="/fuelreport" exact render={props => <FuelReportView {...props} />} />
            <Route path="/generalsummary" exact render={props => <GeneralSummaryView {...props} />} />
            <Route path="/tripsdetail" exact render={props => <TripsDetailView {...props} />} />



            <Redirect to="/" />
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);
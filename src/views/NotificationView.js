import React from "react";
import NotificationViewComponent from "../components/NotificationViewComponent/NotificationViewComponent.js";


import resumeData from "./resumeData.js";

class MapView extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }
    render() {
        return (
            <>

                <main ref="main">
                    <NotificationViewComponent resumeData={resumeData}/>

                </main>
            </>
        );
    }
}

export default MapView;

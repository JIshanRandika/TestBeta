import React from "react";
import MailViewComponent from "../components/MailViewComponent/MailViewComponent.js";


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
                    <MailViewComponent resumeData={resumeData}/>

                </main>
            </>
        );
    }
}

export default MapView;

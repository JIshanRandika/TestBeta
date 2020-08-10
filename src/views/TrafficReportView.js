import React from "react";
import TrafficReportViewComponent from "../components/TrafficReportViewComponent/TrafficReportViewComponent.js";


import resumeData from "./resumeData.js";

class TrafficReportView extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }
    render() {
        return (
            <>

                <main ref="main">
                    <TrafficReportViewComponent resumeData={resumeData}/>

                </main>
            </>
        );
    }
}

export default TrafficReportView;

import React from "react";
import ActivityReportViewComponent from "../components/ActivityReportViewComponent/ActivityReportViewComponent.js";


import resumeData from "./resumeData.js";

class ActivityReportView extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }
    render() {
        return (
            <>
                <main ref="main">
                    <ActivityReportViewComponent resumeData={resumeData}/>
                </main>
            </>
        );
    }
}

export default ActivityReportView;

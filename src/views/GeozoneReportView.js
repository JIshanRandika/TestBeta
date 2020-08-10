import React from "react";
import GeozoneReportViewComponent from "../components/GeozoneReportViewComponent/GeozoneReportViewComponent.js";


import resumeData from "./resumeData.js";

class GeozoneReportView extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }
    render() {
        return (
            <>
                <main ref="main">
                    <GeozoneReportViewComponent resumeData={resumeData}/>
                </main>
            </>
        );
    }
}

export default GeozoneReportView;

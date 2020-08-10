import React from "react";
import GeneralSummaryViewComponent from "../components/GeneralSummaryViewComponent/GeneralSummaryViewComponent.js";


import resumeData from "./resumeData.js";

class GeneralSummaryView extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }
    render() {
        return (
            <>
                <main ref="main">
                    <GeneralSummaryViewComponent resumeData={resumeData}/>
                </main>
            </>
        );
    }
}

export default GeneralSummaryView;

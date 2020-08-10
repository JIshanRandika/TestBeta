import React from "react";
import ReportsViewComponents from "../components/ReportsViewComponents/ReportsViewComponents.js";


import resumeData from "./resumeData.js";

class ReportsView extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }
    render() {
        return (
            <>
                <main ref="main">
                    <ReportsViewComponents resumeData={resumeData}/>
                </main>
            </>
        );
    }
}

export default ReportsView;

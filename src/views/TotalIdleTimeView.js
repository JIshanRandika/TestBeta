import React from "react";
import TotalIdleTimeViewComponent from "../components/TotalIdleTimeViewComponent/TotalIdleTimeViewComponent.js";


import resumeData from "./resumeData.js";

class TotalIdleTimeView extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }
    render() {
        return (
            <>

                <main ref="main">
                    <TotalIdleTimeViewComponent resumeData={resumeData}/>

                </main>
            </>
        );
    }
}

export default TotalIdleTimeView;

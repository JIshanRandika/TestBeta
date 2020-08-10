import React from "react";
import TotalDistanceViewComponent from "../components/TotalDistanceViewComponent/TotalDistanceViewComponent.js";


import resumeData from "./resumeData.js";

class TotalDistanceView extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }
    render() {
        return (
            <>

                <main ref="main">
                    <TotalDistanceViewComponent resumeData={resumeData}/>

                </main>
            </>
        );
    }
}

export default TotalDistanceView;

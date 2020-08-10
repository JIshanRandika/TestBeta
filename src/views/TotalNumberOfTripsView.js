import React from "react";
import TotalNumberOfTripsComponent from "../components/TotalNumberOfTripsComponent/TotalNumberOfTripsComponent.js";


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
                    <TotalNumberOfTripsComponent resumeData={resumeData}/>

                </main>
            </>
        );
    }
}

export default TotalIdleTimeView;

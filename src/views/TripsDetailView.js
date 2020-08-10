import React from "react";
import TripsDetailViewComponent from "../components/TripsDetailViewComponent/TripsDetailViewComponent.js";


import resumeData from "./resumeData.js";

class TripsDetailView extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }
    render() {
        return (
            <>

                <main ref="main">
                    <TripsDetailViewComponent resumeData={resumeData}/>
                </main>
            </>
        );
    }
}

export default TripsDetailView;

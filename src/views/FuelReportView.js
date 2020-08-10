import React from "react";
import FuelReportComponent from "../components/FuelReportComponent/FuelReportComponent.js";


import resumeData from "./resumeData.js";

class FuelReportView extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }
    render() {
        return (
            <>
                {/*<Promotions/>*/}
                {/*<Navgationbar/>*/}

                <main ref="main">
                    <FuelReportComponent resumeData={resumeData}/>

                </main>
            </>
        );
    }
}

export default FuelReportView;

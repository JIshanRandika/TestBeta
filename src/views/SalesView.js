import React from "react";
import SalesViewComponent from "../components/SalesViewComponent/SalesViewComponent.js";


import resumeData from "./resumeData.js";

class SalesView extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }
    render() {
        return (
            <>

                <main ref="main">
                    <SalesViewComponent resumeData={resumeData}/>

                </main>
            </>
        );
    }
}

export default SalesView;

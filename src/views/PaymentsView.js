import React from "react";
import PaymentsViewComponent from "../components/PaymentsViewComponent/PaymentsViewComponent.js";


import resumeData from "./resumeData.js";

class PaymentsView extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }
    render() {
        return (
            <>

                <main ref="main">
                    <PaymentsViewComponent resumeData={resumeData}/>

                </main>
            </>
        );
    }
}

export default PaymentsView;

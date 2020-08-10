import React from "react";
import PremiumUserViewComponent from "../components/PremiumUserViewComponent/PremiumUserViewComponent.js";


import resumeData from "./resumeData.js";

class PremiumUserView extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }
    render() {
        return (
            <>

                <main ref="main">
                    <PremiumUserViewComponent resumeData={resumeData}/>

                </main>
            </>
        );
    }
}

export default PremiumUserView;

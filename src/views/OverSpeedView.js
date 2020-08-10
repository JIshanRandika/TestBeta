import React from "react";
import OverSpeedComponent from "../components/OverSpeedComponent/OverSpeedComponent.js";


import resumeData from "./resumeData.js";

class NumberOfUsersView extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }
    render() {
        return (
            <>

                <main ref="main">
                    <OverSpeedComponent resumeData={resumeData}/>

                </main>
            </>
        );
    }
}

export default NumberOfUsersView;

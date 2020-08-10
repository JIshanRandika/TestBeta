import React from "react";
import HighestSpeedViewComponent from "../components/HighestSpeedViewComponent/HighestSpeedViewComponent.js";


import resumeData from "./resumeData.js";

class GroupsView extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }
    render() {
        return (
            <>
                <main ref="main">
                    <HighestSpeedViewComponent resumeData={resumeData}/>
                </main>
            </>
        );
    }
}

export default GroupsView;

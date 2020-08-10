import React from "react";
import GroupsViewComponent from "../components/GroupsViewComponent/GroupsViewComponent.js";


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
                    <GroupsViewComponent resumeData={resumeData}/>
                </main>
            </>
        );
    }
}

export default GroupsView;

import React from "react";
import DeviceViewComponent from "../components/DeviceViewComponent/DeviceViewComponent.js";


import resumeData from "./resumeData.js";

class DeviceView extends React.Component {
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
                    <DeviceViewComponent resumeData={resumeData}/>

                </main>
            </>
        );
    }
}

export default DeviceView;

import React from "react";
import VehicleViewComponent from "../components/VehicleViewComponent/VehicleViewComponent.js";
import SidebarComponent from "../components/SidebarComponent/SidebarComponent.js";


import resumeData from "./resumeData.js";

class VehicleView extends React.Component {
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
                    <VehicleViewComponent resumeData={resumeData}/>
                    {/*<SidebarComponent/>*/}
                </main>
            </>
        );
    }
}

export default VehicleView;

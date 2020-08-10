import React from "react";
import MapViewComponent from "../components/MapViewComponent/MapViewComponent.js";


import resumeData from "./resumeData.js";

class MapView extends React.Component {
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
                    <MapViewComponent resumeData={resumeData}/>

                </main>
            </>
        );
    }
}

export default MapView;

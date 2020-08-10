import React from "react";
import AdminViewComponent from "../components/AdminViewComponent/AdminViewComponent.js";


import resumeData from "./resumeData.js";

class AdminView extends React.Component {
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
                    <AdminViewComponent resumeData={resumeData}/>

                </main>
            </>
        );
    }
}

export default AdminView;

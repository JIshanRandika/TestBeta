import React from "react";
import CreateAccountViewComponent from "../components/CreateAccountViewComponent/CreateAccountViewComponent.js";


import resumeData from "./resumeData.js";

class CustomerView extends React.Component {
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
                    <CreateAccountViewComponent resumeData={resumeData}/>

                </main>
            </>
        );
    }
}

export default CustomerView;

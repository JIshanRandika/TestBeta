import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ColumnChart extends Component {
    render() {
        const options = {
            title: {
                text: ""
            },
            animationEnabled: true,
            data: [
                {
                    // Change type to "doughnut", "line", "splineArea", etc.
                    type: "column",
                    dataPoints: [
                        { label: "Jan",  y: 10  },
                        { label: "Feb", y: 15  },
                        { label: "Mar", y: 25  },
                        { label: "Apl",  y: 30  },
                        { label: "May",  y: 28  },
                        { label: "Jun",  y: 10  },
                        { label: "Jul", y: 15  },
                        { label: "Aug", y: 25  },
                        { label: "Sep",  y: 30  },
                        { label: "Oct",  y: 28  },
                        { label: "Nov",  y: 30  },
                        { label: "Des",  y: 28  }
                    ]
                }
            ]
        }

        return (
            <div>
                <CanvasJSChart options = {options}
                    /* onRef={ref => this.chart = ref} */
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }
}

export default ColumnChart;
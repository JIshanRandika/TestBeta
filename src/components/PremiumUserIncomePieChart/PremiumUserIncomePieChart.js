import React from 'react';
import ApexCharts from 'apexcharts'
import Chart from 'react-apexcharts'
import MapViewComponent from "../MapViewComponent/MapViewComponent";

class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [10, 20, 30, 25, 15],
            options: {
                chart: {
                    type: 'donut',
                },
                labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
                // responsive: [{
                //     breakpoint: 480,
                //     options: {
                //         chart: {
                //             width: 10
                //         },
                //         legend: {
                //             position: 'bottom'
                //         }
                //     }
                // }]
            },


        };
    }

    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //
    //         series: [10, 20, 30, 15, 25],
    //         options: {
    //             chart: {
    //                 width: 380,
    //                 type: 'donut',
    //                 dropShadow: {
    //                     enabled: true,
    //                     color: '#111',
    //                     top: -1,
    //                     left: 3,
    //                     blur: 3,
    //                     opacity: 0.2
    //                 }
    //             },
                // stroke: {
                //     width: 0,
                // },
                // plotOptions: {
                //     pie: {
                //         donut: {
                //             labels: {
                //                 show: true,
                //                 total: {
                //                     showAlways: true,
                //                     show: true
                //                 }
                //             }
                //         }
                //     }
                // },
                // labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
                // dataLabels: {
                //     dropShadow: {
                //         blur: 3,
                //         opacity: 0.8
                //     }
                // },
                // fill: {
                //     type: 'pattern',
                //     opacity: 1,
                //     pattern: {
                //         enabled: true,
                //         style: ['verticalLines', 'squares', 'horizontalLines', 'circles','slantedLines'],
                //     },
                // },
                // states: {
                //     hover: {
                //         filter: 'none'
                //     }
                // },
                // theme: {
                //     palette: 'palette2'
                // },
                // title: {
                //     text: "Favourite Movie Type"
                // },
                // responsive: [{
                //     breakpoint: 480,
                //     options: {
                //         chart: {
                //             width: 200
                //         },
                //         legend: {
                //             position: 'bottom'
                //         }
                //     }
                // }]
    //         },
    //
    //
    //     };
    // }


    render() {
        return (


            <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="donut" />
            </div>
        );
    }
}

export default ApexChart;

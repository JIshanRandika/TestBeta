import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Vehicle ID', field: 'vehicleid' },
            { title: 'Type', field: 'type' },
            { title: 'Fuel Capacity (L)', field: 'fuelcapacity', type: 'numeric' },
            { title: 'Speed (KPM)', field: 'speed', type: 'numeric' },
            // {
            //     title: 'Birth Place',
            //     field: 'birthCity',
            //     lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
            // },
        ],
        data: [
            { vehicleid: '1245JI', type: 'Bus', fuelcapacity: 50, speed: 2 },
            { vehicleid: '1246JI', type: 'Car', fuelcapacity: 20, speed: 8 },
            { vehicleid: '1247JI', type: 'Van', fuelcapacity: 10, speed: 2 },

        ],
    });

    return (
        <MaterialTable
            title="Vehicle Table"
            columns={state.columns}
            data={state.data}
            editable={{
                onRowAdd: (newData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            setState((prevState) => {
                                const data = [...prevState.data];
                                data.push(newData);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            setState((prevState) => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData), 1);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
            }}
        />
    );
}

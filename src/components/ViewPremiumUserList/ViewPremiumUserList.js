import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Customer ID', field: 'customerid' },
            { title: 'Vehicle ID', field: 'vehicleid' },
            { title: 'Mobile', field: 'mobile' },
            {
                title: 'Type',
                field: 'type',
                lookup: { 34: 'Corporate', 63: 'Individual' },
            },
            { title: 'Email', field: 'email' },
            {
                title: 'Active/Deactive',
                field: 'activestaus',
                lookup: { 35: 'Active', 64: 'Deactive' },
            },
            // { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
            // {
            //     title: 'Birth Place',
            //     field: 'birthCity',
            //     lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
            // },
        ],
        data: [
            { customerid: 'JI1234', vehicleid: 'ND2426', type: 63, email: 'jishanrandika@gmail.com',activestaus: 35 },
            { customerid: 'JI1235', vehicleid: 'ND3626', type: 34, email: 'jirandika@gmail.com',activestaus: 64 },

        ],
    });

    return (
        <MaterialTable
            title="View Premium User Table"
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

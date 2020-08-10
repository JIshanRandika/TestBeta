import React from 'react';
// import { withStyles,makeStyles } from '@material-ui/core/styles';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import {Col, Row} from "reactstrap";
import {Card} from "react-bootstrap";
import {Toggle} from "rsuite";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";


// import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import {withStyles} from "@material-ui/core";
import {green} from "@material-ui/core/colors";

const GreenCheckbox = withStyles({
    root: {
        // color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Checkbox style={{marginLeft:"18px"}} color="default" {...props} />);


const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);


const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
        id: 'population',
        label: 'Population',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'density',
        label: 'Density',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
];

function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}

const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

export default function StickyHeadTable() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {/*{columns.map((column) => (*/}

                            {/*    <TableCell*/}
                            {/*        key={column.id}*/}
                            {/*        align={column.align}*/}
                            {/*        style={{ minWidth: column.minWidth }}*/}
                            {/*    >*/}
                            {/*        <div style={{fontSize: 8, color: '#A4A6B3'}}>*/}
                            {/*            VehicleRegID*/}
                            {/*        </div>*/}

                            {/*        /!*{column.label}*!/*/}
                            {/*    </TableCell>*/}
                            {/*))}*/}
                            <Row className="" style={{backgroundColor:"rgba(211,220,213,0.33)", marginTop:"0px"}}>
                                <Col className="columncenter">
                                    <div style={{fontSize: 12, color: '#A4A6B3'}}>
                                        {/*<Checkbox style={{Color:"rgba(211,220,213,0.33)"}}>DeviceID</Checkbox>*/}
                                        <FormControlLabel
                                            control={<GreenCheckbox  name="checkedG" />}
                                        />
                                    </div>
                                </Col>
                                <Col  className="columncenter">
                                    <div style={{fontSize: 12, color: '#A4A6B3'}}>
                                        DeviceID
                                    </div>
                                </Col>
                                <Col  className="columncenter">
                                    <div style={{fontSize: 12, color: '#A4A6B3'}}>
                                        VehicleRegID
                                    </div>
                                </Col>
                                <Col className="columncenter">
                                    <div style={{fontSize: 12, color: '#A4A6B3'}}>
                                        Device Name
                                    </div>
                                </Col>
                                <Col  className="columncenter">
                                    <div style={{fontSize: 12, color: '#A4A6B3'}}>
                                        Sim ID
                                    </div>
                                </Col>
                                <Col className="columncenter">
                                    <div style={{fontSize: 12, color: '#A4A6B3'}}>
                                        Device Port
                                    </div>
                                </Col>
                                <Col className="columncenter">
                                    <div style={{fontSize: 12, color: '#A4A6B3'}}>
                                        Device Price
                                    </div>
                                </Col>
                                <Col className="columncenter">
                                    <div style={{fontSize: 12, color: '#A4A6B3'}}>
                                        Condition
                                    </div>
                                </Col>
                                <Col className="columncenter">
                                    <div style={{fontSize: 12, color: '#A4A6B3'}}>
                                        RenewDate
                                    </div>
                                </Col>
                                <Col className="columncenter">
                                    <div style={{fontSize: 12, color: '#A4A6B3'}}>
                                        No of Renew
                                    </div>
                                </Col>
                                <Col className="columncenter">
                                    <div style={{fontSize: 12, color: '#A4A6B3'}}>
                                        (De)Active
                                    </div>
                                </Col>
                                <Col className="columncenter">
                                    <div style={{fontSize: 12, color: '#A4A6B3'}}>
                                        Allocate
                                    </div>
                                </Col>
                                <Col className="columncenter">
                                </Col>
                            </Row>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <StyledTableRow>
                                    <Row className="" style={{marginTop:"0px"}}>
                                        <Col className="columncenter">

                                            <div className="font-weight-bold" style={{fontSize: 12, color: '#000000'}}>
                                                {/*<Checkbox className="font-weight-bold">D1234</Checkbox>*/}
                                                <FormControlLabel
                                                    control={<GreenCheckbox  name="checkedG" />}
                                                />
                                            </div>
                                        </Col>
                                        <Col className="columncenter">
                                            <div className="font-weight-bold" style={{fontSize: 12, color: '#000000'}}>
                                                D1234
                                            </div>
                                        </Col>
                                        <Col className="columncenter">
                                            <div className="font-weight-bold" style={{fontSize: 12, color: '#000000'}}>
                                                ND1234
                                            </div>
                                        </Col>
                                        <Col className="columncenter">
                                            <div className="font-weight-bold columncenter" style={{fontSize: 12, color: '#000000'}}>
                                                Tk100
                                            </div>
                                        </Col>
                                        <Col className="columncenter">
                                            <div className="font-weight-bold" style={{fontSize: 12, color: '#000000'}}>
                                                12345
                                            </div>
                                        </Col>
                                        <Col className="columncenter">
                                            <div className="font-weight-bold" style={{fontSize: 12, color: '#000000'}}>
                                                8080
                                            </div>
                                        </Col>
                                        <Col className="columncenter">
                                            <div className="font-weight-bold" style={{fontSize: 12, color: '#000000'}}>
                                                1234LKR
                                            </div>
                                        </Col>
                                        <Col className="columncenter">
                                            <div className="font-weight-bold" style={{fontSize: 12, color: '#000000'}}>
                                                Good
                                            </div>
                                        </Col>
                                        <Col className="columncenter">
                                            <div className="font-weight-bold" style={{fontSize: 12, color: '#000000'}}>
                                                2020/01/01
                                            </div>
                                        </Col>
                                        <Col className="columncenter">
                                            <div className="font-weight-bold" style={{fontSize: 12, color: '#000000',borderWidth:'1px', borderStyle:'solid',width:"10px",borderColor:'rgba(188,188,191,0.69)'}}>
                                                2
                                            </div>
                                        </Col>
                                        <Col className="columncenter">
                                            <div className="font-weight-bold" style={{fontSize: 12, color: '#000000'}}>
                                                <Toggle size="sm" />
                                            </div>
                                        </Col>
                                        <Col className="columncenter">
                                            <div className="font-weight-bold" style={{fontSize: 12, color: '#000000'}}>
                                                Pending
                                            </div>
                                        </Col>
                                        <Col className="columncenter">
                                            <div className="font-weight-bold columncenter" style={{fontSize: 12, color: '#feffff', backgroundColor:"rgb(0,4,255)",width:"25px",height:"20px"}}>
                                                Edit
                                            </div>
                                        </Col>
                                    </Row>

                                </StyledTableRow>

                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

import React from 'react';
import List from "./List";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap'


const TableData = ({data, onDeleteItem}) => {
    return (
        <Table striped>
            <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {data.map(dat => {
                return (
                    <List key ={dat.id} dat={dat} onDeleteItem = {onDeleteItem}/>
                )
            })}
            </tbody>
        </Table>


    );
};

export default TableData;
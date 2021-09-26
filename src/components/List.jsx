import React from 'react';
import { Button } from 'reactstrap'
const List = ({dat, onDeleteItem}) => {
    return (
        <tr key={dat.id}>
            <td>{dat.name}</td>
            <td>{dat.username}</td>
            <td>{dat.email}</td>
            <td>{dat.phone}</td>
            <td>{dat.website}</td>
            <td><Button color='danger' onClick={() => onDeleteItem(dat.id)}>Удоли</Button></td>
        </tr>
    );
};

export default List;
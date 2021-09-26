import React, {useState} from 'react';
import {Form, FormGroup, Input, Label} from "reactstrap";
import Button from "reactstrap/es/Button";

const Inputs = ({data, setData}) => {

    const [personData, setPersonData] = useState({name:'', surname: '', email: ''})

    const addNewPerson = (e) => {
        e.preventDefault()
        setData([...data, {...personData, id: Date.now()}])
        setPersonData({name:'', surname: '', email: ''})
    }

    return (
        <div style={{border: '1px solid black',marginBottom: '2px'}}>
            <Form style={{width: "auto", display:'flex', margin: 5, justifyContent: 'space-between'}}>
                <FormGroup>
                    <Label for="exampleEmail">Name</Label>
                    <Input value={personData.name || ''}
                           onChange={event => setPersonData({...personData,name: event.target.value})}
                           type="text" name="email"
                           placeholder="Name" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">UserName</Label>
                    <Input
                        value={personData.username || ''}
                        onChange={e=>setPersonData({...personData, username: e.target.value})}
                        type="text"
                        name="email"
                        placeholder="UserName" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                        value={personData.email || ''}
                        onChange={e=>setPersonData({...personData, email: e.target.value})}
                        type="text"
                        name="email"
                        placeholder="Email" />
                </FormGroup>
                <Button
                    type="submit"
                    color='success'
                    style={{height: 45, margin:15 }}
                    onClick={addNewPerson}
                >Add</Button>
            </Form>
        </div>

    );
};

export default Inputs;
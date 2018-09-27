import React from 'react';

const Person = (props) => {
    return (
        <div>
            <p onClick={props.delPerson}>Person Name: {props.name}</p>
            <p>Person Id: {props.id}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    );
}

export default Person;
import React from 'react';

import Person from './Person/Person';

const Persons = (props) => props.persons.map((person, index) => {
    return <Person 
    id={person.id}
    name={person.name}
    key={person.id}
    change={(event) => props.changed(event, person.id)}
    delPerson={() => props.clicked(index)}
    />
  });
   
export default Persons;
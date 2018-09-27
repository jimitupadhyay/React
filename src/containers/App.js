import React, { Component } from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person'
import ValidationComponent from '../components/ValidationComponent'
import CharComponent from '../components/CharComponent'

class App extends Component {

  state = {
    Persons: [
      {id: '1234', name: 'JIMIT'},
      {id: 'swsw', name: 'ABCD'}
    ],
    otherstate: '',
    stringArray: [],
    toggleButton: false
  }

  showHidePersons = () => {
    this.setState({
      toggleButton : !this.state.toggleButton
    });
  }

  changeName = (event, id) => {
    console.log(id);
    
    const personIndex = this.state.Persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.Persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.Persons];

    persons[personIndex] = person;

    this.setState({
      Persons: persons
      
    });

    

  }

  deletePersonHandler = (val) => {
    const persons = [...this.state.Persons];
    

    persons.splice(val, 1);

    this.setState({ Persons : persons });
    console.log(val);
  }

  countStringLength = (event) => {
    const str = event.target.value;

    this.setState({
      otherstate: str.length,
      stringArray: str.split('')
    });

  }


  removeCharHandler = (event, index) => {
    const chars = [...this.state.stringArray]

    chars.splice(index, 1);

    this.setState({
      otherstate: chars.length,
      stringArray: chars
    });
    
  }


  render() {

    let persons = null;
    if (this.state.toggleButton) {

      persons = (
        <div>
            { this.state.Persons.map((person, index) => {
                return <Person 
                id={person.id}
                name={person.name}
                key={person.id}
                change={(event) => this.changeName(event, person.id)}
                delPerson={() => this.deletePersonHandler(index)}
                />
              })
              
            }
        </div>
      );

    }


    return (
      <div className="App">
        <h1>Assignments </h1>
        <label>Enter Person Name: </label><input type="text" name="assignment" value={this.state.stringArray.join('')} onChange={(event) => this.countStringLength(event)} />

        <ValidationComponent answer={this.state.otherstate} />
        <div>
          {
            this.state.stringArray.map((s,index) => {
              return <CharComponent
              charValue={s}
              key={index}
              click={(event) => this.removeCharHandler(event, index)}
              />
            })
          }
        </div>







        <p>THis is an application</p>

        <button onClick={() => this.showHidePersons()}>{(this.state.toggleButton) ? 'Hide' : 'Show'} the person</button> 


        {persons}

      </div>
    );
  }
}

export default App;


import React from 'react';

const ValidatinComponent = (props) => {
    
    return (
        <div>
            <p>Answer is {props.answer}</p>
            <p>{
                (props.answer !=='') ?
                    (props.answer < 5) ? 'Text is too short': 'Text is too long'
                :
                    ''
                
            }</p>
            
        </div>
    );
}

export default ValidatinComponent;
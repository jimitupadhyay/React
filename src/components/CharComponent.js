import React from 'react';

const CharComponent = (props) => {
    
    const style = {
        'display': 'inline-block',
        'padding': '16px',
        'textAlign': 'center',
        'margin':'16px',
        'border': '1px solid'

    };

    return(

        
        <div className="char" style={style} onClick={props.click} >
            <p> {props.charValue} </p>
            
        </div>
     
    );

}


export default CharComponent;
import React from 'react';


function Display(props){
  return <div>
            <button onClick={props.getImage}> Get Image </button>
         </div>
}

export default Display;

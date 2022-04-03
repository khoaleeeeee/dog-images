import React from 'react';

function Photo(props){
  return <div>
            <img className='photo'style={{height: '400px', width: '400px'}} src={props.imageLink}/>
         </div>
}

export default Photo;

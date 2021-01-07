import React from 'react';
import titleForHeader from '../Helper/titleForHeader';

export default (props) => {

 let title = '';

 console.log('====================================');
 console.log(props);
 console.log('====================================');

 console.log(props.pathname);
  title = titleForHeader(props.pathname)

  return (
    <div>
      <header>
        <h1>{title}</h1>
      </header>
    </div>
  )
}


import React from 'react';

const Button = ({buttonDisplayName, nextQuoteClickHandler})=> {
   return  <button onClick={nextQuoteClickHandler}> {buttonDisplayName}</button>
}

export default Button;
import React, { useState, createContext } from 'react';

const ErrorContext = createContext();

const ErrorProvider = (props) => {
  const [error, setError] = useState({
    message: "",
    status: ""
  });
  return (
   <ErrorContext.Provider
    value={ [error, setError] }
   >
       {props.children}
   </ErrorContext.Provider>
)
}

export {ErrorContext, ErrorProvider};

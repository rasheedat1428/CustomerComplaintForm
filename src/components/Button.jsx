import React from 'react'
import CustomerContext from '../context/forms';
import { CHANGE_SHOW_FORM } from '../context/types';

const Button = () => {
  const {state, dispatch} = React.useContext(CustomerContext);

  const label = state.showForm ? "Add Form" : "Add Complaint";
  const color = state.showForm ? "gray" : "purple"
  
  const handleClick = () => {
    dispatch({type: CHANGE_SHOW_FORM});
  };
  return (
    <button
    onClick={handleClick}
      className='btn'
      style={{backgroundColor: color}}>
      {label}
    </button>
  );
};

export default Button;
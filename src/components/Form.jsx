import React from 'react';
import {FaTrash, FaList, FaClock,FaEnvelopeOpenText} from "react-icons/fa";
import CustomerContext from '../context/forms';
import { DELETE, UPDATE } from '../context/types';



const Form = ({ form }) => {
  const {dispatch} = React.useContext(CustomerContext);

  const handleDbClick = () => {
    dispatch({type: UPDATE, payload: form.id})
  };
  const handleDelete = ()=> {
    dispatch({type: DELETE, payload: form.id})
  };
  return (
    <div 
     className={`form ${form.status ? "status" : ""}`}
     onDoubleClick={handleDbClick} >
     <FaList />
      <h3>
        {form.text} 
      <FaTrash 
      style={{color: "green", cursor: "pointer"}}
      onClick={handleDelete}
      />
      </h3>
      <p> <FaClock /> {form.day}</p>
      <p style={{color: 'black'}}><FaEnvelopeOpenText style={{color: "black"}} /> {form.complaint}</p>
    </div>
  );
};

export default Form;
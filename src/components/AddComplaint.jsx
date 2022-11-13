import React, { Fragment } from 'react'
import CustomerContext from '../context/forms'
import { ADD } from '../context/types';
import { generateId } from '../utility/formUtility';

const AddComplaint = () => {
  const defaultValue = {
    text: "",
    day: "",
    status: false,
    complaint: "",
  };

  const {state, dispatch} = React.useContext(CustomerContext);
  const [formValues, setFormValues] = React.useState(defaultValue);
  const [isError, setIsError] = React.useState({text: false, day: false, complaint: false});

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsError({...isError, 
      text: !formValues.text, 
      day: !formValues.day, 
      complaint: !formValues.complaint})

    if (!formValues.text || !formValues.day || !formValues.complaint) {
      return;
    }

    const payload = {...formValues, id: generateId(state.forms)};
    

    dispatch({type: 
      ADD, payload});
    setFormValues(defaultValue);
  };

  return (
    <Fragment>
      {state.showForm && (
    <form className='add-form' onSubmit={handleSubmit}>
    <div className='form-control'>
      <label>Customer Name</label>
      <input 
      style={{borderColor: isError.text && "red"}}
      type="text"
      placeholder=" Customer's Name"
      value={formValues.text}
      onChange={(e) => setFormValues({...formValues, text: e.target.value})}
      />
      {isError.text && <span style={{color: "red"}}>Please Add a Name</span>}
    </div>
    <div className='form-control'>
      <label>Date of Complaint</label>
      <input 
      style={{borderColor: isError.day && "red"}}
      type="text"
      placeholder=" Add Date of complaint"
      value={formValues.day}
      onChange={(e) => setFormValues({...formValues, day: e.target.value})}
      />
      {isError.day && <span style={{color: "red"}}>Please Add Date of Complaint</span>}
    </div>
    <div className='form-control'>  
      <label>Complaint</label>
     
      <textarea 
      style={{borderColor: isError.complaint && "red"}}
      rows={6} 
      cols={72}  
      placeholder="Please write the complaint"
      value={formValues.complaint}
      onChange={(e) => setFormValues({...formValues, complaint: e.target.value })}
      />
       {isError.complaint && <span style={{color: "red"}}>Please Write a complaint</span>}
      </div>
    <div className='form-control form-control-check'>
      <label>Status</label>
      <input 
      type="checkbox"
      checked={formValues.status}
      onChange={(e) => setFormValues({...formValues, status: e.currentTarget.checked})}
      />
    </div>
    <input type="submit" value="Save Task" className='btn btn-block'/>
    </form>
    )}
    </Fragment>
  );
};

export default AddComplaint;
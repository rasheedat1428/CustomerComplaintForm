import React from 'react'
import CustomerContext from '../context/forms';
import Form from './Form';

const Forms = () => {
const {state} = React.useContext(CustomerContext);
const forms = state.forms;

  return (
    <div>
      {forms.length <= 0 && <p>No Form Record</p>}
      {forms.map((form) => (<Form key={form.id} form={form} />
      ))}
    </div>
  );
};

export default Forms
import React from 'react'
import Button from './Button';

const Header = ({title}) => {
  return (
    <header className='header'>
      <h1 style={{color: "purple"}}>{title}</h1>
      <Button />
    </header>
  );
};
Header.defaultProps = {
  title: "Customer Complaint Form"
}
export default Header;
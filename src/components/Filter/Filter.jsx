import React from 'react';
import PropTypes from 'prop-types';

const ContactFilter =({value, onChange})=> {
return(
    <>
    <h3>Find contacts by name</h3>
    <input type="text" value={value} onChange={onChange} />

    </>
)
}

ContactFilter.propTypes = {
 value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,  ]),
 onChange: PropTypes.func.isRequired    
       
}
export default ContactFilter
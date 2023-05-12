import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/ContactList/ContactList.module.css'
const ContactList =({visibleContact, onDelete})=>{
return(
     <ul className={styles.list}>
        {visibleContact.map(({id, name, number}) => (<li key={id} className={styles.item}>
       {name}:<span>{number}</span> 
       <button onClick={()=>{onDelete(id)}} className={styles.button}>Delete</button>
        </li> ))

        }
    </ul>
)
}

ContactList.propTypes ={
    visibleContact: PropTypes.arrayOf(PropTypes.object),
    onDelete: PropTypes.func.isRequired,
}
export default ContactList
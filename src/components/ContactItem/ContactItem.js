import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ contact, onRemoveContact }) => {
 
  return (
    <li>
      <p>
        {contact.data.name}: {contact.data.phone}
      </p>
      <button onClick={() => onRemoveContact(contact.id)} type="button">
        Remove
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactItem;


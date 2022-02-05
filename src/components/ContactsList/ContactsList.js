
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/contacts-operations';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({ contacts, onRemoveContact, onfetch}) => {
  
  useEffect(() => {
    onfetch(); 
  }, [])

  return (
    <ul>
      {contacts.map(contact => ( contact.map(c=>(<ContactItem key={c.id} contact={c} onRemoveContact={onRemoveContact} />))
        
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => {
  const { items, filter } = state.contacts;

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = items.map(((item) =>
    item.filter(itm =>itm.name.toLowerCase().includes(normalizedFilter))
  ))

  return {
    contacts: filteredContacts,
  }
};

const mapDispatchToProps = dispatch => ({
  onRemoveContact: (id) => dispatch(deleteContact(id)),
  onFetch: ()=> dispatch(fetchContacts()),
});

export default connect(mapStateToProps,mapDispatchToProps)(ContactList);



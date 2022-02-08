
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/contacts-operations';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({ contacts, onRemoveContact, onfetch }) => {
  
  console.log('CONTACTS LIST:', contacts)
  // const ololo = contacts.map(c=>c.map(cc=>console.log('CC:',cc)))
  
  useEffect(() => {
    onfetch(); 
  }, [])

  return (
    <ul>
      { contacts.map(ct=>ct.map(contact=>(<ContactItem key={contact.id} contact={contact} onRemoveContact={onRemoveContact} />)))
        
      }
    </ul>
  );
};

const mapStateToProps = (state) => {

  console.log('STATE:',state)
  const { items, filter } = state.contacts;

  console.log('ITEMS:',items);
  const normalizedFilter = filter.toLowerCase();
  // console.log('NORMALIZE', normalizedFilter);

  const filteredContacts = items.map(((item) => {
    // console.log('II:',item.filter(itm=>itm.name.toLowerCase().includes(normalizedFilter)))
     return item.filter(itm =>itm.name.toLowerCase().includes(normalizedFilter))
  }
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



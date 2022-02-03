
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/action';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({ contacts, onRemoveContact }) => {
  
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} onRemoveContact={onRemoveContact} />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => {
  const { filter, items } = state.contacts;
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = items.filter(((item) =>
    item.data.name.toLowerCase().includes(normalizedFilter)))

  return {
    contacts: filteredContacts,
  }
};

const mapDispatchToProps = dispatch => ({
  onRemoveContact: (id) => dispatch(deleteContact(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(ContactList);



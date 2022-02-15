import React, { useEffect } from 'react';
import FormInput from './components/FormInput/FormInput';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';
import './App.css';
import { connect } from 'react-redux';
import { fetchContacts,} from '../src/redux/contacts-operations';

const App=({fetchContacts, contacts})=> {

   return (
      <>
       <h1>Phone Book</h1>
       <FormInput onfetch={fetchContacts}/>
        <h2>Contacts</h2>
       {contacts.length >=1 &&
         <Filter/>}
       <ContactsList onfetch={ fetchContacts }/>
      </>
    );
}

const mapStateToProps = (state) => ({
  contacts:state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
})

export default connect(mapStateToProps,mapDispatchToProps)(App)

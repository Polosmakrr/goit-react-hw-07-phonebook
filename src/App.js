import React from 'react';
import FormInput from './components/FormInput/FormInput';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';
import './App.css';
import { connect } from 'react-redux';


const App=(contacts)=> {

   return (
      <>
        <h1>Phone Book</h1>
        <FormInput />
        <h2>Contacts</h2>
       {contacts.contacts.length >= 1 &&
         <Filter/>}
       <ContactsList />
      </>
    );
}

const mapStateToProps = (state) => ({
  contacts:state.contacts.items,
});

export default connect(mapStateToProps)(App)

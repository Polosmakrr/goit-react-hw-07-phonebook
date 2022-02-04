import React, { useEffect } from 'react';
import FormInput from './components/FormInput/FormInput';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';
import './App.css';
import { connect } from 'react-redux';
import { deleteContact, fetchContacts,} from '../src/redux/contacts-operations';



const App=({fetchContacts})=> {


  // useEffect(() => {
  //   fetchContacts();

  //   console.log('GET START:');

  //   console.log(fetchContacts)
  // },[])
  

   return (
      <>
       <h1>Phone Book</h1>
        <FormInput />
        <h2>Contacts</h2>
       {/* {contacts.contacts.length >= 1 &&
         <Filter/>t} */}
       <ContactsList onfetch={ fetchContacts }/>
      </>
    );
}



// const mapStateToProps = (state) => ({
//   contacts:state.contacts.items,
// });

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
})

export default connect(null,mapDispatchToProps)(App)

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../redux/contacts-operations';

const FormInput = ({onSubmit}) =>{
  
  const [name,setName] = useState('');
  const [phone,setPhone] = useState('');

  const hendleNameChange = event => {
    setName(event.target.value);
  };
  const hendlePhoneChange = event => {
    setPhone(event.target.value);
  };

   const hendleSave = event => {
     event.preventDefault();

     onSubmit({ name, phone });
     
     reset();
   };
  
   const reset = () => {
     setName('');
     setPhone('');
    };
  
  return (
    <form onSubmit={hendleSave}>
         <label>
           Name
           <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={hendleNameChange}
          />
        </label>
        <br />
        <label>
          Phone
          <input
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={phone}
            onChange={hendlePhoneChange}
          />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
  )
}

const mapDispatchToProps = dispatch => ({
  onSubmit:(nickName,phone)=>dispatch(addContact(nickName,phone))
})

export default connect(null,mapDispatchToProps)(FormInput);
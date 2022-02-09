import axios from "axios";
import *as actions from './action';

axios.defaults.baseURL = 'https://61fd3dd4f62e220017ce43e2.mockapi.io/api/v1/';

export const fetchContacts = () => dispatch => {

    dispatch(actions.fetchContactsRequest());

    axios.get('/contacts')

        .then(( {data} ) => {

            dispatch(actions.fetchContactsSuccess(data))
        })
        
        .catch(error =>

            dispatch(actions.fetchContactsError(error)))
};

export const addContact = (data) => dispatch => {

    dispatch(actions.addContactRequest());

    axios.post('/contacts', data)
        
        .then(({ data }) =>
            dispatch(actions.addContactSuccess(data)))
        
        .catch(error =>
            dispatch(actions.addContactError(error)))
    
};

export const deleteContact = (id) => dispatch => {

    dispatch(actions.deleteContactRequest());

    axios.delete(`/contacts/${id}`)
        .then(() => 
           dispatch(actions.deleteContactSuccess(id))
        )
    
    .catch(error=>dispatch(actions.deleteContactError(error)))

}
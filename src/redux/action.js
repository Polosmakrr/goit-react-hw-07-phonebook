import { createAction } from "@reduxjs/toolkit"

export const fetchContactsRequest = createAction('fetchRequest');
export const fetchContactsSuccess = createAction('fetchSaccess');
export const fetchContactsError = createAction('fetchError');

export const addContactRequest = createAction('addRequest');
export const addContactSuccess = createAction('addSaccess');
export const addContactError = createAction('addError');

export const deleteContactRequest = createAction('deleteRequest');
export const deleteContactSuccess = createAction('deleteSaccess');
export const deleteContactError = createAction('deleteError');





export const addFilter = createAction('ADD_FILTER');


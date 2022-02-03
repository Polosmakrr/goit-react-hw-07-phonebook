import { createAction, nanoid} from "@reduxjs/toolkit"

export const addContact = createAction('ADD_CONTACT', (data) => {
    return {
        payload: {
            id: nanoid(),
            data,
        }
    }
});

export const deleteContact = createAction('DELETE_CONTACT');

export const addFilter = createAction('ADD_FILTER');


import { combineReducers } from "@reduxjs/toolkit";

const items = (state = [], {type,payload} )=> {
    switch (type) {
        case 'ADD_CONTACT':
            
            return [...state, payload];

        case 'DELETE_CONTACT':
            
            return state.filter(cont=>cont.id !== payload);
        
       default: return state;
}
};

const filter = (state = '', { type, payload }) => {
    switch (type) {
        case 'ADD_FILTER':

            return payload
        
        default: return state;
    }
};
  
export default combineReducers({
    items:items,
    filter:filter,
});
import { combineReducers } from "@reduxjs/toolkit";

const items = (state = [], {type,payload} )=> {
    switch (type) {
        case 'addSuccess':
            return [...state, payload];

        case 'deleteSuccess':
            
            return state.filter(cont => cont.id !== payload);
        
        case 'fetchSuccess':
            return payload;
        
       default: return state;
}
};

const filter = (state = '', { type, payload }) => {
    switch (type) {
        case 'addFilter':

            return payload
        
        default: return state;
    }
};

const fetch = (_, { payload }) => {
    switch (type) {
        case 'fetchSaccess':
            return payload
        
        default: return state;
    }
};
  
export default combineReducers({
    items:items,
    filter:filter,
});
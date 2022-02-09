import { combineReducers} from "@reduxjs/toolkit";


const items = (state = [], {type,payload} )=> {
    switch (type) {
        case 'fetchSuccess': {return payload};
        
        case 'addSuccess':
            return  [...state,payload];

        case 'deleteSuccess':
            
            return state.filter(cont => cont.id !== payload);
               
       default: return state;
}
};

const filter = (state = '', { type, payload }) => {
    switch (type) {
        case 'changeFilter':

            return payload
        
        default: return state;
    }
};
  
const contactsReducer = combineReducers({
    items: items,
    filter: filter,
});

export default contactsReducer
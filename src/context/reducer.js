
import { ADD, CHANGE_SHOW_FORM, DELETE, UPDATE } from "./types";

export const reducer = (state, action) => {
    switch(action.type) {
        case ADD:
            return { ...state, forms: [state.forms, action.payload] }
        case DELETE:
            return {
                ...state, forms: state.forms.filter((f) => f.id !== action.payload)
            };
        case UPDATE:
            return {
                ...state, 
                forms: state.forms.map((obj) => {
                if (obj.id === action.payload) {
                    obj = {...obj, status: !obj.status}
                } 
                 return obj;
            })
            };
        case CHANGE_SHOW_FORM: 
            return {
        ...state, showForm: !state.showForm
        };
            default:
                return state;
    }
    };
        
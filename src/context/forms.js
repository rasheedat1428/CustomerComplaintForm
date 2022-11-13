import React, {useReducer, createContext} from "react";
import { reducer } from "./reducer";

const initialState = {
    forms: [],
    showForm: false,
};

const CustomerContext = createContext();

export const CustomerComplaint = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const store = {state, dispatch};
return (
    <CustomerContext.Provider value={store}>
        {props.children}
    </CustomerContext.Provider>
);
};
export default CustomerContext;
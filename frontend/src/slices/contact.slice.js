import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts: []
}

const contactslice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        loadcontacts: (state, action) => {
            state.contacts = action.payload
        }
    }
});


export default contactslice.reducer;

export const { loadcontacts } = contactslice.actions;
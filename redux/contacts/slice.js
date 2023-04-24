import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const contactsInitialState = {items: []};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact(state, action) {
            state.items.push({
                name: action.payload.name,
                number: action.payload.number,
            id: nanoid()});
        },
        removeContact(state, action) {
            // return state.filter(item => item.id !== action.payload);
            const index = state.items.findIndex(contact => contact.id === action.payload);
            state.items.splice(index, 1);
        },
    }
});

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
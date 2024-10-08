import { createSelector } from "@reduxjs/toolkit";
import { selectName } from "../filter/slice";


export const selectLoader = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectName],
  (contacts, nameFilter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }
);
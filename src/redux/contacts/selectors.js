import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "./slice";
import { selectName } from "../filter/slice";

export const selectFilteredContacts = createSelector(
  [selectContacts, selectName],
  (contacts, nameFilter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }
);
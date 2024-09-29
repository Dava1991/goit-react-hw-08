import { useSelector } from "react-redux";

import Contact from "./Contact/Contact";

import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <>
      {visibleContacts.map((item) => {
        return (
          <Contact
            key={item.id}
            name={item.name}
            number={item.number}
            id={item.id}
          />
        );
      })}
    </>
  );
};

export default ContactList;
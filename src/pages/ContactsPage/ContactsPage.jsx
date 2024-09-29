import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectError, selectLoader } from "../../redux/contacts/slice";

import style from "./ContactsPage.module.css";

export default function ContactsPage() {
  const loader = useSelector(selectLoader);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <h1 className={style.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loader && <Loader />}
      {error && <Error />}
      <ContactList />
    </div>
  );
}
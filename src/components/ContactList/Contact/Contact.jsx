import { FaUser, FaPhoneAlt } from "react-icons/fa";

import { useDispatch } from "react-redux";

import style from "./Contact.module.css";
import { deleteContact } from "../../../redux/contacts/operations";
const Contact = ({ number, name, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <p className={style.name}>
          <FaUser className={style.icon} /> {name}
        </p>
        <p className={style.number}>
          <FaPhoneAlt className={style.icon} /> {number}
        </p>
      </div>
      <button className={style.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
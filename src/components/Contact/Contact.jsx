import css from "./Contact.module.css";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";

export default function Contact({ name, number, id, onDelete }) {
  return (
    <div className={css.container}>
      <div className={css.contact_container}>
        <div className={css.contact_name}>
          <p className={css.name}>
            <BsFillPersonFill size={12} />
            {name}
          </p>
        </div>
        <div className={css.contact_phone}>
          <p className={css.phone}>
            <BsFillTelephoneFill size={12} />
            {number}
          </p>
        </div>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}

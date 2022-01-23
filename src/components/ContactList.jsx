import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

export const ContactList = ({ contacts, onClick }) => (
  <div className={styles.div}>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        {name}: {number}
        <button className={styles.button} onClick={() => onClick(id)}>
          Delete
        </button>
      </li>
    ))}
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

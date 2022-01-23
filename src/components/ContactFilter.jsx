import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactFilter.module.css";

export const ContactFilter = ({ filter, onSearch }) => (
  <>
    <h2>Contacts</h2>
    <label className={styles.label}>
      Find contacts by name{" "}
      <input
        className={styles.input}
        type="text"
        value={filter}
        onChange={onSearch}
      />
    </label>
  </>
);

ContactFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

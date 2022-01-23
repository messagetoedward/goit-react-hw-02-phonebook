import React, { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";

export class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  nameId = nanoid();
  numberId = nanoid();

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    //   if ( this.state === )
    this.props.onAdd(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };
  render() {
    return (
      <div>
        <h1>PhoneBook</h1>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label className={styles.label} htmlFor={this.nameId}>
            Name
            <input
              className={styles.input}
              id={this.nameId}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label className={styles.label} htmlFor={this.numberId}>
            Number
            <input
              className={styles.input}
              id={this.numberId}
              value={this.state.number}
              onChange={this.handleChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button className={styles.button} type="submit">
            Add Contact
          </button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

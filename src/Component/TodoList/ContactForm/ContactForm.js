import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import PropTypes from "prop-types";
import './ContactForm.css'
// import { v4 as uuidv4 } from 'uuid';
// import { notify, items } from './../../../redux/selector/selector';
import { addContact, fetchContacts } from "./../../../redux/operations/contactsOperations";
import { connect } from 'react-redux';
import { setIsNotify } from './../../../redux/actions/actionsContacts';

function ContactForm({ items, addContact, isNotify, setIsNotify, fetchContacts }) {
    const [objForm, setObjForm] = useState({ name: '', number: '' });

    const inputHandler = ({ target }) => {
        if (isNotify) {
            setIsNotify(false)
        };
        const { value, name } = target;
        setObjForm(prev => ({ ...prev, [name]: value }));
    };

    const onHandelSubmit = (e) => {
        e.preventDefault();
        // dbContact = fetchContacts()
        if (items.some((el) => el.name === objForm.name)) {
            setIsNotify(true);
            setTimeout(function () {
                setIsNotify(false)
            }, 3000);
        } else {
            addContact(objForm);
        }

        setObjForm({ name: '', number: '' });
    };

    return (
        <>
            <form className="form" onSubmit={onHandelSubmit}>
                <p className="form-text">Name</p>
                <input className="input-form"
                    type="text"
                    name="name"
                    value={objForm.name}
                    onChange={inputHandler}
                />
                <p className="form-text">Number</p>
                <input className="input-form"
                    type="tel"
                    name="number"
                    value={objForm.number}
                    onChange={inputHandler}
                />
                <button className="contact-form-btn" type='submit'>Add contact</button>
            </form>
        </>
    );
};

const mapStateToProps = state => ({ items: state.contact.contacts.items, isNotify: state.contact.contacts.isNotify });
const mapDispatchToProps = { addContact, setIsNotify, fetchContacts };
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);




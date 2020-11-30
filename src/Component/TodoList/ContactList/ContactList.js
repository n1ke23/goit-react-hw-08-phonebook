import React from "react";
import { connect } from "react-redux";
import { removeFilterArr } from './../../../redux/actions/actionsContacts';
import { deleteContact } from "./../../../redux/operations/contactsOperations";
import Item from './Item/Item';
// import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup, } from "react-transition-group"
import './ContactList.css'

export function ContactList({ arr, deleteContact, removeFilterArr }) {

    const removeContact = (id) => {
        deleteContact(id);
        removeFilterArr();
    };

    return (
        <TransitionGroup component='ul' className='list-item'>
            {arr.length > 0 && arr.map(el => (<CSSTransition key={el.id} timeout={250} classNames='items'><Item {...el} removeContact={removeContact} /></CSSTransition>))}
        </TransitionGroup>

    );
};

const mapStateToProps = state => ({
    arr: state.contact.contacts.filterItems
        ? state.contact.contacts.filterItems
        : state.contact.contacts.items,
});

const mapDispatchToProps = { deleteContact, removeFilterArr };

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);


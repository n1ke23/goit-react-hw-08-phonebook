import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from "react-transition-group"
import ContactForm from "./ContactForm/ContactForm"
import Filter from "./Filter/Filter"
import ContactList from "./ContactList/ContactList"
import "./TodoList.css"
// import { addContact, removeContact, changeFilter } from './../../redux/actions/actionsContacts'
import { addLocalStor } from './../../redux/actions/actionsContacts';
// import { notify, items } from "../../redux/selector/selector";
import { fetchContacts } from "./../../redux/operations/contactsOperations";


function TodoList() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchContacts())
	}, [dispatch])

	const contacts = useSelector(state => state.contact.contacts.items);
	const isNotify = useSelector(state => state.contact.contacts.isNotify);
	const loader = useSelector(state => state.contact.isContactLoading)



	return (
		<section>
			<CSSTransition in={true} appear={true} timeout={500} classNames="title" unmountOnExit>
				<h1 className='titles'>Phonebook</h1>
			</CSSTransition>
			{loader && <h2>Loading...</h2>}
			<CSSTransition in={isNotify} timeout={500} classNames="alert" unmountOnExit>
				<h2 className='alert'>Contact is already exists!</h2>
			</CSSTransition>
			<ContactForm />  {/*  addContact={addContact} setIsNotifi={setIsNotifi} isNotifi={isNotifi}    */}

			<CSSTransition in={contacts.length > 1} timeout={250} classNames='filter' unmountOnExit>
				<Filter />
			</CSSTransition>

			<ContactList /> {/* obj={obj} filter={filterTask} deleteContact={delContact}  */}



		</section>
	)
}





export default TodoList;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from "./../../../redux/Auth/authOperations";
import authSeletors from "./../../../redux/Auth/authSeletors";
import { reduceContacts } from "./../../../redux/reduce/reduceContacts";
import { NavLink } from 'react-router-dom';
import './UserMenu.css'

const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(state => authSeletors.getUserName(state));

    const handleClick = () => {
        dispatch(authOperations.logOut());

    };
    return (
        <ul className='UserMenu-list'>
            <li className='UserMenu-item'>
                <NavLink className='UserMenu-link'
                    activeClassName="active-link"
                    to={{
                        pathname: '/contacts'
                    }}>Contacts</NavLink>
            </li>
            <li className='UserMenu-item'>
                {/* <img /> */}
                <p>Welcom, {name} bro!</p>
                <button className='UserMenu-btn' type='button' onClick={handleClick}>Logout</button>
            </li>
        </ul>
    );
};

export default UserMenu;
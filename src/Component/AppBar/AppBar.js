import React from 'react';
import { useSelector } from 'react-redux'
import AuthNav from './AuthNav/AuthNav';
import UserMenu from './UserMenu/UserMenu';
import authSeletors from "./../../redux/Auth/authSeletors";

const AppBar = () => {
    const isLoggedIn = useSelector((state) => authSeletors.isAuthenticated(state));

    return (
        <header>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>

    );
};

export default AppBar;
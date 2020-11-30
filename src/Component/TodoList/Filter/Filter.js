import React from 'react';
// import PropTypes from "prop-types";
import { filterValue, filterArr, removeFilterArr } from './../../../redux/actions/actionsContacts';
import { connect } from 'react-redux'

const Filter = ({ filter, filterValue, filterArr, removeFilterArr }) => {
    const inputHandlerFilter = ({ target: { value } }) => {
        filterValue(value);
        filterArr(value);
        if (value === '') {
            removeFilterArr();
        }
    };
    return (
        <>
            <form>
                <p className="form__text">Find contact by name</p>
                <input className="input__form"
                    type="text"
                    name="filter"
                    value={filter}
                    onChange={inputHandlerFilter}
                />
            </form>

        </>
    );
};

const mapStateToProps = (state) => ({
    filter: state.contact.contacts.filter
})

const mapDispatchToProps = {
    filterValue,
    filterArr,
    removeFilterArr,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

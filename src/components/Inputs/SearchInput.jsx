import React from 'react'
import { arrayOf, object, func, string } from 'prop-types';


const SearchInput = ({ className, onChange, placeholder, text, ...otherProps }) => {

    const handleChange = val => {
        onChange(val);
    }

    return (
        <input className={className} type="text" name="search" placeholder={placeholder} value={text} onChange={handleChange} {...otherProps} />
    )
}

SearchInput.defaultProps = {
    onChange: Function.prototype,
    placeholder: 'Search for name, status, ...',
    text: '',
    otherProps: []
}

SearchInput.propTypes = {
    className: string,
    onChange: func,
    placeholder: string,
    text: string,
    otherProps: arrayOf(object).isRequired
}

export default SearchInput
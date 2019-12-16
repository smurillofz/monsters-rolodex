import React from 'react';

import './search-list.styles.css';

export const SearchBox = ({placehHolder, handleChange})   =>  (
    <input 
        className ="search-list"
        type="search" 
        placeholder= {placehHolder}
        onChange={handleChange}
    />
)
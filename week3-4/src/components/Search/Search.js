import React from 'react';
import './Search.css';
import Button from '../Button/Button';


const Search = (props) => {

    const { value:search, onChange, onClick } = props;

    return (
      <section  className="Search">
        <input type="text" placeholder="" value={search} onChange={onChange} />
        <Button onClick={onClick}>Search</Button>
      </section>
    );
  
};

export default Search;

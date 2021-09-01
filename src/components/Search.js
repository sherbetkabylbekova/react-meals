import React, {useState} from 'react';
import {useHistory} from "react-router-dom";

const Search = () => {
    const [search, setSearch] = useState("")
    const history = useHistory()
    const handleSearch = () => {
        if (search) {
            history.push(`/browse/${search}`)
        }
    }
    const handleKeyPress = (e)=>{
        if(e.key === "Enter"){
            history.push(`/browse/${search}`)
        }
    }
    return (
        <div className="menu__search">
            <h1 className="menu__title">Menu with dishes</h1>
            <input className="input__search" type="text" onChange={(e) => setSearch(e.target.value)} onKeyPress={handleKeyPress}/>
            <button className="search__btn" onClick={handleSearch}>Search</button>
        </div>
    );
};

export default Search;

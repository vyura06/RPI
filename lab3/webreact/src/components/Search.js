import React from 'react';
import JSONDATA from './MOCK_DATA.json';
import { useState } from 'react';
import './Search.css';

function Search() {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <div className="search">
            <input type="text" placeholder="Search..." onChange={event => {
                setSearchTerm(event.target.value);
            }} />
            {
                JSONDATA.filter((val) => {
                    if (searchTerm != "" && (val.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        val.last_name.toLowerCase().includes(searchTerm.toLowerCase()))) {
                        return val
                    }
                }).map((val, key) => {
                    return (
                        <div className="user" key={key}>
                            <p style={{ color: "black" }}>{val.first_name} {val.last_name}</p>
                        </div>
                    );
                })
            }

        </div>
    );
}

export default Search;
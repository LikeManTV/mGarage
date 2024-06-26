import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { IconSearch, IconX } from '@tabler/icons-react';


interface SearchBoxProps {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBox: React.FC<SearchBoxProps> = ({ searchTerm, setSearchTerm }) => {
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchClick = () => {
        if (searchTerm.trim() !== "") {
            setSearchTerm("");
        }
    };

    const isSearchEmpty = searchTerm.trim() === "";

    return (
        <div className="search">
            <a className="search-btn" href="#" onClick={handleSearchClick}>
                {isSearchEmpty ? <IconSearch  size={20}/> : <IconX  size={20}/>}
            </a>
            <input
                type="text"
                className={`search-txt ${searchTerm.trim() !== "" ? "has-text" : ""}`}
                placeholder="Model or plate"
                value={searchTerm}
                onChange={handleSearchChange}
            />
        </div>
    );
    
};

export default SearchBox;

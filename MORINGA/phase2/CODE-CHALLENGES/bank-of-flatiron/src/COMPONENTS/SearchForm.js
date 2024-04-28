import { useState } from "react";

export default function SearchForm({ onSearching }) {
    const [search, setSearch] = useState("");

    function handleChange(e) {
        const searchTerm = e.target.value; // Get the updated search term
        setSearch(searchTerm); // Update the search state
        onSearching(searchTerm); // Pass the updated search term to the onSearching function
    }

    return (
        <form id="search-form">
            <input value={search} onChange={handleChange} id="search" placeholder="Search Transactions..." type="text" />
            <button type="submit">
                {/* You can uncomment this when you want to add an icon */}
                {/* <FontAwesomeIcon icon={faSearch}/> */}
                Search
            </button>
        </form>
    );
}

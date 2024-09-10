const SearchFilter = ({ searchName, handleSearchInput }) => {
    return (
        <div>
            Filter shown: <input name="searchInput" value={searchName} onChange={handleSearchInput}/>
        </div>
    )
}

export default SearchFilter
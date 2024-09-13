const SearchFilter = ({ searchName, handleSearchInput }) => {
    return (
        <div>
            Find countries: <input name="searchInput" value={searchName} onChange={handleSearchInput}/>
        </div>
    )
}

export default SearchFilter
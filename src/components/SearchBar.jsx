function SearchBar({
  searchText,
  setSearchText,
  handleSearch,
  status,
  handleStatusChange,
  propertyType,
  handleTypeChange,
  minPrice,
  handleMinPriceChange,
  maxPrice,
  handleMaxPriceChange,
  bedrooms,
  handleBedroomsChange,
  bathrooms,
  handleBathroomsChange,
  resetFilters,
}) {
  return (
    <section className="search-section">
      <div className="search-box">
        <div className="search-top">
          <div className="status-toggle">
            <button
              className={
                status === "All"
                  ? "toggle-btn active"
                  : "toggle-btn"
              }
              onClick={() =>
                handleStatusChange("All")
              }
            >
              All
            </button>

            <button
              className={
                status === "For Sale"
                  ? "toggle-btn active"
                  : "toggle-btn"
              }
              onClick={() =>
                handleStatusChange("For Sale")
              }
            >
              Buy
            </button>

            <button
              className={
                status === "For Rent"
                  ? "toggle-btn active"
                  : "toggle-btn"
              }
              onClick={() =>
                handleStatusChange("For Rent")
              }
            >
              Rent
            </button>
          </div>
        </div>

        <div className="search-fields">
          <div className="search-field location-field">
            <label>Location</label>

            <input
              type="text"
              value={searchText}
              placeholder="Search city or neighborhood"
              onChange={(event) =>
                setSearchText(event.target.value)
              }
            />
          </div>

          <div className="search-field">
            <label>Property Type</label>

            <select
              value={propertyType}
              onChange={(event) =>
                handleTypeChange(
                  event.target.value
                )
              }
            >
              <option value="All">Any Type</option>

              <option value="Apartment">
                Apartment
              </option>

              <option value="House">
                House
              </option>

              <option value="Villa">
                Villa
              </option>
            </select>
          </div>

          <div className="search-field">
            <label>Min Price</label>

            <input
              type="number"
              value={minPrice}
              placeholder="Min"
              onChange={(event) =>
                handleMinPriceChange(
                  event.target.value
                )
              }
            />
          </div>

          <div className="search-field">
            <label>Max Price</label>

            <input
              type="number"
              value={maxPrice}
              placeholder="Max"
              onChange={(event) =>
                handleMaxPriceChange(
                  event.target.value
                )
              }
            />
          </div>

          <div className="search-field">
            <label>Bedrooms</label>

            <select
              value={bedrooms}
              onChange={(event) =>
                handleBedroomsChange(
                  event.target.value
                )
              }
            >
              <option value="All">Any</option>
              <option value="1">1+ Bedroom</option>
              <option value="2">2+ Bedrooms</option>
              <option value="3">3+ Bedrooms</option>
              <option value="4">4+ Bedrooms</option>
              <option value="5">5+ Bedrooms</option>
            </select>
          </div>

          <div className="search-field">
            <label>Bathrooms</label>

            <select
              value={bathrooms}
              onChange={(event) =>
                handleBathroomsChange(
                  event.target.value
                )
              }
            >
              <option value="All">Any</option>
              <option value="1">1+ Bathroom</option>
              <option value="2">2+ Bathrooms</option>
              <option value="3">3+ Bathrooms</option>
              <option value="4">4+ Bathrooms</option>
            </select>
          </div>

          <button
            className="search-btn"
            onClick={handleSearch}
          >
            Search
          </button>

          <button
            className="reset-btn"
            onClick={resetFilters}
          >
            Reset
          </button>
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
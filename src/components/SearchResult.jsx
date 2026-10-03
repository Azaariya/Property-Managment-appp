import PropertyCard from "./PropertyCard";

function SearchResult({
  filteredProperties,
  favorites,
  toggleFavorite,
  handleViewDetails,
}) {
  return (
    <section className="results-section">
      <div className="section-heading">
        <div>
          <span className="section-label">
            SEARCH RESULTS
          </span>

          <h2>Properties Found</h2>
        </div>

        <span className="property-count">
          {filteredProperties.length} properties
        </span>
      </div>

      {filteredProperties.length > 0 ? (
        <PropertyCard
          filteredProperties={filteredProperties}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          handleViewDetails={handleViewDetails}
        />
      ) : (
        <div className="empty-state">
          <div className="empty-icon">⌂</div>

          <h3>No properties found</h3>

          <p>
            Try changing your search or filter options.
          </p>
        </div>
      )}
    </section>
  );
}

export default SearchResult;
import PropertyCard from "./PropertyCard";

function Favorites({
  properties,
  favorites,
  toggleFavorite,
  setPage,
  handleViewDetails,
}) {
  const favoriteProperties = properties.filter((property) =>
    favorites.includes(property.id)
  );

  return (
    <main className="favorites-page">
      <div className="section-header">
        <div>
          <h2>My Favorites</h2>
          <p>Properties you have saved</p>
        </div>

        <button
          className="back-button"
          onClick={() => setPage("home")}
        >
          ← Back to Home
        </button>
      </div>

      {favoriteProperties.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">♡</div>

          <h3>No favorites yet</h3>

          <p>
            You haven't added any properties to your favorites yet.
          </p>

          <button
            className="primary-button"
            onClick={() => setPage("home")}
          >
            Browse Properties
          </button>
        </div>
      ) : (
        <PropertyCard
          filteredProperties={favoriteProperties}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          handleViewDetails={handleViewDetails}
        />
      )}
    </main>
  );
}

export default Favorites;
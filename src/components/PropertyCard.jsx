function PropertyCard({
  filteredProperties,
  favorites,
  toggleFavorite,
  handleViewDetails,
}) {
  return (
    <div className="property-grid">
      {filteredProperties.map((property) => {
        const isFavorite =
          favorites.includes(property.id);

        return (
          <article
            className="property-card"
            key={property.id}
          >
            <div className="property-image-wrapper">
              <img
                className="property-image"
                src={property.image}
                alt={property.title}
              />

              <span
                className={
                  property.status === "For Sale"
                    ? "property-badge sale"
                    : "property-badge rent"
                }
              >
                {property.status}
              </span>

              <button
                className={
                  isFavorite
                    ? "favorite-btn favorite-active"
                    : "favorite-btn"
                }
                onClick={() =>
                  toggleFavorite(property.id)
                }
              >
                {isFavorite ? "♥" : "♡"}
              </button>
            </div>

            <div className="property-content">
              <div className="property-price">
                {property.currency === "ETB"
                  ? "ETB "
                  : "$"}

                {property.price.toLocaleString()}

                {property.status === "For Rent" && (
                  <span>/month</span>
                )}
              </div>

              <h3>{property.title}</h3>

              <p className="property-location">
                <span>⌖</span>
                {property.location}
              </p>

              <div className="property-details">
                <span>
                  <strong>{property.bedrooms}</strong>{" "}
                  Beds
                </span>

                <span>
                  <strong>{property.bathrooms}</strong>{" "}
                  Baths
                </span>

                <span>
                  <strong>{property.area}</strong>{" "}
                  m²
                </span>
              </div>

              <div className="property-footer">
                <span className="property-type">
                  {property.type}
                </span>

                <button
                  className="details-btn"
                  onClick={() =>
                    handleViewDetails(property)
                  }
                >
                  View Details

                  <span>→</span>
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default PropertyCard;
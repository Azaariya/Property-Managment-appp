import PropertyCard from "./PropertyCard";

function FeaturedProperties({
  properties,
  favorites,
  toggleFavorite,
  handleViewDetails,
}) {
  const featuredProperties =
    properties.filter(
      (property) => property.featured
    );

  return (
    <section className="properties-section">
      <div className="section-heading">
        <div>
          <span className="section-label">
            HANDPICKED FOR YOU
          </span>

          <h2>Featured Properties</h2>
        </div>

        <span className="property-count">
          {featuredProperties.length} properties
        </span>
      </div>

      <PropertyCard
        filteredProperties={featuredProperties}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        handleViewDetails={handleViewDetails}
      />
    </section>
  );
}

export default FeaturedProperties;
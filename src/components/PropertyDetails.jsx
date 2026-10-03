function PropertyDetails({
  property,
  favorites,
  toggleFavorite,
  setPage,
}) {
  const isFavorite =
    favorites.includes(property.id);

  const amenities = [
    ["Furnished", property.furnished],
    ["Balcony", property.balcony],
    ["Garden", property.garden],
    ["Swimming Pool", property.pool],
    ["Security", property.security],
    ["Internet", property.internet],
    ["Air Conditioning", property.airConditioning],
  ];

  return (
    <main className="details-page">
      <div className="details-container">
        <button
          className="back-btn details-back"
          onClick={() => setPage("home")}
        >
          ← Back to marketplace
        </button>

        <div className="details-image-section">
          <img
            src={property.image}
            alt={property.title}
            className="details-image"
          />

          <span
            className={
              property.status === "For Sale"
                ? "details-status sale"
                : "details-status rent"
            }
          >
            {property.status}
          </span>

          <button
            className={
              isFavorite
                ? "details-favorite active"
                : "details-favorite"
            }
            onClick={() =>
              toggleFavorite(property.id)
            }
          >
            {isFavorite ? "♥" : "♡"}
          </button>
        </div>

        <div className="details-main">
          <div className="details-content">
            <div className="details-header">
              <div>
                <span className="details-type">
                  {property.type}
                </span>

                <h1>{property.title}</h1>

                <p className="details-location">
                  <span>⌖</span>
                  {property.location}
                </p>
              </div>

              <div className="details-price">
                <strong>
                  {property.currency === "ETB"
                    ? "ETB "
                    : "$"}

                  {property.price.toLocaleString()}
                </strong>

                {property.status === "For Rent" && (
                  <span>/ month</span>
                )}
              </div>
            </div>

            <div className="details-stats">
              <div>
                <span className="stat-icon">⌂</span>

                <div>
                  <strong>
                    {property.bedrooms}
                  </strong>

                  <span>Bedrooms</span>
                </div>
              </div>

              <div>
                <span className="stat-icon">◫</span>

                <div>
                  <strong>
                    {property.bathrooms}
                  </strong>

                  <span>Bathrooms</span>
                </div>
              </div>

              <div>
                <span className="stat-icon">↔</span>

                <div>
                  <strong>
                    {property.area} m²
                  </strong>

                  <span>Living Area</span>
                </div>
              </div>
            </div>

            <section className="details-section">
              <span className="section-label">
                ABOUT THIS PROPERTY
              </span>

              <h2>Property Description</h2>

              <p className="details-description">
                {property.description}
              </p>
            </section>

            <section className="details-section">
              <span className="section-label">
                FEATURES
              </span>

              <h2>Amenities & Features</h2>

              <div className="details-amenities">
                {amenities.map(
                  ([name, available]) =>
                    available && (
                      <div
                        className="details-amenity"
                        key={name}
                      >
                        <span>✓</span>
                        {name}
                      </div>
                    )
                )}
              </div>
            </section>

            <section className="details-section">
              <span className="section-label">
                PROPERTY INFORMATION
              </span>

              <h2>Property Details</h2>

              <div className="property-info-grid">
                <div>
                  <span>Property Type</span>

                  <strong>
                    {property.type}
                  </strong>
                </div>

                <div>
                  <span>Year Built</span>

                  <strong>
                    {property.yearBuilt || "N/A"}
                  </strong>
                </div>

                <div>
                  <span>Parking</span>

                  <strong>
                    {property.parking}{" "}
                    {property.parking === 1
                      ? "Space"
                      : "Spaces"}
                  </strong>
                </div>

                <div>
                  <span>Furnished</span>

                  <strong>
                    {property.furnished
                      ? "Yes"
                      : "No"}
                  </strong>
                </div>

                <div>
                  <span>Address</span>

                  <strong>
                    {property.address ||
                      property.location}
                  </strong>
                </div>
              </div>
            </section>
          </div>

          <aside className="agent-card">
            <div className="agent-heading">
              <span className="agent-avatar">
                {property.agentName
                  ? property.agentName
                    .charAt(0)
                    .toUpperCase()
                  : "A"}
              </span>

              <div>
                <span>LISTED BY</span>

                <h3>
                  {property.agentName}
                </h3>
              </div>
            </div>

            <div className="agent-divider"></div>

            <div className="agent-contact">
              <a
                href={`tel:${property.phone}`}
              >
                <span>☎</span>

                <div>
                  <small>Phone</small>

                  <strong>
                    {property.phone}
                  </strong>
                </div>
              </a>

              <a
                href={`mailto:${property.email}`}
              >
                <span>✉</span>

                <div>
                  <small>Email</small>

                  <strong>
                    {property.email}
                  </strong>
                </div>
              </a>
            </div>

            <a
              className="contact-agent-btn"
              href={`tel:${property.phone}`}
            >
              Contact Agent

              <span>→</span>
            </a>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default PropertyDetails;
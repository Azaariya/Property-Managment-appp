function PopularLocations() {
  const locations = [
    {
      name: "Bole",
      properties: "245 Properties",
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Kazanchis",
      properties: "189 Properties",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Old Airport",
      properties: "156 Properties",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "CMC",
      properties: "132 Properties",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="popular-locations">
      <div className="section-header">
        <div>
          <h2>Popular Locations</h2>
          <p>Explore properties in popular areas of Addis Ababa</p>
        </div>
      </div>

      <div className="locations-grid">
        {locations.map((location) => (
          <div className="location-card" key={location.name}>
            <img src={location.image} alt={location.name} />

            <div className="location-overlay">
              <h3>{location.name}</h3>
              <p>{location.properties}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularLocations;
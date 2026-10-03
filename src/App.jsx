import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import AddProperty from "./components/AddProperty";
import PropertyDetails from "./components/PropertyDetails";
import Footer from "./components/Footer";

function App() {
  const defaultProperties = [
    {
      id: 1,
      title: "Modern 4-Bedroom Villa",
      price: 485000,
      currency: "ETB",
      location: "Bole, Addis Ababa",
      type: "Villa",
      bedrooms: 4,
      bathrooms: 3,
      area: 320,
      status: "For Sale",
      featured: true,
      description:
        "A beautiful modern villa located in the heart of Bole.",
      address: "Bole, Addis Ababa",
      parking: 2,
      yearBuilt: 2022,
      furnished: true,
      balcony: true,
      garden: true,
      pool: false,
      security: true,
      internet: true,
      airConditioning: true,
      agentName: "Abebe Real Estate",
      phone: "+251900000000",
      email: "agent@example.com",
      image:
        "https://media-production.lp-cdn.com/cdn-cgi/image/format%3Dauto%2Cquality%3D85%2Cfit%3Dscale-down%2Cwidth%3D1280/https%3A/media-production.lp-cdn.com/media/1ed5056b-6b33-4015-b939-bfadfd88606a",
    },
    {
      id: 2,
      title: "Luxury 3-Bedroom Apartment",
      price: 185000,
      currency: "ETB",
      location: "Kazanchis, Addis Ababa",
      type: "Apartment",
      bedrooms: 3,
      bathrooms: 2,
      area: 180,
      status: "For Sale",
      featured: true,
      description:
        "A luxury apartment with modern finishes and excellent city views.",
      address: "Kazanchis, Addis Ababa",
      parking: 1,
      yearBuilt: 2021,
      furnished: true,
      balcony: true,
      garden: false,
      pool: true,
      security: true,
      internet: true,
      airConditioning: true,
      agentName: "Prime Properties",
      phone: "+251911111111",
      email: "prime@example.com",
      image:
        "https://medialibrarycf.entrata.com/13825/MLv3/1/1/2022/3/23/881/Luxury_Trends-1554900758-1554900866.jpg",
    },
    {
      id: 3,
      title: "Spacious Family House",
      price: 320000,
      currency: "ETB",
      location: "CMC, Addis Ababa",
      type: "House",
      bedrooms: 4,
      bathrooms: 3,
      area: 280,
      status: "For Sale",
      featured: true,
      description:
        "Spacious family home in a quiet residential neighborhood.",
      address: "CMC, Addis Ababa",
      parking: 2,
      yearBuilt: 2020,
      furnished: false,
      balcony: true,
      garden: true,
      pool: false,
      security: true,
      internet: true,
      airConditioning: false,
      agentName: "City Homes",
      phone: "+251922222222",
      email: "cityhomes@example.com",
      image:
        "https://media-production.lp-cdn.com/cdn-cgi/image/format%3Dauto%2Cquality%3D85%2Cfit%3Dscale-down%2Cwidth%3D1280/https%3A/media-production.lp-cdn.com/media/cd1a6ef9-b67b-4554-af0f-a5a1f4eeb266",
    },
    {
      id: 4,
      title: "Contemporary 2-Bedroom Apartment",
      price: 1200,
      currency: "USD",
      location: "Sarbet, Addis Ababa",
      type: "Apartment",
      bedrooms: 2,
      bathrooms: 2,
      area: 135,
      status: "For Rent",
      featured: true,
      description:
        "Contemporary apartment perfect for comfortable city living.",
      address: "Sarbet, Addis Ababa",
      parking: 1,
      yearBuilt: 2023,
      furnished: true,
      balcony: true,
      garden: false,
      pool: false,
      security: true,
      internet: true,
      airConditioning: true,
      agentName: "Urban Living",
      phone: "+251933333333",
      email: "urban@example.com",
      image:
        "https://media.vrbo.com/lodging/116000000/115880000/115870600/115870554/fa55f297.jpg?impolicy=resizecrop&ra=fill&rh=575&rw=575",
    },
    {
      id: 5,
      title: "Elegant 5-Bedroom Villa",
      price: 650000,
      currency: "ETB",
      location: "Old Airport, Addis Ababa",
      type: "Villa",
      bedrooms: 5,
      bathrooms: 4,
      area: 450,
      status: "For Sale",
      featured: false,
      description:
        "Elegant luxury villa with spacious rooms and premium amenities.",
      address: "Old Airport, Addis Ababa",
      parking: 3,
      yearBuilt: 2019,
      furnished: true,
      balcony: true,
      garden: true,
      pool: true,
      security: true,
      internet: true,
      airConditioning: true,
      agentName: "Luxury Estates",
      phone: "+251944444444",
      email: "luxury@example.com",
      image:
        "https://www.mahermouhajer.com/_next/image?q=75&url=%2F2024%2F06%2F7db8b88b46c75a1bc69c40648a2d662a.jpg&w=3840",
    },
    {
      id: 6,
      title: "Cozy 1-Bedroom Apartment",
      price: 750,
      currency: "USD",
      location: "Piassa, Addis Ababa",
      type: "Apartment",
      bedrooms: 1,
      bathrooms: 1,
      area: 75,
      status: "For Rent",
      featured: false,
      description:
        "Cozy apartment ideal for a single person or couple.",
      address: "Piassa, Addis Ababa",
      parking: 0,
      yearBuilt: 2018,
      furnished: true,
      balcony: false,
      garden: false,
      pool: false,
      security: true,
      internet: true,
      airConditioning: false,
      agentName: "Addis Rentals",
      phone: "+251955555555",
      email: "rentals@example.com",
      image:
        "https://northlandsheights.co.ke/wp-content/uploads/2024/12/northlands-day-1-20241102-178.jpg",
    },
    {
      id: 7,
      title: "Premium Family Home",
      price: 390000,
      currency: "ETB",
      location: "Summit, Addis Ababa",
      type: "House",
      bedrooms: 4,
      bathrooms: 3,
      area: 300,
      status: "For Sale",
      featured: false,
      description:
        "Premium family home with modern architecture and spacious rooms.",
      address: "Summit, Addis Ababa",
      parking: 2,
      yearBuilt: 2021,
      furnished: false,
      balcony: true,
      garden: true,
      pool: false,
      security: true,
      internet: true,
      airConditioning: true,
      agentName: "Summit Homes",
      phone: "+251966666666",
      email: "summit@example.com",
      image:
        "https://dhursanconstruction.com.au/wp-content/uploads/2021/07/Croydon-scaled.jpg.webp",
    },
    {
      id: 8,
      title: "Modern 3-Bedroom Residence",
      price: 1600,
      currency: "USD",
      location: "Gerji, Addis Ababa",
      type: "House",
      bedrooms: 3,
      bathrooms: 2,
      area: 210,
      status: "For Rent",
      featured: false,
      description:
        "Modern residence in a convenient location with great amenities.",
      address: "Gerji, Addis Ababa",
      parking: 1,
      yearBuilt: 2022,
      furnished: false,
      balcony: true,
      garden: true,
      pool: false,
      security: true,
      internet: true,
      airConditioning: true,
      agentName: "Modern Homes",
      phone: "+251977777777",
      email: "modern@example.com",
      image:
        "https://www.cobendubai.com/wp-content/uploads/2025/02/Image4.png",
    },
  ];

  const storedProperties =
    JSON.parse(localStorage.getItem("properties")) ||
    defaultProperties;

  const storedFavorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

  const [properties, setProperties] =
    useState(storedProperties);

  const [favorites, setFavorites] =
    useState(storedFavorites);

  const [searchText, setSearchText] =
    useState("");

  const [status, setStatus] =
    useState("All");

  const [propertyType, setPropertyType] =
    useState("All");

  const [minPrice, setMinPrice] =
    useState("");

  const [maxPrice, setMaxPrice] =
    useState("");

  const [bedrooms, setBedrooms] =
    useState("All");

  const [bathrooms, setBathrooms] =
    useState("All");

  const [filteredProperties, setFilteredProperties] =
    useState(storedProperties);

  const [hasSearched, setHasSearched] =
    useState(false);

  const [page, setPage] =
    useState("home");

  const [selectedProperty, setSelectedProperty] =
    useState(null);

  useEffect(() => {
    localStorage.setItem(
      "properties",
      JSON.stringify(properties)
    );
  }, [properties]);

  useEffect(() => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  function applyFilters(
    location,
    selectedStatus,
    selectedType,
    minimumPrice,
    maximumPrice,
    selectedBedrooms,
    selectedBathrooms
  ) {
    const results = properties.filter((property) => {
      const matchesLocation =
        property.location
          .toLowerCase()
          .includes(location.toLowerCase());

      const matchesStatus =
        selectedStatus === "All" ||
        property.status === selectedStatus;

      const matchesType =
        selectedType === "All" ||
        property.type === selectedType;

      const matchesMinPrice =
        minimumPrice === "" ||
        property.price >= Number(minimumPrice);

      const matchesMaxPrice =
        maximumPrice === "" ||
        property.price <= Number(maximumPrice);

      const matchesBedrooms =
        selectedBedrooms === "All" ||
        property.bedrooms >= Number(selectedBedrooms);

      const matchesBathrooms =
        selectedBathrooms === "All" ||
        property.bathrooms >= Number(selectedBathrooms);

      return (
        matchesLocation &&
        matchesStatus &&
        matchesType &&
        matchesMinPrice &&
        matchesMaxPrice &&
        matchesBedrooms &&
        matchesBathrooms
      );
    });

    setFilteredProperties(results);
    setHasSearched(true);
  }

  function handleSearch() {
    applyFilters(
      searchText,
      status,
      propertyType,
      minPrice,
      maxPrice,
      bedrooms,
      bathrooms
    );
  }

  function handleStatusChange(newStatus) {
    setStatus(newStatus);

    applyFilters(
      searchText,
      newStatus,
      propertyType,
      minPrice,
      maxPrice,
      bedrooms,
      bathrooms
    );
  }

  function handleTypeChange(newType) {
    setPropertyType(newType);

    applyFilters(
      searchText,
      status,
      newType,
      minPrice,
      maxPrice,
      bedrooms,
      bathrooms
    );
  }

  function handleMinPriceChange(newMinPrice) {
    setMinPrice(newMinPrice);

    applyFilters(
      searchText,
      status,
      propertyType,
      newMinPrice,
      maxPrice,
      bedrooms,
      bathrooms
    );
  }

  function handleMaxPriceChange(newMaxPrice) {
    setMaxPrice(newMaxPrice);

    applyFilters(
      searchText,
      status,
      propertyType,
      minPrice,
      newMaxPrice,
      bedrooms,
      bathrooms
    );
  }

  function handleBedroomsChange(newBedrooms) {
    setBedrooms(newBedrooms);

    applyFilters(
      searchText,
      status,
      propertyType,
      minPrice,
      maxPrice,
      newBedrooms,
      bathrooms
    );
  }

  function handleBathroomsChange(newBathrooms) {
    setBathrooms(newBathrooms);

    applyFilters(
      searchText,
      status,
      propertyType,
      minPrice,
      maxPrice,
      bedrooms,
      newBathrooms
    );
  }

  function resetFilters() {
    setSearchText("");
    setStatus("All");
    setPropertyType("All");
    setMinPrice("");
    setMaxPrice("");
    setBedrooms("All");
    setBathrooms("All");

    setFilteredProperties(properties);
    setHasSearched(false);
  }

  function toggleFavorite(propertyId) {
    setFavorites((previousFavorites) => {
      if (previousFavorites.includes(propertyId)) {
        return previousFavorites.filter(
          (id) => id !== propertyId
        );
      }

      return [...previousFavorites, propertyId];
    });
  }

  function handleViewDetails(property) {
    setSelectedProperty(property);
    setPage("details");
    window.scrollTo(0, 0);
  }

  function addProperty(newProperty) {
    const propertyWithId = {
      ...newProperty,
      id: Date.now(),
      featured: false,
    };

    const updatedProperties = [
      ...properties,
      propertyWithId,
    ];

    setProperties(updatedProperties);
    setFilteredProperties(updatedProperties);
    setHasSearched(false);
    setPage("home");
  }

  const favoriteProperties = properties.filter(
    (property) =>
      favorites.includes(property.id)
  );

  return (
    <div className="app">
      <Header
        page={page}
        setPage={setPage}
        favoriteCount={favorites.length}
      />

      {page === "favorites" ? (
        <Favorites
          properties={favoriteProperties}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          setPage={setPage}
          handleViewDetails={handleViewDetails}
        />
      ) : page === "add-property" ? (
        <AddProperty
          addProperty={addProperty}
          setPage={setPage}
        />
      ) : page === "details" && selectedProperty ? (
        <PropertyDetails
          property={selectedProperty}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          setPage={setPage}
        />
      ) : (
        <Home
          properties={properties}
          searchText={searchText}
          setSearchText={setSearchText}
          handleSearch={handleSearch}
          status={status}
          handleStatusChange={handleStatusChange}
          propertyType={propertyType}
          handleTypeChange={handleTypeChange}
          minPrice={minPrice}
          handleMinPriceChange={handleMinPriceChange}
          maxPrice={maxPrice}
          handleMaxPriceChange={handleMaxPriceChange}
          bedrooms={bedrooms}
          handleBedroomsChange={handleBedroomsChange}
          bathrooms={bathrooms}
          handleBathroomsChange={handleBathroomsChange}
          resetFilters={resetFilters}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          hasSearched={hasSearched}
          filteredProperties={filteredProperties}
          handleViewDetails={handleViewDetails}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
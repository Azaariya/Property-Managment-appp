import Hero from "./Hero";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import FeaturedProperties from "./FeaturedProperties";
import PopularLocations from "./PopularLocations";

function Home({
  properties,
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
  favorites,
  toggleFavorite,
  hasSearched,
  filteredProperties,
  handleViewDetails,
}) {
  return (
    <main>
      <Hero />

      <SearchBar
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
      />

      {hasSearched && (
        <SearchResult
          filteredProperties={filteredProperties}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          handleViewDetails={handleViewDetails}
        />
      )}

      <FeaturedProperties
        properties={properties}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        handleViewDetails={handleViewDetails}
      />

      <PopularLocations />
    </main>
  );
}

export default Home;
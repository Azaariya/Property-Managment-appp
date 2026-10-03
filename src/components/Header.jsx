function Header({
  page,
  setPage,
  favoriteCount,
}) {
  return (
    <header className="header">
      <div className="header-inner">
        <button
          className="logo"
          onClick={() => setPage("home")}
        >
          <span className="logo-icon">⌂</span>

          <span>
            Estate<span>Hub</span>
          </span>
        </button>

        <nav className="nav">
          <button
            className={
              page === "home"
                ? "nav-link active"
                : "nav-link"
            }
            onClick={() => setPage("home")}
          >
            Home
          </button>

          <button
            className={
              page === "favorites"
                ? "nav-link active"
                : "nav-link"
            }
            onClick={() => setPage("favorites")}
          >
            Favorites

            <span className="favorite-count">
              {favoriteCount}
            </span>
          </button>

          <button
            className="add-property-btn"
            onClick={() =>
              setPage("add-property")
            }
          >
            + Add Property
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
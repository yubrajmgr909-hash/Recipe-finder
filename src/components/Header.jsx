function Header({
  favoritesCount,
  showFavorites,
  setShowFavorites,
  onResetHome,
}) {
  return (
    <header className="sticky top-0 z-50 flex min-h-[82px] items-center justify-between border-b border-[#ddd4c4] bg-[#f5f0e6] px-[7%]">

      {/* LOGO */}

      <button
        type="button"
        onClick={onResetHome}
        className="flex items-center gap-3 border-0 bg-transparent text-left"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#dce8d7] text-2xl">
          🍳
        </div>

        <div>
          <h2 className="font-serif text-[22px] text-[#24382c]">
            Supper Notes
          </h2>

          <p className="text-[9px] tracking-[2px] text-[#70806f]">
            RECIPES FOR REAL EVENINGS
          </p>
        </div>
      </button>

      {/* NAVIGATION */}

      <nav className="flex items-center gap-2">

        {/* FIND A RECIPE */}

        <button
          type="button"
          onClick={onResetHome}
          className="rounded-full px-4 py-2 text-sm text-[#324a38] transition hover:bg-[#e7dfd0]"
        >
          Find a recipe
        </button>

        {/* SAVED */}

        <button
          type="button"
          onClick={() =>
            setShowFavorites(!showFavorites)
          }
          className={`rounded-full px-4 py-2 text-sm transition ${
            showFavorites
              ? "bg-[#344d39] text-white"
              : "text-[#324a38] hover:bg-[#e7dfd0]"
          }`}
        >
          Saved ({favoritesCount})
        </button>

      </nav>

    </header>
  );
}

export default Header;
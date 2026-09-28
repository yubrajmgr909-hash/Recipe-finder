import RecipeCard from "./RecipeCard";

function RecipeGrid({
  recipes,
  loading,
  error,
  favorites,
  toggleFavorite,
  onSelectRecipe,
  visibleCount,
  setVisibleCount,
  showFavorites,
}) {

  // LOADING

  if (loading) {
    return (
      <section className="mx-auto mb-20 w-[86%] max-w-[1200px]">

        <div className="mb-7 flex items-end justify-between">

          <div>

            <p className="mb-2 text-[10px] font-bold tracking-[2px] text-[#789078]">
              PLEASE WAIT
            </p>

            <h2 className="font-serif text-3xl font-normal text-[#293b30] md:text-4xl">
              Finding your recipes...
            </h2>

          </div>

        </div>

        <div className="flex min-h-[260px] flex-col items-center justify-center gap-4 rounded-[14px] border border-[#e1d9ca] bg-[#fbf8f1] text-[#6d796c]">

          <div className="h-[42px] w-[42px] animate-spin rounded-full border-4 border-[#dce5d9] border-t-[#4e684f]"></div>

          <p>
            Searching the recipe shelf...
          </p>

        </div>

      </section>
    );
  }

  // ERROR

  if (error) {
    return (
      <section className="mx-auto mb-20 w-[86%] max-w-[1200px]">

        <div className="rounded-[14px] border border-[#e8cfc6] bg-[#fff7f3] px-6 py-12 text-center text-[#704e46]">

          <h3 className="mb-3 font-serif text-3xl">
            Something went wrong
          </h3>

          <p>
            {error}
          </p>

          <p className="mt-2">
            Please check your internet
            connection and try again.
          </p>

        </div>

      </section>
    );
  }

  // NO RESULTS

  if (
    !recipes ||
    recipes.length === 0
  ) {
    return (
      <section className="mx-auto mb-20 w-[86%] max-w-[1200px]">

        <div className="mb-7 flex items-end justify-between">

          <div>

            <p className="mb-2 text-[10px] font-bold tracking-[2px] text-[#789078]">
              NOTHING FOUND
            </p>

            <h2 className="font-serif text-3xl font-normal text-[#293b30]">
              {showFavorites
                ? "No saved recipes yet"
                : "No recipes found"}
            </h2>

          </div>

          <span className="text-sm text-[#778477]">
            0 recipes
          </span>

        </div>

        <div className="rounded-[14px] border border-dashed border-[#c9c4b9] bg-[#faf7f0] px-5 py-16 text-center">

          <h3 className="mb-2 font-serif text-3xl font-normal text-[#293b30]">
            {showFavorites
              ? "Your recipe shelf is empty"
              : "Try another search"}
          </h3>

          <p className="text-[#768074]">
            {showFavorites
              ? "Click the heart on a recipe to save it here."
              : "Try a different recipe name, ingredient, category, or cuisine."}
          </p>

        </div>

      </section>
    );
  }

  const visibleRecipes =
    recipes.slice(
      0,
      visibleCount
    );

  const canShowMore =
    visibleCount <
    recipes.length;

  return (
    <section className="mx-auto mb-20 w-[86%] max-w-[1200px]">

      {/* HEADING */}

      <div className="mb-7 flex items-end justify-between gap-5">

        <div>

          <p className="mb-2 text-[10px] font-bold tracking-[2px] text-[#789078]">
            {showFavorites
              ? "YOUR SAVED RECIPES"
              : "A LITTLE INSPIRATION"}
          </p>

          <h2 className="font-serif text-3xl font-normal text-[#293b30] md:text-4xl">
            {showFavorites
              ? "Recipes worth keeping"
              : "Tonight's starting point"}
          </h2>

        </div>

        <span className="text-sm text-[#778477]">
          {recipes.length} recipes
        </span>

      </div>

      {/* GRID */}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {visibleRecipes.map(
          (recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              recipe={recipe}
              isFavorite={favorites.includes(
                recipe.idMeal
              )}
              toggleFavorite={
                toggleFavorite
              }
              onSelectRecipe={
                onSelectRecipe
              }
            />
          )
        )}

      </div>

      {/* SHOW MORE */}

      {canShowMore &&
        !showFavorites && (
          <button
            type="button"
            onClick={() =>
              setVisibleCount(
                (currentCount) =>
                  currentCount + 8
              )
            }
            className="mx-auto mt-9 block rounded-full border border-[#bac4b8] px-6 py-3 font-bold text-[#3c5741] transition hover:bg-[#e3ebdf]"
          >
            Show 8 more
            <span className="ml-2">
              →
            </span>
          </button>
        )}

    </section>
  );
}

export default RecipeGrid;
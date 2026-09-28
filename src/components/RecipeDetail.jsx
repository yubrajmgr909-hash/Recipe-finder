function RecipeDetail({
  recipe,
  onClose,
  isFavorite,
  toggleFavorite,
}) {
  if (!recipe) {
    return null;
  }

  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient =
      recipe[`strIngredient${i}`];

    const measure =
      recipe[`strMeasure${i}`];

    if (
      ingredient &&
      ingredient.trim() !== ""
    ) {
      ingredients.push({
        ingredient:
          ingredient.trim(),

        measure: measure
          ? measure.trim()
          : "",
      });
    }
  }

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center overflow-y-auto bg-[#1c261d]/70 p-5"
      onClick={onClose}
    >

      <div
        className="relative max-h-[92vh] w-full max-w-[1000px] overflow-y-auto rounded-[18px] bg-[#fffdf8] shadow-2xl"
        onClick={(event) =>
          event.stopPropagation()
        }
      >

        {/* CLOSE */}

        <button
          type="button"
          onClick={onClose}
          aria-label="Close recipe"
          className="absolute right-4 top-4 z-10 flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white/90 text-3xl text-[#304334] shadow"
        >
          ×
        </button>

        {/* IMAGE */}

        <div className="h-[300px] overflow-hidden md:h-[360px]">

          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="h-full w-full object-cover"
          />

        </div>

        {/* CONTENT */}

        <div className="p-6 md:p-9">

          {/* HEADER */}

          <div className="mb-10 flex justify-between gap-6">

            <div>

              <p className="mb-2 text-[10px] font-bold tracking-[2px] text-[#789078]">
                RECIPE DETAILS
              </p>

              <h1 className="mb-4 font-serif text-4xl font-normal leading-none text-[#293b30] md:text-6xl">
                {recipe.strMeal}
              </h1>

              <div className="flex flex-wrap gap-2">

                {recipe.strCategory && (
                  <span className="rounded-full bg-[#e5edde] px-3 py-2 text-xs text-[#526553]">
                    {recipe.strCategory}
                  </span>
                )}

                {recipe.strArea && (
                  <span className="rounded-full bg-[#e5edde] px-3 py-2 text-xs text-[#526553]">
                    {recipe.strArea}
                  </span>
                )}

              </div>

            </div>

            {/* FAVORITE */}

            <button
              type="button"
              onClick={() =>
                toggleFavorite(
                  recipe.idMeal
                )
              }
              aria-label={
                isFavorite
                  ? "Remove from favorites"
                  : "Add to favorites"
              }
              className={`h-[50px] w-[50px] flex-shrink-0 rounded-full border border-[#ccd4c8] bg-[#f7f4ec] text-2xl ${
                isFavorite
                  ? "text-[#b64e4e]"
                  : "text-[#4e634f]"
              }`}
            >
              {isFavorite
                ? "♥"
                : "♡"}
            </button>

          </div>

          {/* INGREDIENTS */}

          <section className="mt-8">

            <p className="mb-2 text-[10px] font-bold tracking-[2px] text-[#789078]">
              WHAT YOU NEED
            </p>

            <h2 className="mb-5 font-serif text-3xl font-normal text-[#293b30]">
              Ingredients
            </h2>

            <div className="grid grid-cols-1 border-t border-[#e4ddd1] sm:grid-cols-2 sm:gap-x-8">

              {ingredients.map(
                (item, index) => (
                  <div
                    key={index}
                    className="flex justify-between gap-5 border-b border-[#e4ddd1] py-3 text-sm"
                  >

                    <span className="text-[#354638]">
                      {item.ingredient}
                    </span>

                    <span className="text-right text-[#788477]">
                      {item.measure}
                    </span>

                  </div>
                )
              )}

            </div>

          </section>

          {/* INSTRUCTIONS */}

          <section className="mt-10">

            <p className="mb-2 text-[10px] font-bold tracking-[2px] text-[#789078]">
              LET'S GET COOKING
            </p>

            <h2 className="mb-5 font-serif text-3xl font-normal text-[#293b30]">
              Instructions
            </h2>

            <div className="space-y-4 text-[15px] leading-7 text-[#566356]">

              {recipe.strInstructions
                ?.split(/\r?\n/)
                .filter(
                  (paragraph) =>
                    paragraph.trim() !== ""
                )
                .map(
                  (
                    paragraph,
                    index
                  ) => (
                    <p key={index}>
                      {paragraph}
                    </p>
                  )
                )}

            </div>

          </section>

        </div>

      </div>

    </div>
  );
}

export default RecipeDetail;
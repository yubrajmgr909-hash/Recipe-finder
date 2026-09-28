function RecipeCard({
  recipe,
  isFavorite,
  toggleFavorite,
  onSelectRecipe,
}) {
  return (
    <article className="overflow-hidden rounded-[14px] border border-[#e1d9ca] bg-[#fffdf8] transition duration-200 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(46,60,47,0.1)]">

      {/* IMAGE */}

      <div className="group relative h-[220px] overflow-hidden">

        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* FAVORITE */}

        <button
          type="button"
          aria-label={
            isFavorite
              ? "Remove from favorites"
              : "Add to favorites"
          }
          onClick={(event) => {
            event.stopPropagation();

            toggleFavorite(
              recipe.idMeal
            );
          }}
          className={`absolute right-3 top-3 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white/90 text-[21px] shadow-md ${
            isFavorite
              ? "text-[#b64e4e]"
              : "text-[#516151]"
          }`}
        >
          {isFavorite
            ? "♥"
            : "♡"}
        </button>

      </div>

      {/* CARD CONTENT */}

      <button
        type="button"
        onClick={() =>
          onSelectRecipe(
            recipe.idMeal
          )
        }
        className="w-full bg-transparent text-left"
      >

        <div className="p-5">

          <p className="mb-2 text-[9px] font-bold tracking-[1.8px] text-[#81907f]">
            WORTH MAKING
          </p>

          <h3 className="min-h-[50px] font-serif text-[21px] leading-tight text-[#293b30]">
            {recipe.strMeal}
          </h3>

          <div className="mt-4 flex items-center justify-between border-t border-[#e7e0d3] pt-3">

            <p className="text-xs text-[#7d887b]">
              {recipe.strArea ||
                "International"}
            </p>

            <span className="text-xl text-[#4c664f]">
              →
            </span>

          </div>

        </div>

      </button>

    </article>
  );
}

export default RecipeCard;
function SearchBox({
  search,
  setSearch,
  category,
  setCategory,
  cuisine,
  setCuisine,
  onSearch,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();

    onSearch();
  };

  const handleCategoryChange = (event) => {
    const value = event.target.value;

    setCategory(value);

    if (value) {
      setCuisine("");
    }
  };

  const handleCuisineChange = (event) => {
    const value = event.target.value;

    setCuisine(value);

    if (value) {
      setCategory("");
    }
  };

  return (
    <section className="relative z-10 mx-auto -mt-10 mb-16 w-[86%] max-w-[1200px] rounded-[18px] border border-[#e0d8ca] bg-[#fffdf8] p-6 shadow-[0_15px_35px_rgba(51,62,45,0.08)]">

      {/* SEARCH */}

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_auto]"
      >

        <div className="flex min-h-[54px] items-center rounded-[10px] border border-[#d6cebf] bg-white px-4">

          <span className="mr-3 text-2xl text-[#7c8b79]">
            ⌕
          </span>

          <input
            type="text"
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder='Try "curry" or "chicken"'
            className="w-full bg-transparent text-[#24382c] outline-none placeholder:text-[#9b9b91]"
          />

        </div>

        <button
          type="submit"
          className="rounded-[10px] bg-[#344d39] px-6 py-3 font-bold text-white transition hover:bg-[#24382c]"
        >
          Search the shelf
        </button>

      </form>

      {/* FILTERS */}

      <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">

        {/* CATEGORY */}

        <select
          value={category}
          onChange={handleCategoryChange}
          className="min-h-[46px] rounded-[9px] border border-[#d6cebf] bg-[#f8f5ed] px-3 text-[#485949] outline-none focus:border-[#6e866f]"
        >

          <option value="">
            All categories
          </option>

          <option value="Chicken">
            Chicken
          </option>

          <option value="Beef">
            Beef
          </option>

          <option value="Vegetarian">
            Vegetarian
          </option>

          <option value="Dessert">
            Dessert
          </option>

        </select>

        {/* CUISINE */}

        <select
          value={cuisine}
          onChange={handleCuisineChange}
          className="min-h-[46px] rounded-[9px] border border-[#d6cebf] bg-[#f8f5ed] px-3 text-[#485949] outline-none focus:border-[#6e866f]"
        >

          <option value="">
            Every cuisine
          </option>

          <option value="Chinese">
            Chinese
          </option>

          <option value="Japanese">
            Japanese
          </option>

          <option value="British">
            British
          </option>

          <option value="Italian">
            Italian
          </option>

          <option value="Mexican">
            Mexican
          </option>

          <option value="Greek">
            Greek
          </option>

          <option value="Thai">
            Thai
          </option>

        </select>

      </div>

    </section>
  );
}

export default SearchBox;
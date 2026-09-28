import {
  useEffect,
  useState,
} from "react";

import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import RecipeGrid from "./components/RecipeGrid";
import RecipeDetail from "./components/RecipeDetail";
import Footer from "./components/Footer";

import useFavorites from "./hooks/useFavorites";

import {
  searchMeals,
  getMealsByCategory,
  getMealsByCuisine,
  getMealDetails,
} from "./api/mealdb";

function App() {

  // =========================
  // STATES
  // =========================

  const [recipes, setRecipes] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState(""); 

  const [cuisine, setCuisine] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [selectedRecipe, setSelectedRecipe] =
    useState(null);

  const [showFavorites, setShowFavorites] =
    useState(false);

  const [visibleCount, setVisibleCount] =
    useState(8);

  // =========================
  // FAVORITES
  // =========================

  const {
    favorites,
    toggleFavorite,
    isFavorite,
  } = useFavorites();

  // =========================
  // LOAD DEFAULT RECIPES
  // =========================

  const loadDefaultRecipes =
    async () => {

      setLoading(true);
      setError("");

      try {

        const meals =
          await getMealsByCategory(
            "Chicken"
          );

        setRecipes(meals || []);

        setVisibleCount(8);

      } catch (error) {

        console.error(error);

        setError(
          "Unable to load recipes. Please check your internet connection."
        );

        setRecipes([]);

      } finally {

        setLoading(false);

      }
    };

  // =========================
  // RESET HOME
  // =========================

  const resetHome = () => {

    // Clear search
    setSearch("");

    // Clear category
    setCategory("");

    // Clear cuisine
    setCuisine("");

    // Hide favorites
    setShowFavorites(false);

    // Show first 8 recipes
    setVisibleCount(8);

    // Close recipe details
    setSelectedRecipe(null);

    // Load original home recipes
    loadDefaultRecipes();

    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  // =========================
  // CATEGORY SEARCH
  // =========================

  const handleCategorySearch =
    async () => {

      if (!category) {
        return;
      }

      setLoading(true);
      setError("");
      setVisibleCount(8);
      setShowFavorites(false);

      try {

        const meals =
          await getMealsByCategory(
            category
          );

        setRecipes(meals || []);

      } catch (error) {

        console.error(error);

        setError(
          "Unable to load recipes for this category."
        );

        setRecipes([]);

      } finally {

        setLoading(false);

      }
    };

  // =========================
  // CUISINE SEARCH
  // =========================

  const handleCuisineSearch =
    async () => {

      if (!cuisine) {
        return;
      }

      setLoading(true);
      setError("");
      setVisibleCount(8);
      setShowFavorites(false);

      try {

        const meals =
          await getMealsByCuisine(
            cuisine
          );

        setRecipes(meals || []);

      } catch (error) {

        console.error(error);

        setError(
          "Unable to load recipes for this cuisine."
        );

        setRecipes([]);

      } finally {

        setLoading(false);

      }
    };

  // =========================
  // SEARCH BY RECIPE NAME
  // =========================

  const handleSearch =
    async () => {

      setShowFavorites(false);

      setLoading(true);
      setError("");
      setVisibleCount(8);

      try {

        let meals = [];

        // Search by recipe name
        if (
          search.trim() !== ""
        ) {

          meals =
            await searchMeals(
              search.trim()
            );

        } else {

          // If search is empty,
          // return to default recipes
          meals =
            await getMealsByCategory(
              "Chicken"
            );

        }

        setRecipes(meals || []);

        // Clear filters
        setCategory("");
        setCuisine("");

      } catch (error) {

        console.error(error);

        setError(
          "Unable to search recipes. Please try again."
        );

        setRecipes([]);

      } finally {

        setLoading(false);

      }
    };

  // =========================
  // SELECT RECIPE
  // =========================

  const handleSelectRecipe =
    async (mealId) => {

      try {

        setError("");

        const meal =
          await getMealDetails(
            mealId
          );

        setSelectedRecipe(meal);

      } catch (error) {

        console.error(error);

        setError(
          "Unable to load recipe details."
        );

      }
    };

  // =========================
  // CLOSE DETAILS
  // =========================

  const closeRecipe = () => {
    setSelectedRecipe(null);
  };

  // =========================
  // INITIAL LOAD
  // =========================

  useEffect(() => {

    loadDefaultRecipes();

  }, []);

  // =========================
  // CATEGORY EFFECT
  // =========================

  useEffect(() => {

    if (category) {
      handleCategorySearch();
    }

  }, [category]);

  // =========================
  // CUISINE EFFECT
  // =========================

  useEffect(() => {

    if (cuisine) {
      handleCuisineSearch();
    }

  }, [cuisine]);

  // =========================
  // RESET VISIBLE COUNT
  // =========================

  useEffect(() => {

    setVisibleCount(8);

  }, [showFavorites]);

  // =========================
  // FAVORITE RECIPES
  // =========================

  const favoriteRecipes =
    recipes.filter((recipe) =>
      favorites.includes(
        recipe.idMeal
      )
    );

  const displayedRecipes =
    showFavorites
      ? favoriteRecipes
      : recipes;

  // =========================
  // RETURN
  // =========================

  return (
    <div className="min-h-screen bg-[#f5f0e6] text-[#24382c]">

      {/* =========================
          HEADER
      ========================= */}

      <Header
        favoritesCount={
          favorites.length
        }
        showFavorites={
          showFavorites
        }
        setShowFavorites={
          setShowFavorites
        }
        onResetHome={
          resetHome
        }
      />

      <main>

        {/* =========================
            HERO
        ========================= */}

        <section className="flex min-h-[430px] items-center bg-[#dce8d7] px-[7%] py-20">

          <div className="max-w-[720px]">

            <p className="mb-5 text-xs font-bold tracking-[3px] text-[#627762]">
              SUPPER NOTES
            </p>

            <h1 className="mb-7 font-serif text-[48px] font-normal leading-[0.95] text-[#24382c] sm:text-[60px] md:text-[75px]">
              Good food.
              <br />
              No overthinking.
            </h1>

            <p className="max-w-[570px] text-base leading-7 text-[#536656] md:text-lg">
              Find simple recipes for real
              evenings. Search by dish,
              category, or cuisine.
            </p>

          </div>

        </section>

        {/* =========================
            SEARCH BOX
        ========================= */}

        <SearchBox
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          cuisine={cuisine}
          setCuisine={setCuisine}
          onSearch={handleSearch}
        />

        {/* =========================
            RECIPE GRID
        ========================= */}

        <RecipeGrid
          recipes={
            displayedRecipes
          }
          loading={loading}
          error={error}
          favorites={favorites}
          toggleFavorite={
            toggleFavorite
          }
          onSelectRecipe={
            handleSelectRecipe
          }
          visibleCount={
            visibleCount
          }
          setVisibleCount={
            setVisibleCount
          }
          showFavorites={
            showFavorites
          }
        />

      </main>

      {/* =========================
          FOOTER
      ========================= */}

      <Footer />

      {/* =========================
          RECIPE DETAILS
      ========================= */}

      {selectedRecipe && (
        <RecipeDetail
          recipe={
            selectedRecipe
          }
          onClose={
            closeRecipe
          }
          isFavorite={isFavorite(
            selectedRecipe.idMeal
          )}
          toggleFavorite={
            toggleFavorite
          }
        />
      )}

    </div>
  );
}

export default App;
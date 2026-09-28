import {
  useEffect,
  useState,
} from "react";

function useFavorites() {
  const [favorites, setFavorites] =
    useState(() => {
      const saved =
        localStorage.getItem(
          "supperNotesFavorites"
        );

      if (!saved) {
        return [];
      }

      try {
        return JSON.parse(saved);
      } catch (error) {
        console.error(
          "Error loading favorites:",
          error
        );

        return [];
      }
    });

  useEffect(() => {
    localStorage.setItem(
      "supperNotesFavorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  const toggleFavorite = (mealId) => {
    setFavorites(
      (currentFavorites) => {
        if (
          currentFavorites.includes(
            mealId
          )
        ) {
          return currentFavorites.filter(
            (id) => id !== mealId
          );
        }

        return [
          ...currentFavorites,
          mealId,
        ];
      }
    );
  };

  const isFavorite = (mealId) => {
    return favorites.includes(
      mealId
    );
  };

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  };
}

export default useFavorites;
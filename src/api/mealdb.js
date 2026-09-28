const BASE_URL =
  "https://www.themealdb.com/api/json/v1/1";

// Search recipes by name
export async function searchMeals(searchTerm) {
  const response = await fetch(
    `${BASE_URL}/search.php?s=${encodeURIComponent(
      searchTerm
    )}`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to search recipes"
    );
  }

  const data = await response.json();

  return data.meals || [];
}

// Search recipes by ingredient
export async function searchMealsByIngredient(
  ingredient
) {
  const response = await fetch(
    `${BASE_URL}/filter.php?i=${encodeURIComponent(
      ingredient
    )}`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to search recipes by ingredient"
    );
  }

  const data = await response.json();

  return data.meals || [];
}

// Get recipes by category
export async function getMealsByCategory(
  category
) {
  const response = await fetch(
    `${BASE_URL}/filter.php?c=${encodeURIComponent(
      category
    )}`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to get recipes by category"
    );
  }

  const data = await response.json();

  return data.meals || [];
}

// Get recipes by cuisine
export async function getMealsByCuisine(
  cuisine
) {
  const response = await fetch(
    `${BASE_URL}/filter.php?a=${encodeURIComponent(
      cuisine
    )}`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to get recipes by cuisine"
    );
  }

  const data = await response.json();

  return data.meals || [];
}

// Get complete recipe details
export async function getMealDetails(
  mealId
) {
  const response = await fetch(
    `${BASE_URL}/lookup.php?i=${mealId}`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to get recipe details"
    );
  }

  const data = await response.json();

  return data.meals?.[0] || null;
}

// Get categories
export async function getCategories() {
  const response = await fetch(
    `${BASE_URL}/list.php?c=list`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to get categories"
    );
  }

  const data = await response.json();

  return data.meals || [];
}

// Get cuisines
export async function getCuisines() {
  const response = await fetch(
    `${BASE_URL}/list.php?a=list`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to get cuisines"
    );
  }

  const data = await response.json();

  return data.meals || [];
}

// Get ingredients
export async function getIngredients() {
  const response = await fetch(
    `${BASE_URL}/list.php?i=list`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to get ingredients"
    );
  }

  const data = await response.json();

  return data.meals || [];
}
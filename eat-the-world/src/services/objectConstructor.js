// Generate object with cleaned data
export default function generateObjetRecipe(item) {
  const recipe = {
    recipeId: item.idMeal,
    name: item.strMeal,
    country: item.strArea === 'Unknown' ? 'Other countries' : item.strArea,
    instructions: item.strInstructions,
    category: item.strCategory,
    picture: item.strMealThumb,
    isFavorite: false,
    ingredients: [],
  };
  for (let i = 1; i < 20; i++) {
    // Join ingredients and quantities in a single object (filter out empty strings)
    if (item[`strIngredient${i}`]?.trim()) {
      recipe.ingredients.push({
        ingredient: item[`strIngredient${i}`],
        quantity: item[`strMeasure${i}`],
      });
    }
  }
  return recipe;
}

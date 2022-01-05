function UseDrink() {
  const fetchDrinks = async (MAX_LENGTH) => {
    const { drinks } = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=').then((response) => response.json());
    return drinks.slice(0, MAX_LENGTH);
  };

  const fetchDrinkById = async (id) => {
    const { drinks } = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`).then((response) => response.json());
    return drinks[0];
  };

  const fetchDrinksByIngredient = async (ingredient) => {
    const { drinks } = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`).then((response) => response.json());
    return drinks;
  };

  const fetchDrinksByName = async (name) => {
    const { drinks } = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`).then((response) => response.json());
    return drinks;
  };

  const fetchDrinksByFirstLetter = async (letter) => {
    const { drinks } = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`).then((response) => response.json());
    return drinks;
  };

  return {
    fetchDrinks,
    fetchDrinkById,
    fetchDrinksByIngredient,
    fetchDrinksByName,
    fetchDrinksByFirstLetter,
  };
}

export default UseDrink;
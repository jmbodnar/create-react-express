export async function getRecipes() {
  try {
    return await (await fetch("http://localhost:3001/api/recipes")).json();
  } catch (error) {
    console.error(error);
  }
}

export async function getRecipeId(id) {
  try {
    return await (await fetch(`http://localhost:3001/api/recipe/${id}`)).json();
  } catch (error) {
    console.error(error);
  }
}

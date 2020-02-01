export async function getRecipes() {
  try {
    return await (await fetch("http://localhost:3000/api/recipes")).json();
  } catch (error) {
    console.error(error);
  }
}

export async function getRecipeId(id) {
  try {
    return await (await fetch(`http://localhost:3000/api/recipe/${id}`)).json();
  } catch (error) {
    console.error(error);
  }
}

export async function getRecipes() {
  try {
    return (await fetch("/api/recipes")).json();
  } catch (error) {
    console.error(error);
  }
}

export async function getRecipeId(id) {
  try {
    return (await fetch(`/api/recipe/${id}`)).json();
  } catch (error) {
    console.error(error);
  }
}

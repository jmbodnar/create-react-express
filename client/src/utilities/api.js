// ===== Get Requests ===== //

export async function getRecipes() {
  try {
    return await (await fetch("http://localhost:3001/api/recipes")).json();
  } catch (error) {
    console.error(error);
  }
}

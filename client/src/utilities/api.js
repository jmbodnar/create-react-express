export async function getRecipes() {
  try {
    return (await fetch("/api/recipes")).json();
  } catch (error) {
    console.error(error);
  }
}

export async function getRecipeById(id) {
  try {
    return (await fetch(`/api/recipe/${id}`)).json();
  } catch (error) {
    console.error(error);
  }
}

export async function addRecipeComment(recipeId, commentData) {
  try {
    return await fetch(`/api/comment/${recipeId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(commentData)
    });
  } catch (error) {
    console.error(error);
  }
}

export async function addUser(email, user) {
  sessionStorage.setItem("user", JSON.stringify(user));
  try {
    return await fetch(`/api/users/${email}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(() => {
      sessionStorage.setItem("user", JSON.stringify(user));
    });
  } catch (error) {
    console.error(error);
  }
}

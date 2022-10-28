import React, { useState } from 'react';
import RecipeCard from './RecipeCard';

const RecipeView = ({ recipes }) => {
  const [search, setSearch] = useState('');

  const recipeDisplay = recipes
    .filter((recipe, index) => {
      let title = recipe.recipe_name.toLowerCase();
      let searchParams = search.toLowerCase();
      return title.includes(searchParams);
    })
    .filter((recipe) => {
      if (recipe.recipe_name && recipe.image_url) {
        if (recipe.image_url.includes('/')) return recipe;
      }
    })
    .map((recipe, index) => {
      return <RecipeCard recipe={recipe} />;
    });

  return (
    <div className="recipe-view">
      <div className="rec-input-ctr">
        &#x1F50D;
        <input
          className="search-recipes"
          placeholder="Search for a Recipe"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="recipe-card-ctr">
        {recipeDisplay ? recipeDisplay : <h2>No Recipes :</h2>}
      </div>
    </div>
  );
};

export default RecipeView;

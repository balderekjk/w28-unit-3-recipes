import React from 'react';
import { useNavigate } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${recipe.recipe_id}`);
  };

  return (
    <div className="recipe-card">
      <div>
        <img src={recipe.image_url} alt={'Image of ' + recipe.recipe_name} />
      </div>
      <h2>{recipe.recipe_name}</h2>
      <button onClick={handleClick} className="blue-button main-button">
        See More
      </button>
    </div>
  );
};

export default RecipeCard;

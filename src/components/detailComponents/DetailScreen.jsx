import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AdBanner from '../homeComponents/AdBanner';

const DetailScreen = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    axios.get(`https://recipes.devmountain.com/recipes/${id}`).then((res) => {
      setRecipe(res.data);
    });
  }, []);

  return (
    <section>
      <AdBanner recipe={recipe} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          width: '100vw',
        }}
      >
        <div className="instructions">
          <h2>Recipe</h2>
          {recipe.prep_time && recipe.cook_time && recipe.serves && (
            <div>
              <p>Prep Time: {recipe.prep_time}</p>
              <p>Cook Time: {recipe.cook_time}</p>
              <p>Serves: {recipe.serves}</p>
            </div>
          )}
          <h2>Ingredients</h2>
          <div>
            {recipe.ingredients &&
              recipe.ingredients.map((ing, index) => {
                return (
                  <p>
                    {ing.quantity} {ing.ingredient}
                  </p>
                );
              })}
          </div>
        </div>
        <div className="instructions">
          <h2>Instructions</h2>
          <p style={{ whiteSpace: 'pre-wrap' }}>
            {recipe.instructions && JSON.parse(recipe.instructions)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailScreen;

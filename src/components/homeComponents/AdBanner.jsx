import React from 'react';
import salmon from '../../assets/salmon.jpg';
import { Link } from 'react-router-dom';

const AdBanner = ({ isSummary, setIsSummary, recipe }) => {
  const handleClick = () => {
    setIsSummary(false);
  };

  return (
    <div
      className="banner-background"
      style={{
        backgroundImage: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${recipe ? recipe.image_url : salmon})`,
        backgroundSize: recipe ? '60vh' : 'cover',
      }}
    >
      <div className="recipe-text-shell">
        {isSummary ? <h3>New Recipe</h3> : ''}
        <h1 className="recipe-header">
          {recipe ? recipe.recipe_name : 'Pineapple Salmon'}
        </h1>
        {isSummary ? (
          <>
            <h3>
              This recipe consists of fresh wild Alaskan salmon, rubbed in a bbq
              brown sugar rub, baked for 25 minutes on a bed of pineapple, and
              garnished in butter, garlic, and chives. You won’t want to miss
              it!
            </h3>
            <Link to="/recipe/3">
              <button onClick={handleClick} className="main-button blue-button">
                Check it out
              </button>
            </Link>
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default AdBanner;

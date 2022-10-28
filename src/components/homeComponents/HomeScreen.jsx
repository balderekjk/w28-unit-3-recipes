import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdBanner from './AdBanner';
import RecipeView from '../RecipeView';

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);
  const [isSummary, setIsSummary] = useState(true);

  useEffect(() => {
    axios.get('https://recipes.devmountain.com/recipes').then((res) => {
      setRecipes(res.data);
    });
  }, []);

  return (
    <div>
      <AdBanner isSummary={isSummary} setIsSummary={setIsSummary} />
      <RecipeView recipes={recipes} />
    </div>
  );
};

export default HomeScreen;

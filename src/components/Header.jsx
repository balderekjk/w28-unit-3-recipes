import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="main-nav">
      <h2>Devmountain Eatery</h2>
      <nav>
        <Link to="">
          <button>Home</button>
        </Link>
        <Link to="/newRecipe">
          <button>Add Recipe</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;

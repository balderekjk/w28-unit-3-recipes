import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import axios from 'axios';

const NewRecipeScreen = () => {
  const navigate = useNavigate();
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const addIngredient = () => {
    if (name && quantity) {
      setIngredients((prevIngredients) => [
        ...prevIngredients,
        { name, quantity },
      ]);
      setName('');
      setQuantity('');
    } else {
      window.alert('Please fill both ingredient and quantity field');
    }
  };

  const initialValues = {
    type: '',
    recipeName: '',
    imageURL: '',
    prepTime: '',
    cookTime: '',
    serves: '',
    ingredients: [],
    instructions: '',
  };

  const onSubmit = (values) => {
    values.ingredients = ingredients;
    if (
      values.type &&
      values.recipeName &&
      values.imageURL &&
      values.prepTime &&
      values.cookTime &&
      values.serves &&
      values.ingredients.length &&
      values.instructions
    ) {
      axios.post(`https://recipes.devmountain.com/recipes`, values);
      navigate('/');
    } else {
      window.alert('Please fill all fields');
    }
  };

  const ingredientDisplay = ingredients.map((ing) => {
    return (
      <li>
        {ing.quantity} {ing.name}
      </li>
    );
  });

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        margin: '1em 0',
      }}
    >
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid orangered',
          minWidth: 'fit-content',
          width: '45vw',
          alignItems: 'center',
          padding: '1em',
          boxSizing: 'border-box',
        }}
      >
        <h1 style={{ color: 'hsl(0, 0%, 14%)' }}>Tell us about your Recipe!</h1>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit} className="add-recipe-form">
              <div style={{ display: 'flex' }}>
                <input
                  placeholder="Name"
                  value={values.recipeName}
                  onChange={handleChange}
                  name="recipeName"
                />
                <input
                  placeholder="Image URL"
                  value={values.imageURL}
                  onChange={handleChange}
                  name="imageURL"
                />
              </div>
              <div style={{ display: 'flex' }}>
                <span>
                  <input
                    type="radio"
                    value="Cook"
                    onChange={handleChange}
                    name="type"
                  />
                  <h5>Cook</h5>
                </span>
                <span>
                  <input
                    type="radio"
                    value="Bake"
                    onChange={handleChange}
                    name="type"
                  />
                  <h5>Bake</h5>
                </span>
                <span>
                  <input
                    type="radio"
                    value="Drink"
                    onChange={handleChange}
                    name="type"
                  />
                  <h5>Drink</h5>
                </span>
              </div>
              <div style={{ display: 'flex' }}>
                <input
                  placeholder="Prep Time"
                  value={values.prepTime}
                  onChange={handleChange}
                  name="prepTime"
                />
                <input
                  placeholder="Cook Time"
                  value={values.cookTime}
                  onChange={handleChange}
                  name="cookTime"
                />
                <input
                  placeholder="Servings"
                  value={values.serves}
                  onChange={handleChange}
                  name="serves"
                />
              </div>
              <div style={{ display: 'flex', marginBottom: '1em' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <input
                    placeholder="Ingredient"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="ingredient"
                  />
                  <input
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    name="quantity"
                  />
                </div>
                <ul>{ingredientDisplay}</ul>
              </div>
              <button
                type="button"
                onClick={addIngredient}
                className="main-button orange-button"
              >
                Add Ingredient
              </button>
              <br />
              <textarea
                name="instructions"
                placeholder="What are the instructions?"
                style={{ marginBottom: '1em' }}
                onChange={handleChange}
                value={values.instructions}
              />
              <button className="main-button blue-button" type="submit">
                Submit
              </button>
            </form>
          )}
        </Formik>
      </section>
    </div>
  );
};

export default NewRecipeScreen;

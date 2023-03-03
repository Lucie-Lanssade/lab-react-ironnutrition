// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import React, { useState } from 'react';

// Iteration 4
function AddFoodForm(props) {
  const { foods, setFoods } = props;

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleNameChange = (event) => setName(event.target.value);
  const handleImageChange = (event) => setImage(event.target.value);
  const handleCaloriesChange = (event) => setCalories(event.target.value);
  const handleServingsChange = (event) => setServings(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    const foodToCreate = {
      name,
      image,
      calories,
      servings,
    };

    setFoods([...foods, foodToCreate]);
    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label htmlFor="name">Name</label>
      <Input name="name" value={name} type="text" onChange={handleNameChange} />

      <label htmlFor="image">Image</label>
      <Input
        name="image"
        value={image}
        type="file"
        onChange={handleImageChange}
      />

      <label htmlFor="calories">Calories</label>
      <Input
        name="calories"
        value={calories}
        type="number"
        onChange={handleCaloriesChange}
      />

      <label htmlFor="servings">Servings</label>
      <Input
        name="servings"
        value={servings}
        type="text"
        onChange={handleServingsChange}
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;

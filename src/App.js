import logo from './logo.svg';
import './App.css';
import FoodBox from './components/FoodBox';
import allFoods from './foods.json';
import AddFoodForm from './components/AddFoodForm';
import React, { useState } from 'react';
import Search from './components/Search';
import { Divider } from 'antd';

function App() {
  const [foods, setFoods] = useState(allFoods);

  const addNewFood = (newFood) => {
    const updateFood = [newFood, ...foods];
    setFoods(updateFood);
  };

  // const [formDisplay, setFormDisplay] = useState(false);
  // console.log(foods);
  // const showForm = () => {
  //   formDisplay ? setFormDisplay(false) : setFormDisplay(true);
  // };

  const searchFood = (foodSearched) => {
    const foodToSearch = foods.filter((food) =>
      food.name.toLowerCase().includes(foodSearched.toLowerCase())
    );
    setFoods(foodToSearch);
  };

  const deleteFood = (foodToDelete) => {
    const foodToKeep = allFoods.filter((food) => {
      return food.name !== foodToDelete;
    });

    setFoods(foodToKeep);
  };

  return (
    <div className="App">
      <AddFoodForm createForm={addNewFood} />
      <Search searchFood={searchFood} />
      <Divider>FoodBox</Divider>

      {foods.map((food) => {
        return (
          <FoodBox
            key={food.name}
            food={{
              name: food.name,
              calories: food.calories,
              image: food.image,
              servings: food.servings,
            }}
            deleteFood={deleteFood}
          />
        );
      })}
    </div>
  );
}

export default App;

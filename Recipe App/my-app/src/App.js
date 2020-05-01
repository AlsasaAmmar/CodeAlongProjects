import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe'; 


function App() {
  const APP_ID = '67a8ffbe'; 
  const APP_KEY = 'e5dbbf74550473438ddbc81da230cab6'; 
  
  const [recipes, setRecipes] = useState([]); 
  const [search, setSearch] = useState(''); 
  const [query, setQuery] = useState('chicken')

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`; 

  useEffect( 
    ()=> {
      getRecipes(); 
  }, [query])

  const getRecipes = async()=> {
    const response = await fetch(url); 
    const data = await response.json(); 
    setRecipes(data.hits);
  }
  const handleInput =(e)=>{
    setSearch(e.target.value);
  }
  console.log(search);
  const getSearch = e => {
    e.preventDefault();// stops getting the info every time we type
    setQuery(search)
  }

  return (
    <div className="App">
     <form onSubmit ={getSearch} className="search-form">
       <input className= "search-bar" type= 'text' value={search} onChange={handleInput}/ >
       <button className="search-btn" type= 'submit'> Search </button> 
     </form>
     {recipes.map((recipe)=>
       (<Recipe 
        key={recipe.recipe.label}
       title={recipe.recipe.label}
       calories={recipe.recipe.calories}
       image ={recipe.recipe.image}
       />) 
      )}
    </div>
  );
}

export default App;

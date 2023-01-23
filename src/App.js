import NavBar from "./NavBar";
import Title from "./Title";
import RecipeList from "./Components/RecipeList";
import Search from "./Search";
import CakeForm from "./Components/CakeForm";
import React, {useState} from "react";

function App() {

  const [Cake, setCakeForm] = useState();

  const addNewCake = (newCake) => {
    setCakeForm([...CakeForm, newCake]);
  }

  return (
    <>
      <header>
        <NavBar />
        <Title />
      </header>
      <main>
        <RecipeList RecipeList={RecipeList}/>
        <Search />
        <CakeForm addNewCake={addNewCake}/>
      </main>
    </>
  );
}

export default App;

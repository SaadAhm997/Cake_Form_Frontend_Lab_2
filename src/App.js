import NavBar from "./NavBar";
import Title from "./Title";
import RecipeList from "./Components/RecipeList";
import Search from "./Search";
import CakeForm from "./Components/CakeForm";

function App() {
  return (
    <>
      <header>
        <NavBar />
        <Title />
      </header>
      <main>
        <RecipeList />
        <Search />
        <CakeForm />
      </main>
    </>
  );
}

export default App;

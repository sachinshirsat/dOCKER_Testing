import CuisinesofIndia from "./components/CuisinesofIndia";
import Foodlistpage from "./components/Foodlistpage";
import FoodnFestivals from "./components/FoodnFestivals";
import HerbsnSpicelistpage from "./components/HerbsnSpicelistpage";
import MainCourselistpage from "./components/MainCourselistpage";
import TimelessRecipes from "./components/TimelessRecipes";
import FoodnCulture from "./components/FoodnCulture";
import FCCuisineListpage from "./components/FCCuisineListpage";
import FCCuisineResultpage from "./components/FCCuisineResultpage";
import FCHerbsnSpiceResultpage from "./components/FCHerbsnSpiceResultpage";
import FCFoodFestivalsResultpage from "./components/FCFoodFestivalsResultpage";
import FoodnCultureResultpage from "./components/FoodnCultureResultpage";
import FCFoodImagesResultpage from "./components/FCFoodImagesResultpage";
import FCMainCourseResultpage from "./components/FCMainCourseResultpage";

function App() {
  return (
    <>
      <FoodnCulture />
      <FoodnCultureResultpage />
      <CuisinesofIndia />
      <FCCuisineListpage />
      <FCCuisineResultpage />
      <TimelessRecipes />
      <MainCourselistpage />
      <FCMainCourseResultpage />
      <HerbsnSpicelistpage />
      <FCHerbsnSpiceResultpage />
      <Foodlistpage />
      <FCFoodImagesResultpage />
      <FoodnFestivals />
      <FCFoodFestivalsResultpage />
    </>
  );
}


export default App;

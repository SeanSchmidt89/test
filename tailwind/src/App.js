import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Offers from "./components/Offers";
import Plan from "./components/Plan";
import Rooms from "./components/Rooms";
import ImageSlider from "./components/ImageSlider";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Offers />
      <Plan />
      <Rooms />
      {/* <ImageSlider /> */}
    </div>
  );
}

export default App;

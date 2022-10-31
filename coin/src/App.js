import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Featured from "./components/Featured/Featured";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <NavBar />
        <Hero />
        <Featured />
      </Provider>
    </div>
  );
}

export default App;

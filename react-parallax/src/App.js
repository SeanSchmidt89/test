import ImageOne from "./componenets/ImageOne";
import ImageTwo from "./componenets/ImageTwo";
import ImageThree from "./componenets/ImageThree";
import TextBox from "./componenets/TextBox";
import { Provider } from "react-redux";
import store from "./store/index";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ImageOne />
        <TextBox />
        <ImageTwo />
        <TextBox />
        <ImageThree />
      </Provider>
    </div>
  );
}

export default App;

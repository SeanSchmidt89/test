import SideNav from "./components/SideNav/SideNav";
import Main from "./components/Main/Main";
import Work from "./components/Work/Work";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <SideNav />
      <Main />
      <Work />
      <Projects />
    </div>
  );
}

export default App;

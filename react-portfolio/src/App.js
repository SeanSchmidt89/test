import SideNav from "./components/SideNav/SideNav";
import Main from "./components/Main/Main";
import Work from "./components/Work/Work";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <SideNav />
      <Main />
      <Projects />
      <Work />
      <Contact />
    </div>
  );
}

export default App;

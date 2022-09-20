import "./App.css";
import TodoForm from "./comps/TodoForm";
import TodoList from "./comps/TodoList";

function App() {
  
  return (
    <div className="App">
      <h1>redux todo</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;

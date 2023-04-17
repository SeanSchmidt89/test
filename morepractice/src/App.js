import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";
function App() {
  return (
    <div className="App">
      <h1 className="header">My todo App</h1>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;

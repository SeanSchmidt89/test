import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>todo app</h1>
      <TodoList />
    </div>
  );
}

export default App;

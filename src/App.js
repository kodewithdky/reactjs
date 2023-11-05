import "./App.css";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="text-center">
      <h1>Learn redux toolkit</h1>
      <AddTodo/>
      <Todo/>
    </div>
  );
}

export default App;

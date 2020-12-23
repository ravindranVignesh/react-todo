import './App.css';
import TodoList from "./components/TodoList";
import Header from "./layout/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <TodoList/>
      </div>
    </div>
  );
}

export default App;

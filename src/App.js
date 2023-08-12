//import "./App.css";
import Form from "./Components/Form";
import { useState } from "react";
import TodoList from "./Components/TodoList";

function App() {
  //this state keeps track of all our todo list items
  const [todos, setTodos] = useState([]);

  //this function updates the list when user submits a new item
  //the parameter is just some text
  function addTodo(newTodo) {
  //using the spread operator we are using the existing list whilst also adding the new one   
    setTodos([...todos, newTodo]);
  }

  //here we can see the latest value of our list 
  //console.log(todos)

  return (
    <div className="App">
      <h1> Naomi's ToDo List</h1>
  {/* here we are passing the function down as a prop so that the list updates when the user clicks the submit button to add a new item */}
      <Form addTodo={addTodo} />
  {/* here we are passing the state variable down as a prop to render each item submitted*/}
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;

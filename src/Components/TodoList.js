import ListItem from "./ListItem";

//passing down the todos state variable as a prop to render
function TodoList({ todos, removeTodo }) {
  return (
    <div>
      {
        //map takes the todos text & returns each ListItem text as a list
        todos.map((todo, index) => {
          //text={todo}: assigns the value of the current todo to a prop called "text." This is what will be displayed as the task text in the component.
          //key={index}: a special prop used by React to uniquely identify each element in a list. It helps React efficiently update the list when changes occur.
          //removeTodo={() => removeTodo(index)}: when the user interacts with the ListItem component and the callback is triggered, it invokes the removeTodo function and provides the index of the specific todo that needs to be removed. This allows the removeTodo function to know exactly which todo to delete from the list.
          return (
            <ListItem
              text={todo}
              key={index}
              removeTodo={() => removeTodo(index)}
            />
          );
        })
      }
    </div>
  );
}

export default TodoList;

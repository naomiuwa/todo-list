import ListItem from "./ListItem";

//passing down the todos state variable as a prop to render
function TodoList({ todos }) {
  return (
    <div>
      {
        //map takes the todos text & transforms it into a list
        todos.map((todo, index) => {
          return <ListItem text={todo} key={index} />;
        })
      }
    </div>
  );
}

export default TodoList;

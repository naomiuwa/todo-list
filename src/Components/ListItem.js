//this component will rendered through the TodoList component

function ListItem({ text, removeTodo }) {
  return (
    <div>
    {/* the p tag has the prop of the text value entered  */}
      <p> {text} </p>
      {/* onClick invokes the removeTodo prop/function & the TodoList component removes the index at which it has to be deleted*/}
      <button onClick={removeTodo}>Delete</button>
    </div>
  );
}

export default ListItem;

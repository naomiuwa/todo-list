//this component will rendered through the TodoList component

function ListItem({ text }) {
  return (
    <div>
      <p> {text} </p>
      <button></button>
    </div>
  );
}

export default ListItem;

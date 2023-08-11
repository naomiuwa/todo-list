import { useState } from "react";

function Form({addTodo}) {
  //this state keeps a track of the text the users types in the input field
  //'text' is the variable that stores what is being typed
  //'setText' is the function that updates the text variable once the submit button is clicked
  const [text, setText] = useState("");

  //this function is to see the value of the 'text' variable when printed
  function handleSubmit(event) {
    //this stops the page from refreshing everytime the button is clicked
    event.preventDefault();
    //this will contain the text variable we want to add to our list
    addTodo(text);
    setText("");
  }

  return (
    //when the submit button is clicked, the handleSubmit function is called

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        //the value in the text field is equal to the 'text' variable
        value={text}
        //onChange detects when the value has changed and updates it to the latest value e.g. setText
        onChange={(event) => setText(event.target.value)}
      />
      <input type="submit" />
    </form>
  );
}

export default Form;

import { useState } from "react";

function Form() {
  //this state keeps a track of the text the users types in the text
  //'text' is the variable that stores what is being typed
  //'setText' is the function that updates the text once the button is clicked
  const [text, setText] = useState("");

  return (
    <>
      <input
        type="text"
        //the value in the text field is equal to the 'text' variable
        value={text}
        //onChange detects when the value has changed and updates it to the latest value
        onChange={(event) => setText(event.target.value)}
      />
      <input type="submit" />
    </>
  );
}

export default Form;

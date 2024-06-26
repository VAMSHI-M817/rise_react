import { useState } from "react";

const Todo = () => {
  //EDIT BUTTON STATE
  const [editingItem, setEditingItem] = useState({
    id: "",
    isEditing: false,
  });

  //TODOS LIST STATE
  const [List, setList] = useState([]);

  //INPUT STATE
  const [message, setMessage] = useState({
    text: "",
    id: "",
  });

  //FUNCTION TO EDIT STATE OF EDIT BUTTON
  const changeEditState = (commingId) => {
    setEditingItem({
      ...editingItem,
      id: commingId,
      isEditing: true,
    });

    let editableItem = List.find((eachItem) => {
      return eachItem.id === commingId;
    });

    setMessage({
      ...message,
      id: editableItem.id,
      text: editableItem.text,
    });
    console.log(editableItem);
  };

  //FUNCTION FOR SUBMIT OF EDITED TODO
  const handleEdit = (e) => {
    e.preventDefault();
    const newTodos = List.map((eachItem) => {
      if (eachItem.id === editingItem.id) {
        return {
          id: editingItem.id,
          text: message.text,
        };
      } else {
        return eachItem;
      }
    });
    setList(newTodos);
    setMessage({
      text: "",
    });
    setEditingItem({
      isEditing: false,
    });
  };

  //FUNCTION TO SUBMIT TODO
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      ...message,
      text: message.text,
      id: new Date().getTime().toString(),
    };

    !message.text
      ? alert("Please enter todo")
      : (setList([...List, newTodo]), setMessage({ text: "" }));
  };

  //THIS WORKS FOR HANDLING DELETION OF TODO
  const handleDelete = (commingId) => {
    const filterTodo = List.filter((eachItem) => {
      return eachItem.id !== commingId;
    });
    setList(filterTodo);
  };

  return (
    <section>
      <form autoComplete="off">
        <input
          type="text"
          id="message"
          name="message"
          value={message.text}
          placeholder="Enter your todo"
          onChange={(e) => {
            setMessage({
              ...message,
              text: e.target.value,
            });
          }}
        />
        {editingItem.isEditing ? (
          <button type="submit" onClick={(e) => handleEdit(e)}>
            Edit
          </button>
        ) : (
          <button type="submit" onClick={(e) => handleSubmit(e)}>
            Add
          </button>
        )}
      </form>
      <br />
      <hr />
      {List.length === 0 && <h4>Todos not available !</h4>}
      <ul>
        {List.map((eachItem) => {
          const { id, text } = eachItem;
          return (
            <li key={id}>
              <span>{text}</span>
              <button onClick={() => changeEditState(id)}>Edit</button>
              <button onClick={() => handleDelete(id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Todo;

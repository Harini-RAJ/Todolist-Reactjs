import React, { useState } from 'react';
import useTodoStore from '../../store/todoStore';

const AddTodoform = () => {
  const [text, setText] = useState('');

  const addTodo = useTodoStore((state) => ({
    addTodo: state.addTodo,
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo.addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-between p-2">
      <input
        className="flex-1 p-2 border rounded"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoform;
